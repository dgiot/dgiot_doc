---
title: 插件机制
sidebar_position: 6
---

# 插件机制

## 目录结构
rebar3插件目录结构如下：
```
dgiot
|——lib
   |-dgiot_demoplugin
               |- ebin
                   |- dgiot_demopugin.app
                    - dgiot_demoplugin.beam
                    - dgiot_demoplugin_app.beam
                    - dgiot_demoplugin_sup.beam
                    - dgiot_demonplugin_channel.beam
                    - dgiot_demonplugin_handler.beam  
   -dgiot_otherplugin
               |- ebin
                    |- dgiot_otherplugin.app
                     - dgiot_otherplugin.beam
                     - dgiot_otherplugin_app.beam
                     - dgiot_otherplugin_sup.beam
                     - dgiot_otherplugin_channel.beam
                     - dgiot_otherplugin_handler.beam 
```

## 示例代码
``` erlang
  %%%-------------------------------------------------------------------
  %%% @author johnliu
  %%% @copyright (C) 2021, <COMPANY>
  %%% @doc
  %%%
  %%% @end
  %%% Created : 24. 3月 2021 10:17
  %%%-------------------------------------------------------------------
  -module(dgiot_demonplugin_channel).
  -author("johnliu").
  -behavior(dgiot_channelx).
  -include("dgiot_demonplugin.hrl").
  -define(TYPE, <<"demonplugin">>).
  -record(state, {id}).
  %% API
  -export([
      start/2
  ]).
  
  %% Channel callback
  -export([init/3, handle_init/1, handle_event/3, handle_message/2, stop/3]).
  -channel(?TYPE).
  -channel_type(#{
      type => 1,
      title => #{
          zh => <<"demonplugin通道"/utf8>>
      },
      description => #{
          zh => <<"demonplugin通道"/utf8>>
      }
  }).
  %% 注册通道参数
  -params(#{
      <<"port">> => #{
          order => 2,
          type => integer,
          required => true,
          default => 51889,
          title => #{
              zh => <<"服务器端口"/utf8>>
          },
          description => #{
              zh => <<"服务器端口"/utf8>>
          }
      }
  }).
  
  start(ChannelId, ChannelArgs) ->
      dgiot_channelx:add(?TYPE, ChannelId, ?MODULE, ChannelArgs).
  
  %% 通道初始化
  init(?TYPE, ChannelId, Args) ->
      #{
          <<"ip">> := Ip,
          <<"port">> := Port,
          <<"total">> := Total} = Args,
      do_something(<<"hello plugin">>),
      State = #state{
          id = ChannelId
      },
      {ok, State, []}.
  
  handle_init(State) ->
      {ok, State}.
  
  %% 通道消息处理,注意：进程池调用
  handle_event(_EventId, Event, State) ->
      lager:info("channel ~p", [Event]),
      {ok, State}.
  
  handle_message(_Message, State) ->
      {ok, State}.
  
  stop(ChannelType, ChannelId, _State) ->
      
      ok.
 
do_something(Msg) ->
   io:format("Msg ~p",[Msg]).
``` 
## 加载机制

+ 搜索到所有已经加载的插件
  application:loaded_applications()
+ 通过App名称搜索ebin下面所有的beam文件
  file:list_dir(Dir)
+ 搜素对应beam文件内的attributes是否包含channel
  Mod:module_info(attributes)
+ 如果有channele的attributes则启动插件
   Mod:start(ChannelId, ChannelArgs)
   
示例代码如下：

``` erlang
  %%%-------------------------------------------------------------------
  %%% @author johnliu
  %%% @copyright (C) 2019, <COMPANY>
  %%% @doc
  %%%
  %%% @end
  %%% Created : 06. 八月 2019 18:00
  %%%-------------------------------------------------------------------
  -module(dgiot_plugin).
  -author("johnliu").

-define(SYS_APP, [
    kernel, stdlib, sasl
]).

-export([start/0]) 

start() ->
    check_module(
        fun({_App, _Vsn, Mod}, Acc) ->
            case code:is_loaded(Mod) =/= false of
                true ->
                    case lists:keyfind(channel, 1, Mod:module_info(attributes)) of
                        false ->
                            Acc;
                        {channel, ChannelTypes} ->
                            do_somthing()
                    end;
                false ->
                    Acc
            end
        end, []).

  check_module(Check, Acc0) ->
      Fun =
          fun({App, _Desc, Vsn}, Acc) ->
              Dir = lists:concat(["lib/", App, "-", Vsn, "/ebin"]),
              case not lists:member(App, ?SYS_APP) andalso file:list_dir(Dir) of
                  {ok, FS} ->
                      lists:foldl(
                          fun(FileName, Acc1) ->
                              case filename:extension(FileName) == ".beam" of
                                  true ->
                                      Mod = list_to_atom(filename:basename(FileName, ".beam")),
                                      Check({App, Vsn, Mod}, Acc1);
                                  false ->
                                      Acc1
                              end
                          end, Acc, FS);
                  _ ->
                      Acc
              end
          end,
      lists:foldl(Fun, Acc0, application:loaded_applications()).

  do_somthing() ->
    ok
``` 
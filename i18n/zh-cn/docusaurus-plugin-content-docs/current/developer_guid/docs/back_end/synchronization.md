---
title: 数据同步
sidebar_position: 11
---


# 数据同步
## API Hook配置同步（数据库->缓存）
用户调用API修改parse库配置后，通API Hook同步到ets缓存，例如通道中做如下处理
```
%% 初始化池子
handle_init(State) ->
    shuwa_parse:subscribe(<<"Device">>, post),
    shuwa_parse:subscribe(<<"Device/*">>, post),
    {ok, State}.

handle_message({sync_parse, Args}, State) ->
    %% do something 
    lager:info("sync_parse ~p", [Args]),
    {ok, State};
```

## Livequery同步（数据库->缓存）
```
parse库修改同步到ets缓存 <br/>	
parse开启livequery<br/>	
编辑
vim /data/shuwa_parse_server/script/config.json <br/>	
修改 **app** 下 **liveQuery** 添加需要同步的表 <br/>	
![](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/parse/livequery_config.png)

登录获取SessionToken
```
shuwa_parse_handler:login_by_account(UserName, Password).
{ok,#{<<"sessionToken">> => <<"r:af99fafcfebbcfe04770e74ca2646b11">>}}
```
shuwa_livequery订阅Device表
```
 shuwa_livequery:subscribe(<<"r:af99fafcfebbcfe04770e74ca2646b11">>, <<"Device">>, #{}),
```

```
handle_info({livequery, #{<<"object">> := Object}}, #task{step = login} = State) ->
    {noreply, do_depploy(Object, State)};

handle_info({livequery, _Other}, State) ->
    {noreply, State};
```

## API Hook同步数据（数据库+缓存 ->用户）

用户查询parse库后返回过程中，DG-IOT自动同步ets缓存中的实时状态数据，解决状态不同步问题，

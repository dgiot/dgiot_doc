---
title: 远程定位
sidebar_position: 12
---


```auto
1> observer:start().
......
ERROR: Could not find 'wxe_driver.so' in : /XXX/XXX/XXX
```

#### **解决：**

##### 1\. erlang官方工具支持连接远程节点，本地windows安装erlang环境，命令行下启动erlang shell：

```auto
	erl -name observer@local_ip -setcookie secret_cookie
```

**说明：**  
local\_ip为本地ip，secret\_cookie为erlang分布式节点的配置的cookie。  
此处我们启动了一个名为observer@local\_ip的节点。

##### 2.本地启动observer

```auto
	(observer@127.0.0.1)1> observer:start().
```

##### 3.连接远程节点

启动observer之后，点击菜单栏的Nodes - Connect Node，输入远程节点的node name后可正常连接。


## Etop

类似top命令，查看erlang进程占用cpu、内存较高的进程  

参数：  

  node        atom       erlang node  
  port        integer    The used port  
  accumulate  boolean    If true execution time is accumulated  
  lines       integer    Number of displayed processes  
  interval    integer    Display update interval in secs  
  sort        runtime | reductions | memory | msg\_q  
  output      graphical | text  
  tracing     on | off   
  setcookie   string    

使用举例：

1\. 找出cpu占用最高的进程，图形界面输出，每10秒更新一次  

```plain
> spawn(fun() -> etop:start([{interval,10}, {sort, runtime}]) end).
> etop:stop().
```

2\. 找出内存占用较高进程, 输出进程的数量为20，文本形式输出

```plain
> spawn(fun() -> etop:start([{output, text}, {lines, 20},  {sort, memory}]) end).
> etop:stop().
```

3\. 查看远程节点etop：

```plain
 > erl -name abc@192.168.17.102 -hidden -s etop -output text -sort memory -lines 20 -node 'test@192.168.17.102' -setcookie mycookie123
```

或者：

```plain
> erl -name abc@192.168.17.102 -hidden
> etop:start([{node,'test@192.168.17.102'}, {setcookie, "mycookie123"}, {output, text}, {lines, 20},  {sort, memory}])
```

rpc:call  

```plain
> erl -name abc@192.168.17.102 -setcookie mycookie123 
> rpc:call('test@192.168.17.102', etop, start, [[{output, text}, {lines, 20},  {sort, memory}]]).
```

## eprof

假设我们使用etop查到了cpu占用时间较多的进程id，那么可以使用eprof进行进一步的分析.  

基本用法：

```plain
> eprof:start().
> eprof:profile([pid(x,x,x)]).
> eprof:stop_profiling().
> eprof:analyze().
> eprof:stop().
```

或：

```plain
> eprof:start_profiling([regNames], {gen, call, 4}).
> eprof:stop_profiling().
> eprof:analyze().
> eprof:stop().
```

regNames可以填写进程的注册名, {gen, call, 4}表示只记录gen:call/4这个函数

analyze结果示例：

```plain
****** Process <0.60.0>    -- 100.00 % of profiled time *** 
FUNCTION                 CALLS      %  TIME  [uS / CALLS]
--------                 -----    ---  ----  [----------]
gen:call/4                   2   0.00     0  [      0.00]
gen:do_call/4                2   0.22     1  [      0.50]
gen_server:call/2            2   0.44     2  [      1.00]
dbutil:i_connect/1           2   0.66     3  [      1.50]
gen:call/3                   2   0.66     3  [      1.50]
resource_pool:get/1          2   0.66     3  [      1.50]
mvar:modify/2                2   0.66     3  [      1.50]
gen_server:decode_msg/8      4   0.88     4  [      1.00]
erlang:monitor/2             2   0.88     4  [      2.00]
erlang:demonitor/2           2   1.33     6  [      3.00]
gen_server:handle_msg/5      4   1.55     7  [      1.75]
myserver:handle_call/3       4   1.77     8  [      2.00]
gen_server:loop/6            4   1.99     9  [      2.25]
erlang:send/3                2   3.76    17  [      8.50]
gen_server:reply/2           4  84.51   382  [     95.50]
```

## fprof

fprof类似eprof，但是会把详细信息存储到文件中，方便数据统计分析。

只看某一函数的简单调用方法：  

1> fprof:apply(Module, fun, Args).
2> fprof:profile().
3> fprof:analyse().

实际上在执行的时候，fprof:apply/3前后会自动添加trace(\[start, ...\]) 和 trace(stop).

完整的写法是：

```plain
> fprof:trace([start, {file, "./fprof.trace"}, {procs, PidSpec}]).  %% 或者可以trace多个Pid，[PidSpec]
> fprof:trace(stop).
> fprof:profile({file, "./fprof.trace"}).
> fprof:analyse([{dest, "fprof.analysis"},{sort,own}]).  %% 详细参数见： http://www.erlang.org/doc/man/fprof.html#analyse-2
```

结果示例：

```plain
1> fprof:apply(lists, reverse, ["abcdef"]).
"fedcba"
2> fprof:profile().
Reading trace data...

End of trace!
ok
3> fprof:analyse().
Processing data...
Creating output...
%% Analysis results:
{  analysis_options,
 [{callers, true},
  {sort, acc},
  {totals, false},
  {details, true}]}.

%                                               CNT       ACC       OWN        
[{ totals,                                        3,    0.027,    0.027}].  %%% CNT是trace过程中函数调用的总数,ACC是整个trace的时间,OWN为函数执行时间


%                                               CNT       ACC       OWN        
[{ "<0.33.0>",                                    3,undefined,    0.027}].   %%

{[{undefined,                                     0,    0.027,    0.019}],     
 { {fprof,apply_start_stop,4},                    0,    0.027,    0.019},     %
 [{{lists,reverse,1},                             1,    0.008,    0.005},      
  {suspend,                                       1,    0.000,    0.000}]}.    

{[{{fprof,apply_start_stop,4},                    1,    0.008,    0.005}],     
 { {lists,reverse,1},                             1,    0.008,    0.005},     %
 [{{lists,reverse,2},                             1,    0.003,    0.003}]}.    

{[{{lists,reverse,1},                             1,    0.003,    0.003}],     
 { {lists,reverse,2},                             1,    0.003,    0.003},     %
 [ ]}.

{[ ],
 { undefined,                                     0,    0.000,    0.000},     %
 [{{fprof,apply_start_stop,4},                    0,    0.027,    0.019}]}.    

{[{{fprof,apply_start_stop,4},                    1,    0.000,    0.000}],     
 { suspend,                                       1,    0.000,    0.000},     %
 [ ]}.


Done!
ok
```

%是一种标记，每一个“段落”中，%表示被调用的函数主体，%以上为调用它的函数，%以下为它调用的函数。“段落”中的CNT列表示被调用次数，Acc表示包括%之上的函数在内所花费的时间，own表示不包括%之上的函数所用的时间。

suspend表示进程挂起。  

也可以将fprof这类工具卸载想监控的代码前后。

## cprof

用于统计一个函数中的每个函数的调用次数。相较于eprof和fprof，cprof对性能影响很小，官方说大约10%  

使用举例（引自官网）

1> cprof:start(),R=calendar:day\_of\_the\_week(1896,4,27),cprof:pause(),R.
1
2> cprof:analyse(calendar).
{calendar,9,
          \[{{calendar,df,2},1},
           {{calendar,dm,1},1},
           {{calendar,dy,1},1},
           {{calendar,last\_day\_of\_the\_month1,2},1},
           {{calendar,last\_day\_of\_the\_month,2},1},
           {{calendar,is\_leap\_year1,1},1},
           {{calendar,is\_leap\_year,1},1},
           {{calendar,day\_of\_the\_week,3},1},
           {{calendar,date\_to\_gregorian\_days,3},1}\]}
3> cprof:stop().
3271

该示例表明day\_of\_the\_week这个函数需要调用9个函数完成计算。

同样cprof可以嵌入代码中。  

## Webtool

webtool:start().  %% 默认端口8888, http://localhost:8888/

appmon:start(). %% 查看application树  

pman:start().  %%监控进程  

tv:start().  %% ets & mnesia

toolbar:start().  %% 包含了上面几个
---
title: 编程规范
sidebar_position: 9
---

# 编程规范

## 摘要

本文档提供了如何使用Erlang开发软件系统的规则和建议。

注意
本文档是一份初步且不完全的文档。 本文档不包含对于EBC的“Base System”的需求，然而，如果需要使用"Base System", 在设计初期必须遵循此类需求。这些需求包含在文档"1/10268-AND 10406 Uen “MAP - Start and Error Recovery”"中。

## 目标

本文列出了使用Erlang编写软件系统需要考虑到的一些方面的内容。这里不会给出与使用Erlang无关的通用细节和设计活动的完整描述。

## 结构和Erlang术语

Erlang系统被划分为不同的模块(module)。模块由函数和属性组成。仅当函数在模块内或者被导出时才对调用该函数的其他函数所在模块可见。属性以"-"开头并且放在模块的起始位置。

在使用Erlang设计的系统中，具体工作由进程(processes)②完成。进程是一个可以使用不同模块中函数的任务。不同进程间通过消息传递进行通信。进程可以接收发送给它的消息，一个进程可以决定哪些消息已经准备好被接收。其他消息会被放入队列中，直到该进程已做好接收此消息的准备。

通过设置一个链接(link)，一个进程可以监视另一个进程。当一个进程挂起时，它将自动给其被链接的其他进程发送退出信号(exit signals)。进程接收到退出信号的默认行为是挂起该进程，同时传递该信号给其链接的其他进程。通过捕捉信号，进程可以改变上述默认行为，这将使所有发送给某进程的退出信号转换成消息。

纯函数(pure function)是指无论调用该函数的上下文如何，给定相同参数都返回相同结果的函数。这与我们通常对数学函数的期待一致。一般说来，非纯函数有副作用(side effect)。 副作用通常发生在一个函数

发送一条消息

接收一条消息

调用exit

调用任何改变进程环境或操作方式的内置函数(BIF)(例如:get/1, put/2, erase/1, process_flag/2等)

警告:本文包含了一些bad code的例子，这些例子用这种"Ugly font"书写。

## SW工程原则

### 从一个模块尽可能少地导出函数

模块是Erlang中的基本代码结构实体。一个模块可包含大量函数，然而只有包含在导出列表中的函数才能在该模块外调用。

从外部观察一个模块的复杂度取决于从该模块导出函数的数量。一个仅导出一两个函数的模块通常比导出大量函数的模块更易于理解。

导出/未导出函数比率低的模块正是其使用者仅需要理解从该模块导出函数功能时所需要的。

另外，代码的作者或维护者在模块中可以以任意合适的方式改变其内部结构，而其提供给外部的接口保持不变。

### 尽量减少模块间的依赖

调用更多其他模块的模块更加难以维护。 这是由于每当我们改变了一个模块的接口时，必须检查代码中所有调用该模块的地方。减少模块间的依赖可以简化维护这些模块时产生的问题。 我们可以通过减少被某一模块调用的其他模块的数量来简化系统结构。 同时要注意我们更希望模块间互相调用的依赖关系采用树状结构而非回环图。例如:

而不是:

将常用函数放入库中 常用的函数应该放在库中。库是相关函数的集合。应尽量保证库中包含的函数类型相同。所以像lists这样的库中仅包含操作列表的函数是一个好的选择，反之，一个库名为lists_and_maths包括操作列表和数学函数的集合则相反。 最好的库应该没有副作用。包含有副作用函数的库限制了其可重用性。

将复杂的(tricky)和脏代码(dirty)分离在不同的模块中 通常混合使用简洁和肮脏的代码可以解决问题。但请将二者分别放在不同模块中。

脏代码是做了一些使代码变脏事情的代码。例如: 使用了进程字典③

出于奇怪的目的使用了erlang:process_info/1 做了任何你不想（却不得不做）的事情

尽量集中精力使简洁的代码数量最大化同时使脏代码数量最小化。 分离脏代码并注释它们或者在文档中清晰描述这些代码的副作用和相关的问题。

不要假设调用者会对函数返回结果会如何处理

不要对函数被调用的原因或调用者将对返回结果的操作作出假设。 例如，假设我们调用某函数（原文 run time）期间传入了非法参数，函数实现者不应假设传入非法参数后其调用者所做的事情。 所以我们不应编写这样的代码:

```
do_something(Args) ->
case check_args(Args) of
			ok ->
				{ok, do_it(Args)};
			{error, What} ->
String = format_the_error(What),
io:format("* error:~s\n", [String]), %% Don’t do this
error
	end.
正确的写法如下:

do_something(Args) ->
case check_args(Args) of
	ok ->
		{ok, do_it(Args)};
	{error, What} ->
		{error, What}
end.
	error_report({error, What}) ->
format_the_error(What).
```

前一种情况下总是使用标准输出打印错误信息，而后一种则将错误类型返回给应用程序。应用程序此时可以根据错误信息决定下一步做什么。 在必要时，应用程序可以通过调用error_report/1将错误信息描述转换成可打印字符串并打印。但这也许不是我们所需要的 —— 在任何情况下，对结果处理的决定权应交由调用者。④

### 抽象出代码常用模式或行为

无论何时，当代码中有两处或更多相同代码形式，尽量把这些相同的部分单独放在一个函数中并调用它，而不是在不同的地方放置相同的代码段。

如果在代码中两个或更多地方有类似形式(甚至是相同)的代码，有必要花时间看看是否其中一个问题可以稍作修改使两处相同，然后写一些更小的代码(函数)来描述两者的差异。

编程时避免“复制”、“粘贴”，使用函数(代替他们)。

### 自顶向下

采用自顶向下的方法编程，而不是自底向上(从细节开始)。通过定义函数原型，自顶向下是一种成功处理实现细节的好方法。由于设计上层代码好时下层代码所代表的内容是未知的，所以代码应独立于其所代表的内容。

## 不要优化代码

不要在开始时优化代码。首先保证其正确，其次(必要时)使它运行的更快(同时保证代码正确)。

### 采用 “最小惊讶(astonishment)定律”

对用户而言，系统响应时应保证产生最少的意外 —— 例如，当用户做了某种操作后，应能够对系统反应作出预测且不会对产生的结果感到惊讶。

这与一致性有关，不同模块以相似方式处理问题的一致的系统要比各模块以不同的方式处理问题的系统更易于理解。

如果你对函数运行结果感到惊讶，那么不是函数处理了错误的问题就是其命名有误。

### 尽量减小副作用

Erlang包含一些有副作用的原始设计。由于这些函数会导致环境永久的改变所以它们不容易被重用，同时在使用它们之前你必须清楚地了解进程的状态。

尽可能写不包含副作用的代码。

使纯函数的数量最大化。

将有副作用的代码整合在一起并清晰地在文档中说明其副作用。

稍稍注意一下，大部分代码可以避免产生副作用。这将使系统易于维护、测试和理解。

### 不要使模块的私有数据结构泄露

通过一个简单的例子可以最好的说明这一点。我们定义一个简单的模块并命名为queue —— 用来实现队列。

```
-module(Queue).
-export([add/2, fetch/1]).
add(Item, Q) ->
lists:append(Q, [Item]).
fetch([H|T]) ->
	{ok, H, T};
fetch([]) ->
	empty.
```

这里使用列表来实现队列，不幸的是这样做用户必须知道队列代表一个列表。一个使用以上代码典型的程序代码段如下:

```
NewQ = [], % Don’t do this
Queue1 = queue:add(joe, NewQ),
Queue2 = queue:add(mike, Queue1), ....
```

这不是一种好的做法，由于用户 ——

需要知道queue代表一个列表

实现者不能改变队列内部所指代的含义(这里他们可能需要在后面提供该模块一个更好的版本)。 更好地实现应该是:

```
-module(queue).
-export([new/0, add/2, fetch/1]).
new() ->
[].
add(Item, Q) ->
	lists:append(Q, [Item]).
fetch([H|T]) ->
	{ok, H, T};
fetch([]) ->
	empty.
```

现在我们可以这样写:

```
NewQ = queue:new(),
Queue1 = queue:add(joe, NewQ),
Queue2 = queue:add(mike, Queue1), ...
```

这是一个更好的实现并且修复了之前的问题。现在假设用户需要知道队列的长度，他们将会尝试这样写:[source,]

Len = length(Queue) % Don’t do this
所以他们知道queue代表一个列表。同上，这也不是一个好的实现并且会导致代码难于维护和理解。如果需要知道queue的长度，就必须在模块中添加一个length函数，这样:

```
-module(queue).
-export([new/0, add/2, fetch/1, len/1]).
new() -> [].
add(Item, Q) ->
	lists:append(Q, [Item]).
fetch([H|T]) ->
	{ok, H, T};
fetch([]) ->
	empty.
len(Q) ->
	length(Q).
```
现在，用户可以调用queue:len(Queue)来代替。 这里我们说我们已经抽象出了queue所有的细节(queue实际上是所谓的抽象数据结构)。

为何我们会遇到这些问题？抽象出内部细节的实践使得我们可以无须修改调用这些函数的模块而仅仅改变其实现细节。所以，一个更好的实现如下:

```
-module(queue).
-export([new/0, add/2, fetch/1, len/1]).
new() ->
	{[],[]}.
add(Item, {X,Y}) -> % Faster addition of elements
	{[Item|X], Y}.
fetch({X, [H|T]}) ->
	{ok, H, {X,T}};
fetch({[], []) ->
	empty;
fetch({X, []) ->
	% Perform this heavy computation only sometimes.
	fetch({[],lists:reverse(X)}).
len({X,Y}) ->
	length(X) + length(Y).
```
### 使代码尽可能具有确定性

具有确定性的程序是指无论运行多少次其运行的方式总是相同的。不确定的程序可能每次运行都传回不同的结果。为了调试方便，尽可能使代码确定是一个好的选择。这样可以是错误可再现。

例如，假设一个进程需要启动5个并发的进程，然后检查它们是否正常启动，进一步假设这5个进程启动的顺序对程序执行没有影响。

我们可以选择同时启动5个进程然后检查它们是否全部正确启动，但是每次启动其中一个并在启动下一个前检查其正确性将是更好的做法。

### 不要做“防御性”编程

防御性编程是指程序员不“信任”他们所编写系统对于该部分的输入数据。通常我们不应为了正确性而测试输入数据。编写系统中大部分代码时应假设输入数据是正确的。只有少量代码应对数据进行正确性检测。这(检测)通常应在首次进入系统是完成，一旦数据在进入系统是通过检测，之后我们应假设它们是正确的。 例如:
```
%% Args: Option is all|normal
get_server_usage_info(Option, AsciiPid) ->
	Pid = list_to_pid(AsciiPid),
	case Option of
		all -> get_all_info(Pid);
		normal -> get_normal_info(Pid)
	end.
```
当Option的值不是normal或者all时函数将会崩溃，并且它应该这样做。调用者需要保证正确的输入。

### 通过设备驱动分离硬件接口
应该通过使用设备驱动来分离硬件和系统。设备驱动应实现硬件接口使得硬件设备就像Erlang进程一样。 硬件应像普通Erlang进程一样接收和发送Erlang消息并且在发生错误时以传统方式响应。

### 以相同的函数做“执行”和“撤销”操作
假设我们的程序打开了一个文件，在对文件进行操作后关闭它。代码可能是这样:
```
do_something_with(File) ->
	case file:open(File, read) of
		{ok, Stream} ->
			doit(Stream),
			file:close(Stream); % The correct solution
		Error -> Error
	end.
```
注意打开文件(file:open)和关闭文件(file:close)在运行时的对称性。下面的解决方法难以跟踪且未显示说明哪个文件被关闭。请不要写这样的代码:
```
do_something_with(File) ->
	case file:open(File, read) of
		{ok, Stream} ->
			doit(Stream);
		Error -> Error
	end.

doit(Stream) ->
	func234(_,Stream,_).

func234(_, Stream, _) ->
	file:close(Stream). %% Don’t do this
```
## 错误处理
### 分离错误处理和普通代码
不要使被设计用来处理异常的代码把正常代码弄乱。尽可能使你的程序处理正常情况。如果处理正常情况的程序出错，进程应尽量报告错误信息并崩溃。不要试图修复错误然后继续。错误应该在不同的进程中处理(参见15页:每个进程应该仅扮演一种角色)。

错误恢复代码和(处理)正常情况的代码清晰的分离可以大大简化系统的整体设计。

当检测到软硬件出错时产生的错误日志将在后面用来诊断和修正错误。应该保留进程中任何有用信息的永久记录。

### 确定错误核心
系统设计的一个基本要素是系统中哪部分需要被修正哪部分无需修正。

鉴于并不要求所有的用户程序是正确的，在传统的操作系统设计中内核是被假设并且必须正确的。如果用户程序运行失败将仅仅与发生失败的应用程序有关并且不应影响到系统作为整体的一致性。

系统设计的第一部分必须确保这部分系统一定是正确的；我们称此为错误内核。通常错误内核某种存储硬件状态的实时本地内存数据库。

## 进程、服务器和消息
### 在一个模块中实现进程
实现单独进程的代码应该包含在一个模块中。一个进程可以调用任何库中的运行时，但是进程的”顶层循环“(top loop)应包含在一个单独的模块中。进程的顶层循环代码不应被分割在几个模块中

—— 这将使控制流极其难以理解。这并不意味着开发者不能使用通用的服务器库，这些(库)是用来组织控制流的。

相反，对于不超过一种进程的代码应该在一个模块中实现。包含不同进程代码的模块非常难以理解。每个独立进程的代码应该被分割在不同模块中。

### 使用进程组织系统
进程是系统基本的组织元素。然而，当可以使用一个函数处理(问题)的时候不要用进程和消息传递。

### 已注册进程
注册进程的名称应保持和模块名相同。这样更容易查找进程代码。 应仅注册长期存在的进程。

### 在系统中分配并行进程给一个真正并发的活动
决定使用顺序进程还是并行进程应由要解决问题的内部结构来决定。主要规则是:

“使用一个并行进程来模拟现实中一个真正并发的活动” 如果在并行进程和现实中并行活动的数量间存在一对一映射关系，程序会易于理解。

### 每个进程应只有一种“角色”
系统中的进程可以有不同的角色，比如在客户端-服务器模型中。 一个进程应尽可能只有一种角色，比如它可以是一个客户端或者一个服务器，但不能是两者的结合。 进程可能扮演的其他角色如下:

+ 监督者:监视其它进程并在它们失败时重启。

+ 工作者:一个普通的工作进程(可以有错误)。

+ 信任的工作者:不允许有错误。

### 在任何可能的地方对服务器和协议处理使用通用函数
在很多环境下使用如标准库中实现的通用服务器这类的通用服务器程序都是不错的选择。坚持使用通用服务器组成的小集合会大大简化系统整体结构。 这对于系统中大部分协议处理软件也是同样的。

### 标记消息
所有的消息都应被标记。这样做可以弱化接收消息顺序的重要性同时使新消息的实现更容易。 不要这样写你的程序:
```
loop(State) ->
	receive
	    {Mod, Funcs, Args} -> % Don’t do this
			apply(Mod, Funcs, Args},
			loop(State)
	end.
```
新消息{get_status_info, From, Option} 如果被放置在{Mod, Func, Args}之后会引起冲突。

如果消息是同步的，返回消息应该用描述返回消息的新原子标记。例如:如果新到来的消息用get_status_info标记，返回消息可以标记为status_info。使用不同标记的原因之一是使得调试更容易。 以下是一个好的解决方案:
```
loop(State) ->
	receive
		{execute, Mod, Funcs, Args} -> % Use a tagged message.
			apply(Mod, Funcs, Args},
			loop(State);
		{get_status_info, From, Option} ->
			From ! {status_info, get_status_info(Option, State)},
			loop(State);
		...
	end.
```
### Flush unknown messages
每个服务器在接收(receive)声明的最后一条都应有一个“其他”选项。这样可以避免填充到消息队列。例如:
```
main_loop() ->
	receive
		{msg1, Msg1} ->
			_,
			main_loop();
		{msg2, Msg2} ->
			_,
			main_loop();
		Other -> % Flushes the message queue.
			error_logger:error_msg(
				"Error: Process ~w got unknown msg ~w~n.",
				[self(), Other]),
			main_loop()
	end.
```
### 编写尾递归(tail-recursive)的服务器
所有服务器必须是尾递归的，否则服务器将会耗尽内存。 不要这样编码:
```
loop() ->
	receive
		{msg1, Msg1} ->
			_,
			loop();
		stop ->
			true;
		Other ->
			error_logger:log({error, {process_got_other, self(), Other}}),
			loop()
	end,
	io:format("Server going down"). % Don’t do this!
	% This is NOT tail-recursive
```
下面是正确的解决方案:
```
loop() ->
	receive
		{msg1, Msg1} ->
			...,
			loop();
		stop ->
			io:format("Server going down");
		Other ->
			error_logger:log({error, {process_got_other, self(), Other}}),
			loop()
	end. % This is tail-recursive
```
如果你使用了某些服务器库，例如generic，你可以成功避免这些问题。

### 接口函数
无论何时尽可能对接口使用函数，避免直接发送消息。将消息传递归纳成接口函数。有些情况下你不能这么做。 消息协议属于内部信息，应对其他模块隐藏。 一个接口函数的例子如下:
```
-module(fileserver).
-export([start/0, stop/0, open_file/1, ...]).
open_file(FileName) ->
	fileserver ! {open_file_request, FileName},
	receive
		{open_file_response, Result} -> Result
	end.
```

### 超时

在receive 声明中使用after要谨慎。确保在消息到来之后你会处理这种情况。

### 捕捉退出(信号)

只有少数进程应该捕捉退出信号。进程或者应该捕捉退出信号或者不该。(fuck!) 通常捕捉退出信号不是一个好的实现。

## 各种Erlang特殊约定

### 使用记录作为数据结构要素

使用记录作为数据结构要素。Erlang中的记录是在版本4.3以后引入的一种带标记的元组。类似于C中的结构体(struct)或Pascal中的记录(record)。

如果记录将要在多个模块中使用，应定义在这些模块包含的一个头文件(使用suffix.hrl)里。如果仅在一个模块中使用，那么它应定义在这个模块的开始位置。 Erlang中记录的特点可以用来确保模块间数据结构的一致性，并因此应在接口函数中用以在模块间传递数据。

### 使用选择器和构造器

记录的特征提供了选择器和构造器来管理记录的实例。不要使用匹配显式地假设记录是一个元组。例如:
```
demo() ->
P = #person{name = "Joe", age = 29},
#person{name = Name1} = P,% Use matching, or...
Name2 = P#person.name. % use the selector like this.
```
不要这样写:
```
demo() ->
P = #person{name = "Joe", age = 29},
{person, Name, _Age, _Phone, _Misc} = P. % Don’t do this
```
### 使用已标记的返回值

使用已标记的返回值。 不要这样写程序:
```
keysearch(Key, [{Key, Value}|_Tail]) ->
	Value; %% Don’t return untagged values!
keysearch(Key, [{_WrongKey, _WrongValue} | Tail]) ->
	keysearch(Key, Tail);
keysearch(Key, []) ->
	false.
{Key, Value}不能包含非真值(false)。 下面是正确的方法:

keysearch(Key, [{Key, Value}|_Tail]) ->
	{value, Value}; %% Correct. Return a tagged value.
keysearch(Key, [{_WrongKey, _WrongValue} | Tail]) ->
	keysearch(Key, Tail);
keysearch(Key, []) ->
	false.
```

### 使用catch和throw时要格外小心

    不要使用catch和throw除非你非常清楚你在做什么！尽可能少使用put和get。
    可以通过引入新的参数重写使用进程字典的函数。
例如:
不要这样写:
```
tokenize([H|T]) ->
	...;
tokenize([]) ->
	case get_characters_from_device(get(device)) of % Don’t use get/1!
		eof -> [];
		{value, Chars} ->
			tokenize(Chars)
	end.
```
正确的写法是:
```
tokenize(_Device, [H|T]) ->
	...;
tokenize(Device, []) ->
	case get_characters_from_device(Device) of % This is better
		eof -> [];
		{value, Chars} ->
		tokenize(Device, Chars)
	end.
```
使用get和put将会使函数在不同情况下由相同的输入产生不同的行为。由于其不确定性使得代码难以阅读。不仅是其参数，还有进程字典使得使用了get和put的函数在调试时更加复杂。Erlang中大部分的运行时错误(例如bad_match)包含了参数，却并不包括进程字典。

### 不要使用import

不要使用-import，由于你不能直接看到函数在哪个模块中定义，这样做使得代码难以阅读。使用exref(交叉引用工具)来查找模块依赖。

8.6. 导出函数
区分函数被导出的原因。导出函数通常有以下几点原因(例如):

它是模块的用户接口 它是其他模块的接口函数 它被apply, spawn等调用，但仅仅在该模块中调用。 使用不同的-export分组并对其作相应注释。例如:
```
%% user interface
-export([help/0, start/0, stop/0, info/1]).
%% intermodule exports
-export([make_pid/1, make_pid/3]).
-export([process_abbrevs/0, print_info/5]).
%% exports for use within module only
-export([init/1, info_log_impl/1]).
```
## 特殊的词法和风格约定

##不要写深度嵌套的代码 

嵌套代码将case/if/receive声明放在其它case/if/receive声明中。编写深度嵌套的代码不是好的编程风格 —— 向右超过一页的代码将很容易变得难以阅读。尽量限制你的代码在两级缩进以内。可以通过将函数分割成更小的函数来达到此目的。

### 不要写过大的模块

一个模块不应超过400行源代码。几个小模块要比一个庞大的模块更好。

### 不要写很长的函数

不要写超过15到20行的函数。把大的函数分割成若干小函数。也不要试图写很长的一行来解决问题。（有人为了达到行数少的目的，会把本来几行的代码写在一行。—— 译者注）

### 不要使一行代码过长

不要写很长的行。一行代码应不超过80个字符(这将恰好填满一张A4纸)。 在Erlang 4.3之后的版本中，字符串常量会自动连接。例如:
```
io:format("Name: ~s, Age: ~w, Phone: ~w ~n"
	"Dictionary: ~w.~n", [Name, Age, Phone, Dict])
```
### 变量名

选择有意义的变量名 —— 这并不容易。 如果一个变量名包含几个单词，使用下划线()或大写首字母来来分隔(标记)它们。例如:My_variable 或MyVariable。 避免使用 ""(下划线)来表示匿名变量(don’t care variable)(可以匹配任意内容的变量 —— 译者注) —— 使用下划线开头的变量名来代替，例如:_Name①。如果后面需要使用该变量，只需要移除开头的下划线。在查找哪个下划线需要被替换时不会遇到麻烦同时也使代码易于阅读。

### 函数名

函数名必须和它所做的事情保持一致。它应返回函数名所隐含的参数(返回值 —— 译者注)。当你阅读它时不会感到惊讶。对常见的函数使用约定俗成的名称(例如:start, stop, init, main_loop)。 不同模块中解决相同问题的函数应使用相同的名称。例如:module_info()。 糟糕的函数名是常见的编程误区之一 —— 选择好的函数名非常困难。 在编写大量不同函数时一些常用的命名方式大有裨益。例如:前缀"is_"可以用来表示函数是一个返回true或false的问题。
```
is_...() -> true | false
check_...() -> {ok, ...} | {error, ...}
```
### 模块名

Erlang的模块结构是平面的（没有模块在其他模块中定义）。然而，我们常常需要模拟出层级模块的结构。可以通过对相关模块使用相同前缀名称来解决这一问题。 例如，我们使用5个不同的模块来处理一个ISDN问题。这些模块可以这样命名:

isdn_init
isdn_partb
isdn_...

### 以统一的方式格式化代码

统一的代码风格能够帮助你和其他人理解代码。不同的人在使用缩进和空格时有不同的风格和习惯。

例如你可能会在写元组时用一个逗号分隔开两个元素: {12, 23, 45}

其他人可能会在逗号后面跟一个空格:

{12, 23, 45}

一旦你适应了一种风格就坚持使用它。

在一些大的项目中，应使用统一的编码风格。

## 文档化代码

### 注明代码归属(HOLY FUCKING SHIT)

你应在模块开头清楚地注明代码的归属。说明代码内容来自何处(指作者和其中思路，原文使用ideas简直是……简直了…… —— 译者注) —— 如果来源于其他代码请注明来自何处并注明其作者。 不要窃取代码(很多人都做过的事 —— 译者注) —— 窃取代码指使用了其他模块的代码而忘记标明原模块的作者。 以下是写有用的例子:
```
-revision(’Revision: 1.14 ’).
-created(’Date: 1995/01/01 11:21:11 ’).
-created_by(’eklas@erlang’).
-modified(’Date: 1995/01/05 13:04:07 ’).
-modified_by(’mbj@erlang’).
```
### 提供代码所引用的细节信息

在代码中提供相关引用文档(的细节)来帮助理解代码。例如:如果代码实现了某些通信协议或硬件接口则应给出引用文档中的确切页码。

### 在文档中列出所有错误

用英文描述(日常所使用的语言，不限于英文——译者注)将所有错误信息列在一起用来说明在不同文档中他们的具体含义。 这里的错误指系统检测出的错误信息。 在你的程序中检测出的错误信息的地方使用错误日志(error logger)，例如:
```
error_logger:error_msg(Format, {Descriptor, Arg1, Arg2, ....})
```
同时确保{Descriptor, Arg1,…​}所在行存在于错误信息描述的文档中。

### 列出消息传递中数据结构的所有原则

使用标记的元组作为系统中不同部分发送消息时其数据结构的原则。 Erlang中记录的特性(在版本4.3之后引入的)可以用来确保不同模块数据结构的一致性。 应在一份文档中用英文描述所有的数据结构(参见32页的“消息描述”)。

### 注释

注释应该清晰且言简意赅，同时避免不必要的罗嗦。确保注释和代码本身在时间上保持同步。检查添加到代码说明的注释。用英文写注释。 模块的注释不应包含缩进并且以三个百分号开头(%%%)(参见29页“文件首部，描述”)。 函数的注释也不应包含缩进并且以两个百分号开头(%%)(参见27也“注释每个函数”)。 Erlang代码中的注释用一个百分号开头(%)。如果某一行只有注释，应和Erlang代码保持相同缩进。注释应放在相应代码之上。如果注释能和相应代码在同一行将会更好。
```
%% Comment about function
some_useful_functions(UsefulArgugument) ->
another_functions(UsefulArgugument), % Comment at end of line
% Comment about complicated_stmnt at the same level of indentation
complicated_stmnt,
```
### 注释每个函数

对说明有几点很重要:

函数的目标

合法输入的范围。指参数的数据结构及其含义

输出参数的范围。指返回值的所有可能数据结构及其含义

如果函数实现了较复杂的算法，在注释中描述该算法

可能产生错误的原因以及由exit/1, throw/1或任何非显式运行时错误产生的退出信号 函数的任何副作用 例如:
```
%%----------------------------------------------------------------------
%% Function: get_server_statistics/2
%% Purpose: Get various information from a process.
%% Args: Option is normal|all.
%% Returns: A list of {Key, Value}
%% or {error, Reason} (if the process is dead)
%%----------------------------------------------------------------------
get_server_statistics(Option, Pid) when pid(Pid) ->

```
### 数据结构

记录的定义和其纯文本描述放在一起。例如:
```
%% File: my_data_structures.h
%%---------------------------------------------------------------------
%% Data Type: person
%% where:
%% name: A string (default is undefined).
%% age: An integer (default is undefined).
%% phone: A list of integers (default is []).
%% dict: A dictionary containing various information about the person.
%% A {Key, Value} list (default is the empty list).
%%----------------------------------------------------------------------
-record(person, {name, age, phone = [], dict = []}).
```
### 文件头，版权信息

每个源文件应由版权信息开头，例如:
```
%%%---------------------------------------------------------------------
%%% Copyright Ericsson Telecom AB 1996
%%%
%%% All rights reserved. No part of this computer programs(s) may be
%%% used, reproduced,stored in any retrieval system, or transmitted,
%%% in any form or by any means, electronic, mechanical, photocopying,
%%% recording, or otherwise without prior written permission of
%%% Ericsson Telecom AB.
%%%---------------------------------------------------------------------
```
### 文件头，版本历史

每个源文件应包含其修改这及其修改内容的版本历史信息。
```
%%%---------------------------------------------------------------------
%%% Revision History
%%%---------------------------------------------------------------------
%%% Rev PA1 Date 960230 Author Fred Bloggs (ETXXXXX)
%%% Intitial pre release. Functions for adding and deleting foobars
%%% are incomplete
%%%---------------------------------------------------------------------
%%% Rev A Date 960230 Author Johanna Johansson (ETXYYY)
%%% Added functions for adding and deleting foobars and changed
%%% data structures of foobars to allow for the needs of the Baz
%%% signalling system
%%%---------------------------------------------------------------------
```
### 文件头， 描述

文件开头应包含对该模块的简介和所有导出函数的简要说明。
```
%%%---------------------------------------------------------------------
%%% Description module foobar_data_manipulation
%%%---------------------------------------------------------------------
%%% Foobars are the basic elements in the Baz signalling system. The
%%% functions below are for manipulating that data of foobars and for
%%% etc etc etc
%%%---------------------------------------------------------------------
%%% Exports
%%%---------------------------------------------------------------------
%%% create_foobar(Parent, Type)
%%% returns a new foobar object
%%% etc etc etc
%%%---------------------------------------------------------------------
```
如果你了解其中任何弱点、缺陷和未经过良好测试的部分，对其做特殊的说明，不要试图隐藏它们。如果代码任何地方是不完整的，都要对其作出特殊说明。增加会对将来维护代码有益的注释。即使你所写的某些模块很完善，在未来十年也可能会有其他人来修改。

### 不要注释过时的代码 —— 删掉它们

对于过时的代码在版本历史中说明它们。版本控制系统将会起到作用。

## 使用版本控制系统

任何整体的系统都应使用版本控制系统来跟踪模块，比如GIT，RCS, CVS或Clearcase。

## 常见错误

编写跨度很多页的函数（参见23页“不要写长函数”）。

编写嵌套的if, receive, case（参见23页“不要写深层嵌套代码”） 编写类型糟糕的函数（参见19页“使用标记的返回值”）

函数名不能反映出它的功能（参见24页“函数名”）

无意义的变量名（参见23页“变量名”）

不必要的时候使用进程（参见14页“对系统中每个并发活动准确地使用进程”）

选择糟糕的数据类型（糟糕的陈述）

糟糕的注释或者完全没有注释（始终要说明参数和返回值）

无意识的代码

使用put和get（参见20页“谨慎地使用进程字典”） 对消息队列无控制（参见16页“Flush unknown messages”和18页“超时”）

## 所需文档

这部分描述了使用Erlang设计和维护系统时的一些系统级的文档。

### 模块描述

每个模块一个章节。像下面这样包含每个模块的描述和所有的导出函数:

函数参数的数据结构

函数返回值的数据结构

函数的目的，

可能引起错误的原因和直接调用exit/1生成的退出信号，

文档格式在后面部分定义

### 消息描述

除了定义在一个模块内的其他所有进程间消息的格式。 文档格式在后面部分定义

### 进程

系统中所有注册的服务器及其接口和目的的描述。 所有动态进程及其接口的描述。 文档格式在后面部分定义

### 错误消息

错误消息的描述。 文档格式在后面部分定义

## 注解:

这里指不要使用单独的下划线表示这种可做任意匹配的变量, 例如:bad(Dog) :- bites(Dog, ). 其中的""。 —— 译者注。

Erlang进程不同于操作系统进程，Erlang进程是比系统中线程更加轻量级的任务。——译者注。

尽可能不要使用进程字典，总有更好的解决方案，参见《Erlang OTP编程实战》一书。——译者注。

这种做法正符合Erlang“让其崩溃”的原则。——译者注。
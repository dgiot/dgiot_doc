---
title: Erlang, 高并发王者,程序员翻身的秘密武器
sidebar_position: 2
---

1998 年，爱立信推出了一款著名的交换机 AXD301, 这款交换机实现了惊人的9 个 9（99.9999999%）的可用性。

一般的系统，实现 5 个 9，即一年停机 5 分钟已经相当不错了，9 个 9 意味着20 年的运行时间内只有 0.631 秒的停机时间。

实现这个奇迹的关键就是爱立信发明的编程语言 **Erlang** 。

![1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/1.png)

Erlang 的作者 Joe Armstrong 在采访时说道：

如果 Java 是“一次编写，到处运行”，Erlang 就是“**一次编写，永远运行！**”

![2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/2.png)

奇怪的是，这么一个神奇的语言，爱立信竟然禁止在公司内部使用了，这是为什么呢？

*****❤️ 0**1 起源***

Erlang 的诞生其实是个挺无奈的过程。

最早的时候，爱立信只想找到一个语言，更好地构建下一代电信系统。

Joe Armstrong 等人拿着一个大“筛子”，把 20 多种语言“筛来筛去”， 标准是：

1.为了提高生产率，要选择高级的声明式语言

2.为了支持高可用的电信系统，在语言层面就得支持并发和错误恢复

第一条“筛”掉了 C、PASCAL, Ada, C++ 等语言，第二条又筛掉了 Lisp, Prolog,Parlog 等语言。

没办法，只好自己发明一个新语言了，这就是 Erlang。

Erlang 的核心是“进程”，每个进程使用消息和其他进程进行通信，每个进程有个邮箱可以存储消息，进程通过检查邮箱的消息，然后采取行动，这其实就是现在的 Actor 模型。

![3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/3.png)

大家也能看出来，Erlang 的进程不是操作系统中常说的进程，它非常轻量级，每个进程的开销只有几百个字节，一台服务器可以轻松地支持几百万个进程同时运行。

进程可以是分布式的，可以跨越网络来互相发送消息，添加服务器就可以轻松扩展。

Joe Armstrong 还在 Erlang 中内置了“弹性”的能力，当一个进程崩溃时——不管是因为 Bug 还是硬件故障——都不会导致整个系统崩溃，这对电话交换系统来说非常重要。

![4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/4.png)

**👀️ 02艰难发展**

新语言的推广是非常困难的。

有爱立信员工听说了 Erlang 这个新语言，就在一个原型系统中尝试了一下，他们惊奇地发现，这个新玩意儿开发起系统来，比其他方案要快得多。

但即使如此，Erlang 依然没法大范围地在爱立信铺开使用，更别说普及到全世界了。

Joe Armstrong 和团队想了很多办法进行“促销”，比如写书，召开会议，把 Erlang 移植到 DOS、Windows、Mac、VxWorks 等各种平台。

![5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/5.png)

他们甚至录制了一个小电影做宣传。

![6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/6.png)

1995 年，Erlang 终于迎来了转机。

爱立信公司计划开发新一代的交换机产品，以分组交换形式进行语音、数据和各种宽带服务的通信。

但是这个项目实在太复杂了，最早用 C++ 开发，很快就陷入了巨大的泥潭，濒临崩溃。

这时候，大家想到了 Erlang，死马当做活马医，用它来救场吧。

Erlang 不负众望，顺利帮助团队完成了交换机的开发，这就是文章开头提到的 AXD301。

有意思的是，这么优秀的编程语言，爱立信竟然把它禁掉了，禁止内部使用！

原因居然是电信产品生命期长，维护一个自己专有的语言成本很高，不如采用全世界都用的编程语言！

这个禁令一出，为 Erlang 付出大量心血的 Joe Armstrong 等人大为震惊，没办法，只好游说公司开源 Erlang。

1998 年 12 月，Erlang 正式开源，团队的初始成员也离开了爱立信，成立了自己的公司 Bluetail，致力于 Erlang 的开发。

Erlang 离开了电信领域，进入广阔的互联网市场。

**🚀️ 03 大放异彩**

2009 年 1 月，雅虎前员工 Jan Koum 买了一部 iPhone 手机，他想到了一个点子：为什么不开发一个 App，通过互联网来发送消息呢？

传统的方式是短信，资费高，还有流量限制，这很不爽。

于是他拉来了雅虎的同事 Brian Acton 一起干，互联网用户的特点那就是用户数极多，并发数极高，两人经过研究，发现 Erlang 简直就是处理大规模消息的不二之选，后台开发就它了！

2009 年 1 月，WhatsApp 诞生。

```

```

![7.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/7.png)

WhatsApp 一经推出，用户便迅猛增长，如今在全球已经拥有了 20 亿活跃用户。

![8.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/8.png)

2014 年，Facebook 斥资 190 亿美元收购了一个叫做 WhatsApp 的软件，震惊业界。

此时的 WhatsApp，已经有了 4.5 亿用户，并且每天以 100 万在增长。

但是，让人吃惊的是，**WhatsApp 只有 32 名工程师，负责服务器后端开发的程序员只有 10 人**。

这么惊艳的成绩，Erlang 可以说是功不可没！

**🎉️ 04 向 Web 进军**

虽然 Erlang 性能卓越，但是它的函数式编程的语法却并不为大众所熟悉。

一个叫 Jose Valim 的巴西人觉得 Erlang, OTP, Beam VM 这样的好东西，广大的码农群众不能使用真是太可惜了。

Jose Valim 是 Ruby on Rails 的核心开发人员，深受 Ruby 社区的影响。

于是大神出手，借用了 Ruby 简洁优雅的语法，把 Erlang 和 OTP 进行了包装，创建 Elixir 这门新语言。

```

```

![9.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/9.png)

![10.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/10.png)

以 Elixir 为基础，Jose Valim 等人还开发了一个新的 Web 框架 Phoenix，方便程序员使用 Elixir 进行 Web 应用的开发。

许多创业公司使用了 Elixir 和 Phoenix 快速构建应用，尤其是高并发，实时的应用，其中最著名的是 *******Discor*******

![11.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/erlang/11.png)

Discord 的 CTO 在 2017 年的一篇文章中说道：

Discord 就是 Elixir 的早期采用者， Erlang VM 是我们想要构建的高并发实时系统的完美候选者，过去两年，系统中的并发用户数已达到近 500 万，每秒有数百万个事件......  **如果让我从头再选择一次的话，我还会选择 Elixir** 。

**👍  05Erlang 为什么不流行？**

看到这里，你脑海中很可能会浮现这个问题：

你把 Erlang 吹得天花乱坠，为什么它还无法成为 Java 这样的主流语言呢？

有位 Lisp 大佬 Richard P. Gabriel 说得很有道理：Worse is better。

**大佬说软件设计有四个目标：简单性，正确性，一致性，完整性。**

在软件设计上有两大流派：MIT 流派（以 Common Lisp 和 Scheme 为代表）和新泽西流派（就是贝尔实验室，以 Unix 和 C 语言为代表）。

MIT 流派认为设计一定得正确，接口一定得简单，为了这两点，实现层面复杂一点也没关系。

而新泽西流派则反过来，认为简单性比正确性更重要，尤其是实现的简单性比接口简单性更重要。

这带来的结果就是：Unix 和 C 语言具备简单的结构，易于移植，运行时只需要很少的资源，虽然他们只能提供操作系统和编程语言 50%~80% 的功能，还是能够像病毒一样，疯狂传播。

因为 Unix 和 C 解决了痛点问题，大家可以轻松接受，并且由于实现的简单性，很容易和别的平台和软件整合，用户还会不断修改它们，完善它们。

而 Erlang，很抱歉，它是典型的 MIT 流派，这是个设计精巧、实现复杂的系统，一旦它不能满足特定需求，想在保证正确性和简单性的同时对它进行修改，非得是高人不可，这一点严重阻碍了 Erlang 的传播。

那 Erlang 真的不好吗？

不，这要看这要看谁在使用它，WhatsApp 和 Discord 就是典型案例，在这里 Erlang 和 Elixir 发挥了极大的威力，遥遥领先竞争对手。

Paul Graham 在《黑客与画家》的“拒绝平庸”这一章也说过，他用一个小众语言 Lisp 开发了一个电子商务的网站 ViaWeb，利用 Lisp 强大的宏，定制出电子商务领域的 DSL，让 Viaweb 开发速度飞快，他们不断推出新功能，让那二三十个使用 C 语言和 Perl 的竞争对手目瞪口呆。

跟随主流不会出错，但是要想迅速脱颖而出，你得采用那些有点难度的但是生产力惊人的语言，从这个意义上来说，Erlang/Elixir 很可能是击败普通人的秘密武器。
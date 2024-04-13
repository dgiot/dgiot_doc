---
title: OPC采集通道
sidebar_position: 7
---

---
title: OPC采集通道
sidebar_position: 7
---

# OPCUA 协议简介

OPC UA 的全名是 OPC Unified Architecture（OPC 统一架构）。是 OPC 基金会应用在自动化技术的机器对机器网络传输协议。

有以下的特点：

着重在资料收集以及控制为目的的通讯，用在工业设备以及系统中

开源标准：标准可以免费取得，实作设备不需授权费，也没有其他限制

跨平台：不限制操作系统或是编程语言

面向服务的架构（SOA）

强健的信息安全特性

整合的信息模型，是资讯整合中，基础设施的基础，制造商以及组织可以将其复杂的资料在 OPC UA 命名空间上建模，利用 OPC UA 面向服务的架构的优点。

---

## OPCUA 概述

2008 年发布的 OPC 统一架构（UA）将各个 OPC Classic 规范的所有功能集成到一个可扩展的框架中，独立于平台并且面向服务。

这种多层方法实现了最初设计 UA 规范时的目标：

功能对等性：所有 COM OPC Classic 规范都映射到 UA

平台独立性：从嵌入式微控制器到基于云的基础设施

安全性：信息加密、身份验证和审核

可扩展性：添加新功能而不影响现有应用程序的能力

综合信息建模：用于定义复杂信息

### 功能对等性

基于 OPC Classic 的成功，OPC 基金会推出了新的技术标准 OPC UA。 OPC UA 实现了所有 OPC Classic 的功能，并有以下的增强和超越：

发现：在本地 PC 和/或网络上查找可用的 OPC 服务器

地址空间：所有数据都是分层表示的（例如文件和文件夹），允许 OPC 客户端发现、利用简单和复杂的数据结构

按需：基于访问权限读取和写入数据/信息

订阅：监视数据/信息，并且当值变化超出客户端的设定时报告异常

事件：基于客户端的设定通知重要信息

方法：客户端可以基于在服务器上定义的方法来执行程序等

OPC UA 产品和 OPC Classic 产品之间的集成可以通过 COM/Proxy Wrappers 轻松实现。

### 平台独立性

鉴于市场上有各种各样的硬件平台和操作系统，平台独立性就显得至关重要。OPC UA 包含但不限于以下平台及系统：

硬件平台：传统 PC 硬件、云服务器、PLC、微控制器（ARM 等）

操作系统：Microsoft Windows、Apple OSX、Android 或任何 Linux 发行版本等

OPC UA 为企业之间的互操作性提供必要的 M2M、M2E 及两者之间的基础架构。

### 安全性

企业在选择技术标准时最重要的考虑之一是安全性。OPC UA 在通过防火墙时通过提供一套控制方案来解决安全问题：

传输：定义了许多协议，提供了诸如超快 OPC 二进制传输或更通用的 SOAP-HTTPS 等选项

会话加密：信息以 128 位或 256 位加密级别安全地传输

信息签名：信息接收时的签名与发送时必须完全相同

测序数据包：通过排序消除了已发现的信息重放攻击

认证：每个 UA 的客户端和服务器都要通过 OpenSSL 证书标识，提供控制应用程序和系统彼此连接的功能

用户控制：应用程序可以要求用户进行身份验证（登录凭据，证书等），并且可以进一步限制或增强用户访问权限和地址空间“视图”的能力

审计：记录用户和/或系统的活动，提供访问审计跟踪

### 可扩展性

OPC UA 的多层架构提供了一个“面向未来”的框架。诸如新的传输协议、安全算法、编码标准或应用服务等创新技术和方法可以并入 OPC UA，同时保持现有产品的兼容性。 今天的 UA 产品能够与未来的 UA 产品互联互通。

### 综合信息建模

OPC UA 信息建模框架将数据转换为信息。通过完全面向对象的功能，即使是最复杂的多级结构也可以建模和扩展。数据类型和结构在配置文件中定义。 例如，现有的 OPC Classic 规范被建模为 UA 配置文件，也可以由其他组织扩展：

## IEC 62541

IEC 62541 是 OPC UA 的标准 [![](https://wiki.freeioe.org/_media/opcua/pasted/20190926-160317.png)](https://wiki.freeioe.org/_detail/opcua/pasted/20190926-160317.png?id=opcua%3Astart "opcua:pasted:20190926-160317.png")

## OPC 协议和 OPC UA 协议的区别

使用的 TCP 层不一样，如下：

OPC 是基于 DOM/COM 上，应用层最顶层；OPC UA 是基于 TCP IP scoket 传输层. [![](https://wiki.freeioe.org/_media/opcua/pasted/20190926-160111.png)](https://wiki.freeioe.org/_detail/opcua/pasted/20190926-160111.png?id=opcua%3Astart "opcua:pasted:20190926-160111.png") OPC 虽然通过配置 COM/DOM 来提供数据加密和签名功能，配置防火墙，用户权限来让数据访问变得更加安全，但是会增加额外的工作量，尤其是对非 IT 的工程师来说；
对于 OPC UA，数据加密和签名，防火墙等都是默认的功能。
比如基于 DOM 的 OPC 使用的动态端口分配，端口不固定，让防火墙难以确定，而 OPC UA 的端口都是唯一的，比如 SINUMERIK 840D 是 PORT 4840，SIMATIC S7 是 PORT 4845。
DOM/COM 也可以生成不同级别的事件日志，但日志内容不够详细，只会提供“谁连接上服务器”这种，而对于 OPC UA 来说都是默认的功能，生成的日志内容更全面。
# [opcua 协议介绍](https://www.cnblogs.com/kainhuck/p/14663473.html)

# opc ua

是一种应用层协议，基于 tcp 之上，其 url 通常为 `opc.tcp://127.0.0.1:4840/abc`，在 opc ua 中常被称为 `endpoint`

## 两种模式[#](https://www.cnblogs.com/kainhuck/p/14663473.html#2854530634)

opc ua 支持 c/s 模式，同时也支持类似 mqtt 的发布订阅模式，通常各种设备作为 opc ua 的服务端提供各种服务。

[![k1yyi693ha](https://i.loli.net/2021/04/15/4skfB15aNygqLSJ.jpg)](https://i.loli.net/2021/04/15/4skfB15aNygqLSJ.jpg)

## 信息模型[#](https://www.cnblogs.com/kainhuck/p/14663473.html#70469691)

opc ua 采用面向对象的设计思路， 使用了对象（objects）作为过程系统表示数据和活动的基础。对象包含了 `变量`，`事件` 和 `方法`，它们通过引用（reference）来互相连接。

OPC UA 信息模型是节点的网络（Network of Node,），或者称为结构化图（graph），由 `节点`(node)和 `引用`(References)组成，这种结构图称之为 OPC UA 的地址空间。这种图形结构可以描述各种各样的结构化信息(对象)。

[![20190403111143907](https://i.loli.net/2021/04/15/XYMPfEg4iq6SBZz.png)](https://i.loli.net/2021/04/15/XYMPfEg4iq6SBZz.png)

*注意 ⚠️：opc ua 中所说的节点是在一个 opc ua 服务器中，不要理解为一个服务器对应一个 node*

## 节点[#](https://www.cnblogs.com/kainhuck/p/14663473.html#4083138872)

opc ua 定义了 8 种类型的节点

`对象(Object)`
`对象类型(Object Type)`
`变量(Variable)`
`变量类型(Variable Type)`
`方法(Method)`
`视图(View)`
`引用(Reference)`
`数据类型(Data Type)`

每种节点都包含一些公共属性，如下：

| 属性          | 数据类型      | 说明                                                                   |
| ------------- | ------------- | ---------------------------------------------------------------------- |
| NodeId        | NodeId        | 在 OPC UA 服务器内唯一确定的一个节点，并且在 OPC UA 服务器中定位该节点 |
| NodeClass     | Int32         | 该节点的类型（上面列出的 8 种之一）                                    |
| BrowseName    | QualifiedName | 浏览 OPC UA 服务器事定义的节点。它是非本地化的                         |
| DisplayName   | LocalizedText | 包含节点的名字，用来在用户接口中显示名字，本地化                       |
| Description   | LocalizedText | 本地化的描述（可选）                                                   |
| WriteMask     | Uint32        | 指示哪个节点属性是可写的，即可被 OPC UA 客户端修改（可选）             |
| UserWriteMask | Uint32        | 指示哪个节点属性可以被当前连接到服务器上的用户修改（可选）             |

除了 `数据类型` 节点之外，其他各个节点都有额外的专属属性

[![20190403111321142](https://i.loli.net/2021/04/15/5d9CeDb2vRomp8c.png)](https://i.loli.net/2021/04/15/5d9CeDb2vRomp8c.png)

## 引用[#](https://www.cnblogs.com/kainhuck/p/14663473.html#4283965421)

引用描述了两个节点之间的关系，用来连接多个节点。OPC UA 预定义了多种引用，常见的引用有：

* **hasTypeDefinition**

> 描述对象、变量和类型之间的关系
>
> * ObjectNode 的 hasTypeDefinition 引用，指向了一个 ObjectTypeNode，表示该 ObjectNode 的类型;
> * VariableNode 的 hasTypeDefinition 引用，指向一个 VariableTypeNode，表示该 VariableNode 的类型。

* **hasSubType**

> 描述对象的挤成关系，当子类从父类继承后，子类拥有一个 hasSubType 引用指向父类。

* **hasComponents**

> 描述一种组合关系
>
> * ObjectNode 一般都由多个 VariableNode 组成，ObjectNode 包含某个 VariableNode 时，ObjectNode 拥有一个 hasComponents 引用，指向该 VariableNode；
> * VariableNode 也可以包含子 VariableNode，此时也用 hasComponents 描述它们的关系。

* **Organizes**

> 指明两个节点的层次结构，通过 organizes 可以把多个节点组织到同一个父节点下。

*完整引用如下*

[![opc_ua_refs](https://i.loli.net/2021/04/15/Jw4kTWVZ5yo2Uzt.png)](https://i.loli.net/2021/04/15/Jw4kTWVZ5yo2Uzt.png)

## 服务[#](https://www.cnblogs.com/kainhuck/p/14663473.html#3580904473)

服务可以看成是 OPC UA 服务器提供的 API 集合，OPC UA 与定义了 37 个标准服务，常用的服务有：

* 读写服务

> 可以获取和修改服务器指定节点指定属性的值

* 调用服务

> 执行服务器上指定节点的方法

* 订阅数据变化和订阅事件

> 可以监控服务器数据的变化

# opc ua 编程

**Sdk**

* python（支持客户端和服务端）
  [https://github.com/FreeOpcUa/python-opcua](https://github.com/FreeOpcUa/python-opcua)
* golang（支持客户端， **服务端尚不完善** ）
  [https://github.com/gopcua/opcua](https://github.com/gopcua/opcua)

**客户端**

* **[opcua-client-gui](https://github.com/FreeOpcUa/opcua-client-gui)**
  使用 python（pyqt5）开发使用 pip 可以安装，跨平台
  <pre class="highlighter-hljs" highlighted="true"><div data-tips="复制代码" class="esa-clipboard-button" data-clipboard-target="#copy_target_0">Copy</div><code class="highlighter-hljs hljs language-bash" id="copy_target_0">sudo pip3 install pyqt5 -i https://pypi.mirrors.ustc.edu.cn/simple/
  sudo pip3 install numpy -i https://pypi.mirrors.ustc.edu.cn/simple/
  sudo pip3 install pyqtgraph -i https://pypi.mirrors.ustc.edu.cn/simple/
  sudo pip3 install cryptography -i https://pypi.mirrors.ustc.edu.cn/simple/
  sudo pip3 install opcua-client -i https://pypi.mirrors.ustc.edu.cn/simple/
  </code></pre>

**模拟设备**

*可利用 sdk 自己开发* 见下面的 python demo

# golang Demo

## 读取服务器数据[#](https://www.cnblogs.com/kainhuck/p/14663473.html#1023830725)

```python
import (
	"context"
	"log"

	"github.com/gopcua/opcua"
	"github.com/gopcua/opcua/ua"
)

func main() {
	endpoint := "opc.tcp://milo.digitalpetri.com:62541/milo"
	nodeID := "ns=2;s=Dynamic/RandomFloat"

	ctx := context.Background()

	c := opcua.NewClient(endpoint, opcua.SecurityMode(ua.MessageSecurityModeNone))
	if err := c.Connect(ctx); err != nil {
		log.Fatal(err)
	}
	defer c.Close()

	id, err := ua.ParseNodeID(nodeID)
	if err != nil {
		log.Fatalf("invalid node id: %v", err)
	}

	req := &ua.ReadRequest{
		MaxAge:             2000,
		NodesToRead:        []*ua.ReadValueID{{NodeID: id}},
		TimestampsToReturn: ua.TimestampsToReturnBoth,
	}

	resp, err := c.Read(req)
	if err != nil {
		log.Fatalf("Read failed: %s", err)
	}
	if resp.Results[0].Status != ua.StatusOK {
		log.Fatalf("Status not OK: %v", resp.Results[0].Status)
	}
	log.Printf("%#v", resp.Results[0].Value.Value())
}
'''

## 向服务器写数据[#](https://www.cnblogs.com/kainhuck/p/14663473.html#3352642258)

```python
import (
	"context"
	"github.com/gopcua/opcua"
	"github.com/gopcua/opcua/ua"
	"log"
)

func main() {
	endpoint := "opc.tcp://milo.digitalpetri.com:62541/milo"
	nodeID := "ns=2;s=Dynamic/RandomFloat"

	ctx := context.Background()

	c := opcua.NewClient(endpoint, opcua.SecurityMode(ua.MessageSecurityModeNone))
	if err := c.Connect(ctx); err != nil {
		log.Fatal(err)
	}
	defer c.Close()

	id, err := ua.ParseNodeID(nodeID)
	if err != nil {
		log.Fatalf("invalid node id: %v", err)
	}

	v, err := ua.NewVariant(10.0)
	if err != nil {
		log.Fatalf("invalid value: %v", err)
	}

	req := &ua.WriteRequest{
		NodesToWrite: []*ua.WriteValue{
			{
				NodeID:      id,
				AttributeID: ua.AttributeIDValue,
				Value: &ua.DataValue{
					EncodingMask: ua.DataValueValue,
					Value:        v,
				},
			},
		},
	}

	resp, err := c.Write(req)
	if err != nil {
		log.Fatalf("Read failed: %s", err)
	}
	log.Printf("%v", resp.Results[0])
}
'''

## 监听服务器数据变化[#](https://www.cnblogs.com/kainhuck/p/14663473.html#334506577)

```python
import (
	"context"
	"github.com/gopcua/opcua/monitor"
	"log"
	"os"
	"os/signal"
	"sync"
	"time"

	"github.com/gopcua/opcua"
	"github.com/gopcua/opcua/ua"
)

func cleanup(sub *monitor.Subscription, wg *sync.WaitGroup) {
	log.Printf("stats: sub=%d delivered=%d dropped=%d", sub.SubscriptionID(), sub.Delivered(), sub.Dropped())
	sub.Unsubscribe()
	wg.Done()
}

func startCallbackSub(ctx context.Context, m *monitor.NodeMonitor, interval, lag time.Duration, wg *sync.WaitGroup, nodes ...string) {
	sub, err := m.Subscribe(
		ctx,
		&opcua.SubscriptionParameters{
			Interval: interval,
		},
		func(s *monitor.Subscription, msg *monitor.DataChangeMessage) {
			if msg.Error != nil {
				log.Printf("[callback] error=%s", msg.Error)
			} else {
				log.Printf("[callback] node=%s value=%v", msg.NodeID, msg.Value.Value())
			}
			time.Sleep(lag)
		},
		nodes...)

	if err != nil {
		log.Fatal(err)
	}

	defer cleanup(sub, wg)

	<-ctx.Done()
}

func main() {
	endpoint := "opc.tcp://milo.digitalpetri.com:62541/milo"
	nodeID := "ns=2;s=Dynamic/RandomFloat"

	signalCh := make(chan os.Signal, 1)
	signal.Notify(signalCh, os.Interrupt)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	go func() {
		<-signalCh
		println()
		cancel()
	}()

	c := opcua.NewClient(endpoint, opcua.SecurityMode(ua.MessageSecurityModeNone))
	if err := c.Connect(ctx); err != nil {
		log.Fatal(err)
	}
	defer c.Close()

	m, err := monitor.NewNodeMonitor(c)
	if err != nil {
		log.Fatal(err)
	}

	m.SetErrorHandler(func(_ *opcua.Client, sub *monitor.Subscription, err error) {
		log.Printf("error: sub=%d err=%s", sub.SubscriptionID(), err.Error())
	})
	wg := &sync.WaitGroup{}

	// start callback-based subscription
	wg.Add(1)
	go startCallbackSub(ctx, m, time.Second, 0, wg, nodeID)

	<-ctx.Done()
	wg.Wait()
}
'''

# python opcua server demo

```python
from threading import Thread
import random
import time
from opcua import ua, uamethod, Server

@uamethod
def set_temperature(parent, variant):
    print(f"set_temperature {variant.Value}")
    temperature_thread.temperature.set_value(variant.Value)

@uamethod
def set_onoff(parent, variant):
    print(f"set_onoff {variant.Value}")
    temperature_thread.temperature.set_value(variant.Value)
'''

# 这个类用于后台定时随机修改值

```python
 class Temperature(Thread):
    def __init__(self, temperature, onoff):
        Thread.__init__(self)
        self._stop = False
        self.temperature = temperature
        self.onoff = onoff

    def stop(self):
        self._stop = True

    def run(self):
        count = 1
        while not self._stop:
            value = random.randint(-20, 100)
            self.temperature.set_value(value)
            print(f"random set temperature {value}")

            value = bool(random.randint(0, 1))
            self.onoff.set_value(value)
            print(f"random set onoff {value}")

            led_event.event.Message = ua.LocalizedText("high_temperature %d" % count)
            led_event.event.Severity = count
            #led_event.event.temperature = random.randint(60, 100)
            led_event.event.onoff = bool(random.randint(0, 1))
            led_event.trigger()
            count += 1

            time.sleep(10)

  if __name__ == "__main__":
    # now setup our server
    server = Server()
    server.set_endpoint("opc.tcp://0.0.0.0:40840/tuyaopcua/server/")
    server.set_server_name("TuyaOpcUa Driver Demo Device")

    # set all possible endpoint policies for clients to connect through
    server.set_security_policy([
        ua.SecurityPolicyType.NoSecurity,
        ua.SecurityPolicyType.Basic128Rsa15_SignAndEncrypt,
        ua.SecurityPolicyType.Basic128Rsa15_Sign,
        ua.SecurityPolicyType.Basic256_SignAndEncrypt,
        ua.SecurityPolicyType.Basic256_Sign])

    # setup our own namespace
    uri = "http://tuya.com"
    idx = server.register_namespace(uri)

    # 添加一个 `空调` 对象
    air_conditioner = server.nodes.objects.add_object(idx, "AirConditioner")
    temperature = air_conditioner.add_variable(idx, "temperature", 20)
    temperature.set_writable()
    onoff = air_conditioner.add_variable(idx, "onoff", True)
    onoff.set_writable()


    air_conditioner.add_method(idx, "set_temperature", set_temperature, [ua.VariantType.UInt32])
    air_conditioner.add_method(idx, "set_onoff", set_onoff, [ua.VariantType.Boolean])

    # creating a default event object, the event object automatically will have members for all events properties
    led_event_type = server.create_custom_event_type(idx,
                                                     'high_temperature',
                                                     ua.ObjectIds.BaseEventType,
                                                     [('temperature', ua.VariantType.UInt32), ('onoff', ua.VariantType.Boolean)])

    led_event = server.get_event_generator(led_event_type, air_conditioner)
    led_event.event.Severity = 300

    # start opcua server
    server.start()
    print("Start opcua server...")

    temperature_thread = Temperature(temperature, onoff)
    temperature_thread.start()

    try:

        led_event.trigger(message="This is BaseEvent")

        while True:
            time.sleep(5)
    finally:
        print("Exit opcua server...")
        temperature_thread.stop()
        server.stop()

'''
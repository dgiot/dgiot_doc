---
title: OPC-DA设备接入教程
sidebar_position: 9
---

# 前言
  
OPC软件作为工业自动化领域应用最广泛的软件，深受工业控制人员的喜爱。但也有许多情况下，OPC软件并不能满足实际的使用需求：
  
*使用场景*

- 1.OPC只在内网运行，希望可以将数据传递至外网，随时随地查看
- 2.OPC数据难以存库
- 3.希望可以更好展示数据，进行数据分析  
- ...
  
鉴此,dgiot专门提供了基于OPC通讯的OPC接口，以实现OPC数据的简单传输，解决行业痛点。  
  
  接下来我们将学习掌握opc通道的使用
  
  配套学习软件下载
  
  [KEPServerEX官方下载地址](https://www.kepware.com/zh-cn/products/kepserverex/)
  
  [dgiot_opc.exe](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/dgiot_opc.exe)
  
## OPC简介

![picture1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/picture1.png)

问一个OPC老手，他们或许会笑，因为他们知道有很多含义！在经典的且程序化的说法是：**O** LE for **P** rocess **C** ontrol（用于过程控制的OLE）。OLE 或对象链接和嵌入是Windows的基本早期构建块，允许应用程序在它们之间共享复杂的信息。在Windows 3.0的第一个演示中，人们将 Excel电子表格嵌入到 Microsoft Word文档中，以及更新电子表格，打开Word和更新文档的重要性。原始OPC标准源自该技术和 COM 或 Windows 组件对象模型。

从那以后，我们会听到很多其他的一些定义，但是比较出名的是现在官方OPC基金会所给出的说法是：它的含义是**O** pen **P** latform **C** ommunications（开放平台通信）。其实无论它的定义是什么，其目标保持不变：消除自动化软件和硬件平台之间互操作性的障碍，为用户提供选择。  

![picture2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/picture2.png)


## 具体使用方法见
- [使用KepServerEx进行数据模拟]

- [dgiotOPC桥接服务]

## 使用KepServerEx进行数据模拟

KepServerEx是一款在工业控制中比较常见的数据采集服务软件之一，提供了多种类型的驱动，具有比较广泛的适用性。很多厂商和个人都会选择用它来做OPCServer。在项目的实施或测试过程中，我们有时会遇到身边没有传感器、PLC之类设备的情况，就无法通过实时数据来测试工作成果的有效性。幸运的是KepServerEx提供了数据模拟功能，可以提供多种类型、格式的模拟数据。下面就是具体的配置过程。

### 安装KepServerEx

![kepserver1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/kepserver1.png)

安装完成后进入配置界面

### 配置KepServerEx

#### 配置通道

进入主界面后，在项目栏中点击“单击添加通道”

![kepserver2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/kepserver2.png)、

选择“Simulator”，即模拟器驱动，然后点击下一步

![kepsever3.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/kepsever3.png)

设置通道名

![kepserver4.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/kepserver4.png)

选择优化方法与设置工作循环

![kepserver5.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/kepserver5.png)

设置无效浮点数的替换方法

![kepserver6.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/kepserver6.png)

以及存储设置

![kepserver7.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/kepserver7.png)

完成上述选项后，可看到最后的完成界面，点击完成，完成通道配置。

![kepsever8.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/kepsever8.png)

#### 配置设备

在刚刚添加的通道下，单击添加设备

![device1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/device1.png)

配置设备属性，包括命名，选择设备型号等属性

![device2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/device2.png)

#### 配置tag

在新添加的设备下，点击添加标签

![tag1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/tag1.png)

配置tag属性，包括命名、选择数据类型、客户端访问模式、设置地址等；

示例如下：
![tag2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/tag2.png)

ag即标签，可理解为OPC中的Item。现在才来到整篇文章的重点。

添加标签的界面包含两部分，一部分是对标签的定义（Identification），包括名称（Name）、地址（Address）、描述（Description），另一部分是数据的属性（Data Properties），包括数据类型（DataType ）、读写类型（Client）、扫描频率（Scan Rate）。
对我们而言，用处最大的就是Address，我们可以编写不同的函数放在Address中用来模拟不同类型的数据。官方文档提供了多种模拟函数供我们使用（可在帮助文档中找到）。

* * *

##### 线形变化型

###### RAMP(Rate, Low Limit, High Limit, Increment)

Rate：变化率，单位毫秒  
Low Limit：下限值  
High Limit：上限值  
Increment：变化量

举例：

####### RAMP(120, 35, 100, 4)

从35 增长到100，每120毫秒增长4。

####### RAMP(300, 150.75, 200.50, -0.25)

从200.50降低到150.75，每300毫秒减少0.25。

* * *

##### 随机变化型

###### RANDOM(Rate, Low Limit, High Limit)

Rate：变化率，单位毫秒  
Low Limit：下限值  
High Limit：上限值

举例：

####### RANDOM(30, -20, 75)

在-20和75之间随机变化，每30毫秒变化一次。

* * *

##### 三角函数型

###### SINE(Rate, Low Limit, High Limit, Frequency, Phase)

Rate：变化率/变化周期，单位毫秒  
Low Limit：下限值  
High Limit：上限值  
Frequency：三角函数频率  
Phase：三角函数偏移量

> 注意：频率（Frequency）的最大有效值是5Hz，有效范围是从0.001到5赫兹。偏移量（Phase）取值范围在0.0至360.0之间。为了得到一个更好的正弦输出，变化率（Rate）应该至少比期望频率快一倍。比如频率（Frequency）为5赫兹的正弦曲线，其周期是200毫秒，那么变化周期（Rate）的值最大只能设为100毫秒。在这类函数中，变化周期的取值范围是10-1000毫秒。

举例：

####### SINE(10, -40, 40, 2, 0)

以2赫兹的频率在-40和40 之间进行正弦变化，偏移量为0

##### 用户自定义型

###### USER(Rate, User Value1, User Value2, User Value3,…User ValueN)

Rate：变化率，单位毫秒  
User Value1….ValueN：用户自定义的值，可以有多个

举例：

####### USER(250, Hello, World, This, Is, A, Test)

以250毫秒的频率循环显示Hello、World、This、Is、A、Test中的一个单词。

####### USER(50, 1,1,0,1,0,1,0,0,1,1,1,0,0,0)

以50毫秒的频率循环显示后面的1、0。

> 需要注意的是上面几种函数创建的Tag都是只读（ReadOnly）类型的，是不能写入的。

* * *

##### 创建自己需要的标签

有了上面的函数我们可以根据自己的需要创建不同类型的标签。
例如：

RANDOM (30, 49.900000, 50.100000)    

USER (10,10)

USER (250,Hello,World,This,Is,A,Test)

将标签添加完之后保存，用OPCClient连接就可以看到数据在愉快的跳动了。（工具栏中点击“启动OPC Quick Client”）

![tag3.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/tag3.png)






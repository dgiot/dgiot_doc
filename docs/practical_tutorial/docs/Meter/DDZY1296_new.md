---
title: DDZY1296电表接入教程(适用于v4.7.0之后)
sidebar_position: 6
---

<iframe height="600" width="800" src="//player.bilibili.com/player.html?aid=461717304&bvid=BV1eL411H7FT&cid=368810202&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

**[小 迪 导读]**：
本教程首先通过全链路虚拟环境讲述如何用DG-IoT开源工业物联网平台完成电力集抄项目,在掌握基础概念和业务流程之后，可以尝试接入虚拟电表或者真实电表。
[点击了解](https://www.dgiotcloud.cn/blog/technical/dgiot%e7%94%b5%e8%a1%a8%e6%8e%a5%e5%85%a5%e5%ae%9e%e6%88%98%e6%95%99%e7%a8%8b/)虚拟电表教程

  系统需要使用两个设备以及若干导线：
- 电表：采用的是华立的DDZY285型单相费控智能电能表
- DTU：采用的是有人的口红CAT-1 DTU DR154

系统架构逻辑图如下，包括设备连接，通道通信，模型设置，应用显示部分
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704091523.png" />

## 操作步骤：

###  1.设备接线
#### 电表信息

| 品牌 | 华立               |
| ---- | ------------------ |
| 型号 | DDZY285型          |
| 类型 | 单相费控智能电能表 |

+ 电表图片

<img width="40%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704205674.png" />

#### DTU信息

| 品牌        | 有人           |
| ----------- | -------------- |
| 型号        | DR154（RS485） |
| 密码（Pwd） | usr_cn         |

+ dtu图片

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220796.png" />


#### 操作步骤

##### 电表连接电源

电表根据端口图端口1(相线入)连接电源火线(L),端口3(零线入)连接电源零线(N)

**说明** 相线入、零线入用于给电表供电

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220778.png" />

##### DTU连接电源

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208170422107.png" />

根据DTU上的端口图,红色线(电源线)连接DC+,黑色线(地线)连接DC-

**注意** 这里DC为直流电5-16V
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220794.png" />

##### 连接DTU和电表

根据电表端口图,电表的11(A)端口连接DTU端口的RX(A),电表的12(B)端口连接DTU端口的TX(B)

**说明** RX为接收,TX为发送

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220735.png" />



### 2.dtu配置

1.DTU正面二维码下方标识正负极连接电源，A,B端连接电表，到开手机微信扫码，扫描DTU二维码进入小程序，打开蓝牙连接与DTU背部IMEI相同编号的蓝牙，进入连接，密码为**usr_cn**。
<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220641.png" />

<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220737.png" />


2.打开参数设置，设置工作模式：地址设为部署的平台地址；端口号设为61888。

**说明** 地址为服务器地址，端口号为服务器端口号
 **警告** 设置dtu时，工作模式设置完后需保存再设置串口，不能一次性设置，一次性设置会导致设置不完全

<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220660.png" />

勾选注册包功能，注册包数据类型选择IMEI码，将会自动生成一个IMEI码。

<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220610.png" />

3.打开参数设置，设置串口设置：波特率设为2400，校验位选择EVEN。

**说明** 电能表：华立科技股份有限公司的DDZY285型单相费控智能电能表；波特率可查询电能表技术协议书中RS485的缺省波特率或者测试得出，默认为2400

<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220697.png" />

### 3.创建采集通道
1.创建电表采集通道。位置在通道管理-创建通道
<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/4.png" />
2.选择电表采集通道并配置
<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/5.png" />
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208170432289.png" />

|模式说明：||
| -- | -- |
| nosearch  | 不扫描，需要用户自行抄表  |
|  quick |  只扫描一次，适合一个dtu挂一个电表场景 |
|  normal | 扫描256次，适合一个dtu挂多个电表的场景  |

<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/7.png" />
3.产品添加通道后需对通道进行重启

4.通道日志查看

<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/8.png" />
<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/9.png" />

### 4.创建产品
1.要连接DL645电表，需创建两种产品
![](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/10.png)
2.产品信息
电表
<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/11.png" />
DTU
<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/12.png" />
3.产品物模型配置
将以下物模型代码直接复制即可
电表

```json
{
    "events": [],
    "properties": [
        {
            "accessMode": "r",
            "dataForm": {
                "address": "0X10",
                "afn": "",
                "byteType": "",
                "bytelen": "",
                "collection": "%{s}",
                "control": "%{d}",
                "countcollection": "%{s}",
                "countround": "all",
                "countstrategy": 20,
                "da": "",
                "data": "null",
                "dt": "",
                "iscount": "0",
                "offset": 0,
                "operatetype": "readCoils",
                "order": 0,
                "originaltype": "short16_AB",
                "protocol": "DLT645",
                "rate": 1,
                "round": "all",
                "slaveid": "0X10",
                "strategy": "20"
            },
            "dataSource": {
                "": [],
                "_dlinkindex": 1,
                "afn": "11",
                "di": "00010000",
                "length": 2,
                "type": "bytes"
            },
            "dataType": {
                "das": [],
                "specs": {
                    "max": 9999,
                    "min": 0,
                    "precision": 3,
                    "step": 0,
                    "unit": " KW·H"
                },
                "type": "float"
            },
            "devicetype": "电表",
            "identifier": "energy",
            "isaccumulate": false,
            "isshow": true,
            "isstorage": true,
            "moduleType": "properties",
            "name": "有功总电能",
            "required": true,
            "updateAt": "1672899860160",
            "index": 0
        }
    ],
    "services": [],
    "tags": []
}
```

4.如何复制物模型

在产品管理-配置-物模型-查看物模型处

<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/13.png" />

将物模型代码复制粘贴即可

<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/14.png" />

### 5.电表注册成功

1.电表扫描成功

<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/15.png" />

2.电表上线成功

<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/16.png" />

3.设备地图显示成功
<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/17.png" />

### 6.电表采集成功

1.电表实时数据

<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/18.png" />

2.电表历史数据
<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/19.png" />

**[小 迪 点评]**
   + dgiot支持DLT645协议的电表接入，可以选择不尝试接入虚拟电表而选择直接接入真实电表。
   + 真实设备的接入针对新手玩家，dgiot的接线步骤将会提供很大的帮助。

电力集抄原文地址：[https://doc.dgiotcloud.cn/docs/practical_tutorial/docs/Meter/dlt645](https://doc.dgiotcloud.cn/docs/practical_tutorial/docs/Meter/dlt645 "https://doc.dgiotcloud.cn/docs/practical_tutorial/docs/Meter/dlt645")	

*想了解更多 [dgiot](https://www.dgiotcloud.cn) 的具体细节，欢迎大家在[GitHub](https://github.com/dgiot/dgiot)上查看相关源代码。*
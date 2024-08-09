---
title: 温湿度传感器接入教程
sidebar_position: 7
---

## 该教程适用于v4.7.0之后

**[小 迪 导读]**：
本教程在掌握基础**modbusRTU标准协议**概念和业务流程之后，通过真实的支持ModbusRTU标准协议的设备和DTU来进行实战演练。

**注:** 设备接入操作仅平台操作存在差异，其他教程的网关配置可做参考。

  系统需要使用两个设备以及若干导线：
- 温湿度传感器：采用的是SHT20传感器 Modbus工业级
- DTU：采用的是有人的口红CAT-1 DTU DR154

系统架构逻辑图如下，包括设备模拟，通道通信，模型设置，应用显示部分
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911243955.png" />



## 操作步骤：

###  1.设备接线
#### 设备信息

| 模块 | 温湿度变送器                |
| ---- | ------------------ |
| 型号 | SHT20传感器          |
| 类型 | Modbus 工业级 高精度 温湿度监测 |

+ SHT20传感器


<img width="40%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081907533693.png" />

#### DTU信息

| 品牌        | 有人           |
| ----------- | -------------- |
| 型号        | DR154（RS485） |
| 密码（Pwd） | usr_cn         |

+ dtu图片

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220796.png" />

#### 操作步骤

##### SHT20传感器连接电源

SHT20传感器根据端口图正负连接电源正负，电源可以选用电源适配器。


<img width="40%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911100578.png" />

##### DTU连接电源
根据DTU上的端口图,红色线(电源线)连接DC+,黑色线(地线)连接DC-

<img width="40%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208170422107.png" />



      

##### 连接DTU和SHT20传感器

根据端口图,SHT20传感器的A端口连接DTU端口的RX(A),SHT20传感器的B端口连接DTU端口的TX(B)

**说明** RX为接收,TX为发送

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911123271.png" />



### 2.dtu配置

1.DTU正面二维码下方标识正负极连接电源，A,B端连接传感器，到开手机微信扫码，扫描DTU二维码进入小程序，打开蓝牙连接与DTU背部IMEI相同编号的蓝牙，进入连接，密码为**usr_cn**。
<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208191113416.png" />

<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220737.png" />


2.打开参数设置，设置工作模式：地址设为部署的平台地址；端口号设为20111。

**说明** 地址为服务器地址，端口号为服务器端口号
 **警告** 设置dtu时，工作模式设置完后需保存再设置串口，不能一次性设置，一次性设置会导致设置不完全

<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208191116213.png" />

勾选注册包功能，注册包数据类型选择IMEI码，将会自动生成一个IMEI码。

<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081704220610.png" />

3.打开参数设置，设置串口设置：波特率设为9600，校验位选择NONE。

**说明** 支持ModbusRTU的设备：参数可以询问商家或者商品介绍获取设备的参数

<img width="30%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208191126316.png" />
![file](https://www.dgiotcloud.cn/wp-content/uploads/202208220239503.png)

### 3.创建采集通道
1.创建ModbusRTU采集通道。位置在通道管理-创建通道
<img width="80%" src="http://www.dgiotcloud.cn/wp-content/uploads/2022081812155529.png" />
2.选择Modbus采集通道并配置
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081901583136.png" />

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911184451.png" />



3.**产品添加通道后需对通道进行重启**

4.通道日志查看

<img width="80%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/8.png" />
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911190426.png" />


### 5.创建产品
1.要连接ModbusRTU，创建一种产品即可

2.创建产品

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081902061520.png" />
ModbusRTU
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208190207031.png" />

3.产品物模型配置
将以下物模型代码直接复制即可

ModbusRTU

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
                "collection": "%%{temp}/10",
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
                "protocol": "MODBUSRTU",
                "rate": 1,
                "round": "all",
                "slaveid": "0X10",
                "strategy": "计算值"
            },
            "dataSource": {
                "": [],
                "_dlinkindex": "",
                "address": "1",
                "operatetype": "readIregs",
                "originaltype": "short16_AB",
                "registersnumber": "1",
                "slaveid": "temp_humid"
            },
            "dataType": {
                "das": [],
                "specs": {
                    "max": 100000000000,
                    "min": 0,
                    "precision": 3,
                    "step": 0,
                    "unit": ""
                },
                "type": "float"
            },
            "devicetype": "温湿度传感器",
            "identifier": "temp",
            "index": 0,
            "isaccumulate": false,
            "isshow": true,
            "isstorage": true,
            "moduleType": "properties",
            "name": "温度",
            "required": true,
            "updateAt": "1671180159200"
        },
        {
            "accessMode": "r",
            "dataForm": {
                "address": "0X10",
                "afn": "",
                "byteType": "",
                "bytelen": "",
                "collection": "%%{humid}/10",
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
                "protocol": "MODBUSRTU",
                "rate": 1,
                "round": "all",
                "slaveid": "0X10",
                "strategy": "计算值"
            },
            "dataSource": {
                "": [],
                "_dlinkindex": "",
                "address": "0",
                "operatetype": "readIregs",
                "originaltype": "short16_AB",
                "registersnumber": "1",
                "slaveid": "temp_humid"
            },
            "dataType": {
                "das": [],
                "specs": {
                    "max": 100000,
                    "min": 0,
                    "precision": 3,
                    "step": 0,
                    "unit": "%"
                },
                "type": "float"
            },
            "devicetype": "温湿度传感器",
            "identifier": "humid",
            "index": 1,
            "isaccumulate": false,
            "isshow": true,
            "isstorage": true,
            "moduleType": "properties",
            "name": "湿度",
            "required": true,
            "updateAt": "1671180134626"
        },
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
                "protocol": "MODBUSRTU",
                "rate": 1,
                "round": "all",
                "slaveid": "0X10",
                "strategy": "3"
            },
            "dataSource": {
                "": [],
                "_dlinkindex": "",
                "address": "0X0001",
                "operatetype": "readIregs",
                "originaltype": "bit",
                "registersnumber": "2",
                "slaveid": "0X01"
            },
            "dataType": {
                "das": [],
                "specs": {
                    "max": 10000000000000000,
                    "min": 0,
                    "precision": 3,
                    "step": 0,
                    "unit": ""
                },
                "type": "int"
            },
            "devicetype": "温湿度传感器",
            "identifier": "temp_humid",
            "index": 2,
            "isaccumulate": false,
            "isshow": false,
            "isstorage": false,
            "moduleType": "properties",
            "name": "温湿度",
            "required": true,
            "updateAt": "1669866074067"
        }
    ],
    "services": [],
    "tags": []
}
```

4.如何复制物模型

在产品管理-配置-物模型-查看物模型处

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911214582.png" />

将物模型代码复制粘贴即可

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911212924.png" />


复制完后可以点击编辑查看配置情况，dgiot针对modbusRTU多个数据的情况提供一次性全部读取的方案。
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911203071.png" />

负责采集的物模型的下方数据来源与设备参数配置的一致
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911210140.png" />

<img width="60%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911210523.png" />

### 6.SHT20传感器设备连接的DTU注册成功

1.SHT20传感器设备连接的DTU注册成功


<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208191122335.png" />
2.SHT20传感器设备连接的DTU上线成功

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911224777.png" />

3.设备地图显示成功

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911225873.png" />

### 7.ModbusRTU数据采集成功

1.SHT20传感器实时数据

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911230950.png" />
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911231476.png" />
2.ModbusRTU历史数据
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911231874.png" />

**[小 迪 提醒]**
没有多个数据的modbusRTU设备的用户可以使用虚拟modbus软件自行模拟。  
虚拟modbus连接[点击了解详情](https://www.dgiotcloud.cn/blog/technical/dgiot%e5%ae%9e%e6%88%98%e6%95%99%e7%a8%8b-%e8%99%9a%e6%8b%9fmodbusrtu%e6%8e%a5%e5%85%a5/)。

### 其他modbusRTU设备接入

- [DGIOT实战教程——甲烷传感器接入](https://www.dgiotcloud.cn/2588/dgiot%e5%ae%9e%e6%88%98%e6%95%99%e7%a8%8b-%e7%94%b2%e7%83%b7%e4%bc%a0%e6%84%9f%e5%99%a8%e6%8e%a5%e5%85%a5/)
- [DGIOT实战教程——风量传感器接入](https://www.dgiotcloud.cn/2614/dgiot%e5%ae%9e%e6%88%98%e6%95%99%e7%a8%8b-%e9%a3%8e%e9%87%8f%e4%bc%a0%e6%84%9f%e5%99%a8%e6%8e%a5%e5%85%a5/)
- [DGIOT实战教程——红外传感器接入](https://www.dgiotcloud.cn/2730/dgiot%e5%ae%9e%e6%88%98%e6%95%99%e7%a8%8b-%e7%ba%a2%e5%a4%96%e4%bc%a0%e6%84%9f%e5%99%a8%e6%8e%a5%e5%85%a5/)

**[小 迪 点评]**
   + dgiot支持ModbusRTU协议的设备接入，有真实设备的用户尝试进行设备接入演练。
   + 真实设备的接入针对新手玩家，dgiot的接线步骤将会提供很大的帮助。


*想了解更多 [dgiot](https://www.dgiotcloud.cn) 的具体细节，欢迎大家在[GitHub](https://github.com/dgiot/dgiot)上查看相关源代码。*
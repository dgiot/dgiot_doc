---
title: Mqtt设备接入教程
sidebar_position: 7
---

系统需要使用的一个软件：
- MQTT X：MQTT X 是EMQ 开源的一款跨平台 MQTT 5.0 客户端工具，它支持 macOS, Linux, Windows，并且支持 MQTT 消息格式转换。


系统架构逻辑图如下，包括设备模拟，通道通信，模型设置，应用显示部分
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022082404142329.png" />




## 操作步骤：
本次连接先介绍平台产品及物模型的配置再介绍MQTTX。

**[小 迪 提醒]**：
+ 平台将MQTT融合到dgiot的DLink协议中，如通道中无Dlink通道，新建即可。

![](http://www.dgiotcloud.cn/wp-content/uploads/2022121203473127.png)

###  1.创建产品
1.要连接MQTT，创建一种产品即可

2.创建产品
<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022082404144055.png" />

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022082404145793.png" />


<img width="80%" src="http://www.dgiotcloud.cn/wp-content/uploads/202212120343352.png" />

**[小 迪 提醒]**：
+ **产品添加通道后需对相应的通道进行重启**

3.产品物模型配置

进入产品详情

![file](https://www.dgiotcloud.cn/wp-content/uploads/2022082404362313.png)

将以下物模型代码直接复制即可

+ MQTT物模型范例(不选择DLink协议)

```json
{
    "properties": [
        {
            "accessMode": "r",
            "dataForm": {
                "address": "0X10",
                "collection": "%{s}",
                "control": "%{d}",
                "countcollection": "%{s}",
                "countround": "all",
                "countstrategy": 20,
                "data": "null",
                "iscount": "0",
                "offset": 0,
                "operatetype": "readCoils",
                "order": 0,
                "originaltype": "short16_AB",
                "protocol": "",
                "rate": 1,
                "round": "all",
                "slaveid": "0X10",
                "strategy": "主动上报"
            },
            "dataSource": {
                "": []
            },
            "dataType": {
                "das": [],
                "specs": {
                    "max": 100,
                    "min": 0,
                    "precision": 3,
                    "step": 0,
                    "unit": "℃"
                },
                "type": "float"
            },
            "devicetype": "温度",
            "identifier": "temp",
            "isaccumulate": false,
            "isshow": true,
            "isstorage": true,
            "moduleType": "properties",
            "name": "温度",
            "required": true,
            "updateAt": "1661313208982",
            "index": 0
        }
    ]
}
```
也可以新增自定义物模型

![file](https://www.dgiotcloud.cn/wp-content/uploads/2022082404170791.png)

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022082404171513.png" />

+ MQTT物模型范例(选择DLink协议)

```json
{
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
                "protocol": "DLINK",
                "rate": 1,
                "round": "all",
                "slaveid": "0X10",
                "strategy": "主动上报"
            },
            "dataSource": {
                "_dlinkindex": "",
                "dis": [
                    {
                        "data": "2",
                        "key": "temperature",
                        "undefined": "2"
                    }
                ]
            },
            "dataType": {
                "das": [],
                "specs": {
                    "max": 100,
                    "min": 0,
                    "precision": 3,
                    "step": 0,
                    "unit": "℃"
                },
                "type": "float"
            },
            "devicetype": "温度",
            "identifier": "temp",
            "isaccumulate": false,
            "isshow": true,
            "isstorage": true,
            "moduleType": "properties",
            "name": "温度",
            "required": true,
            "updateAt": "1661313524032",
            "index": 0
        }
    ]
}
```
也可以新增自定义物模型

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022082404173487.png" />

4.如何复制物模型

在产品管理-配置-物模型-查看物模型处

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022082404174837.png" />

将物模型代码复制粘贴即可

<img width="80%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022082404175839.png" />



### 2.MQTTX下载配置

1）、下载安装[MQTTX](https://mqttx.app/)。

2）、配置连接参数。

![file](https://www.dgiotcloud.cn/wp-content/uploads/20220824042337100.png)

|参数|	解释|
|  :----:  |  :----:  |
|名称|	任取即可|
|Client ID|	{DeviceAddr}也即设备编号|
|服务器地址|	服务器地址|
|端口|	填写1883|
|用户名|	产品id（位置见下图）|
|密码|	产品密钥（位置见下图）|

![file](https://www.dgiotcloud.cn/wp-content/uploads/2022082404183653.png)

填写完成后选择连接。则会在对应产品下自动创建我们定义的设备，可在设备管理中查看：

![file](https://www.dgiotcloud.cn/wp-content/uploads/202208240418484.png)

3）、发送信息。

![file](https://www.dgiotcloud.cn/wp-content/uploads/2022082404294016.png)

在MQTTX中向平台发送信息，报文格式选择为JSON。
Topic：
　　　　　$dg/thing/{productid}/{deviceAddr}/properties/report

报文内容：
 　　　　{
　　　　　　　　“标识符”:值
　　　　　　　　“标识符”:值
　　　　　　　　····
　　　　　　　　“标识符”:值
　　　　}

topic中需明确发送信息对应的产品和设备，其中{productid}为产品id，与连接阶段输入的用户名为同一个，{deviceAddr}为设备地址，也即自定义的设备名。
由topic确认了产品与设备后在报文的具体内容中传递属性值。由标识符确认要传递那个属性，并使用””扩起，在:后填写属性的具体数值。随后选择发送即可查看到产品的实时数据。

![file](https://www.dgiotcloud.cn/wp-content/uploads/202208240424043.png)




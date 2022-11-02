---
title: 三合一传感器接入教程
sidebar_position: 6
---

# 教程概述
本次教程我们将对单向费控智能电能表的接入做一个介绍.该电表最终实现的功能为实时的上报电表的数据到平台且一个DTU可以对多个电表进行数据报告.该功能的最终呈现效果如下图所示:

![数值显示.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%95%B0%E5%80%BC%E6%98%BE%E7%A4%BA.png)

![echart显示.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/echart%E6%98%BE%E7%A4%BA.png)

对于设备的连接和调试我们将利用图片或视频进行引导,具体教程见左侧导航栏：

- 1.硬件连接
- 2.DTU调试
- 3.平台配置

如想要实际动手体验我们的平台服务，可使用dgiot演示平台：[dgiot演示平台](http://prod.iotn2n.com/)

演示账号：dgiot_admin

password：dgiot_admin

dgiot平台代码已开源，作为国内首家开源工业物联网平台广受青睐和好评，活跃的社区保证了项目的健康发展，也贡献了丰富的代码支持。欢迎大家体验。

地址：
[dgiotGithub官网](https://github.com/dgiot)

喜欢，欢迎点star鼓励我们!


## 硬件连接

 ### 硬件准备
本次操作用到的电表:一氧化碳温湿度传感器,DTU:USR-W610.两者之间的通讯需要利用RS485线来完成.所需硬件如下图:

![硬件准备.jpg](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E5%AE%9E%E7%89%A9%E7%B1%BB%E5%9E%8B.jpg)

DTU:该DTU支持wifi和网线联网.那么这次我们是利用wifi对其进行入网操作.该型号支持RS485和RS232口数据传输,鉴于传感器支持485口协议那此次采用RS485做串联口。

### 硬件连接
需要注意的是传感器有4根引线分别连接电源和RS485,应该从说明书出了解各颜色线的用途后进行连接. 具体连接步骤如图所示:

![硬件连接.jpg](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E5%AE%9E%E7%89%A9%E8%BF%9E%E6%8E%A5.jpg)

------
目前连线已经完成,可以尝试通电查看是否正常。若一切正常运行进入下一阶段DTU的配置。

## DTU调试

进行下列操作前,先获取传感器的波特率,数据地址,设备信息奇偶校验和开始停止位. ***可以通过询问卖家、查看说明书或查看传感器自身标签等方式获得设备信息.*** 

DTU调试分3个方面。分别是网络配置、MCU配置和服务器信息配置。对于DTU而言,我们将在网页上面对它进行信息变更，关于DTU具体信息可在背面查看。

1.*网络配置*:此步骤以建立DTU连接网络为目的。点击DTU进行无线网络进行设置。将要连的wifi用户和密码输入到指定位置，设置完后若要点确认的因在完成每一次更改后都点一次,否则信息不会保存。

![网络连接.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E7%BD%91%E7%BB%9C%E8%BF%9E%E6%8E%A5.png)

2.*MCU配置*:此步骤以建立电表和DTU之间的通讯为目的(对DTU的MCU进行调试时务必将传感设备所有配置与MCU配置调制成一致)，并选择设备上报注册包信息为MAC地址,方便设备自动上线后我们的检查。最后确认DTU不会上报有些没必要的信息，修改信息如下图所示:

![串口注册包.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%B8%B2%E5%8F%A3%E6%B3%A8%E5%86%8C%E5%8C%85.png)

3.*服务器信息配置*:此步骤以建立DTU与服务器数据库连接为目的，先将我们的DTU设置为client模式去连接服务器,后将服务器地址和将要接收信息的端口号填入即可。如图示:

![服务器参数.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%82%E6%95%B0.png)

*****确保网络配置连接已完成更改后,在模式一栏将AP改为STA模式.即变为静态连接关闭原有的热点模式*****

![sta模式设置.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/sta%E6%A8%A1%E5%BC%8F%E8%AE%BE%E7%BD%AE.png)

---
点击重启,让系统重启生效:

![模块重启.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%A8%A1%E5%9D%97%E9%87%8D%E5%90%AF.png)

## 平台配置

配置通道->创建产品->打开通道->设备自动上线->查看设备信息

### 通道配置
配置3个通道,负责对DTU和电表发送下行指令和接收存储上行的信息进行管理和控制，具体配置说明如下所示:

*Modbus-TCP*:用于采集响应的数据,通过我们的解析可以得到用传感器实时数据。

![mod-tcp通道创建.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/mod-tcp%E9%80%9A%E9%81%93%E5%88%9B%E5%BB%BA.png)

*指令通道INSTRUCT*:根据用户需求对DTU传送不同的指令以得到数据回复。由于查找的数据有三个,我们将建立三个物模型来实现不同数据的上报.

![指令通道创建.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%8C%87%E4%BB%A4%E9%80%9A%E9%81%93%E5%88%9B%E5%BB%BA.png)

*存储通道TD*:用于将传感器采集到的值存储到数据库内方便后期的调用与实时的查看。

![TD通道创建.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/TD%E9%80%9A%E9%81%93%E5%88%9B%E5%BB%BA.png)

### 产品创建
创建一个'三合一传感器'产品,通过关联通道上报的数据进行分析达到创建设备的目的.创建完成产品后,进入'配置'界面进行下列操作:

![创建产品.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E5%88%9B%E5%BB%BA%E4%BA%A7%E5%93%81.png)

### 物模型导入

鉴于物模型的配置容易出现错误，现将物模型数据导出供大家使用和参考。可在产品-物模型-查看物模型中将下列参数更新然后刷新网页即可。

```
{
    "properties": [
        {
            "name": "一氧化碳",
            "dataForm": {
                "data": "1",
                "rate": 1,
                "order": 3,
                "round": "all",
                "offset": 0,
                "address": "0X02",
                "control": "%d",
                "slaveid": "0X01",
                "protocol": "modbus",
                "strategy": "20",
                "byteorder": "big",
                "collection": "%s",
                "operatetype": "readHregs",
                "originaltype": "ushort16_AB"
            },
            "dataType": {
                "type": "int",
                "specs": {
                    "max": 1000,
                    "min": 0,
                    "step": 0.01,
                    "unit": "mm³",
                    "precision": 3
                }
            },
            "required": true,
            "accessMode": "r",
            "identifier": "co"
        },
        {
            "name": "温度",
            "dataForm": {
                "data": "1",
                "rate": 1,
                "order": 2,
                "round": "all",
                "offset": 0,
                "address": "0X01",
                "control": "%d",
                "slaveid": "0X01",
                "protocol": "modbus",
                "strategy": "20",
                "byteorder": "big",
                "collection": "(%s/10)",
                "operatetype": "readHregs",
                "originaltype": "short16_AB"
            },
            "dataType": {
                "type": "float",
                "specs": {
                    "max": 100,
                    "min": -100,
                    "step": 0.01,
                    "unit": "℃",
                    "precision": 3
                }
            },
            "required": true,
            "accessMode": "r",
            "identifier": "temperature"
        },
        {
            "ico": "http://1.117.219.8:1250/group1/group1/long.jpg",
            "name": "湿度",
            "dataForm": {
                "data": "1",
                "rate": 1,
                "order": 1,
                "round": "all",
                "offset": 0,
                "address": "0X00",
                "control": "%d",
                "slaveid": "0X01",
                "protocol": "modbus",
                "strategy": "20",
                "byteorder": "big",
                "collection": "(%s/10)",
                "operatetype": "readHregs",
                "originaltype": "ushort16_AB"
            },
            "dataType": {
                "type": "float",
                "specs": {
                    "max": 100,
                    "min": 0,
                    "step": 0.01,
                    "unit": "%",
                    "precision": 3
                }
            },
            "required": true,
            "accessMode": "r",
            "identifier": "humidity"
        }
    ]
}
```

***物模型的创建*** 是产品上线最为关键的步骤.请详细阅读说明书后进行配置.我们应该从中获取从机地址、寄存机格式、数据地址、数据长度和数据格式等这些必要参数.由于需要从该传感器读取3个不同的参数,需要配置3个物模型并编辑其采集顺序来完成目标.

![说明书注意.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E8%AF%B4%E6%98%8E%E4%B9%A6%E6%B3%A8%E6%84%8F.png)

这是三合一传感器的部分说明书,数据来源这边按照说明书指示来填写.指令通道将按照该配置进行指令的下发.

![湿度物模型.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%B9%BF%E5%BA%A6%E7%89%A9%E6%A8%A1%E5%9E%8B.png)

湿度物模型

![温度物模型.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%B8%A9%E5%BA%A6%E7%89%A9%E6%A8%A1%E5%9E%8B.png)

温度物模型

![一氧化碳物模型.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%B8%80%E6%B0%A7%E5%8C%96%E7%A2%B3%E7%89%A9%E6%A8%A1%E5%9E%8B.png)

一氧化碳物模型

---------------

在配置完物模型后,将我们的各个通道添加进该产品.最终图例如下:

![产品物模型.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%BA%A7%E5%93%81%E7%89%A9%E6%A8%A1%E5%9E%8B.png)

![产品物接入.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%BA%A7%E5%93%81%E7%89%A9%E6%8E%A5%E5%85%A5.png)

![产品物存储.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%BA%A7%E5%93%81%E7%89%A9%E5%AD%98%E5%82%A8.png)

*配置完成后检查一遍,后将所用通道重启.***切记在修改完产品或通道后都要重启通道使配置生效***。*

---

### 设备上线
就DTU而言,连入服务器会根据其上报的MAC值进行校验后自动创建设备,我们可以点击'查看'以得到设备的实时信息:

![设备上线.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E8%AE%BE%E5%A4%87%E4%B8%8A%E7%BA%BF.png)















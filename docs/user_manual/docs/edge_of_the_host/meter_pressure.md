---
title: 电力压测报告
sidebar_position: 1
---

# 电力压测报告

![file](https://www.dgiotcloud.cn/wp-content/uploads/2023031611430633.png)

------

情景分析：中小型工厂一个车间包含一百个左右的各类设备，比如电表、水表、空压机等各类传感器。协议多样化，改造难度大、预算低、周期短。如何快速解决用户痛点，应用开源物联网技术，帮助中小企业实现数字化转型提供了方案。

------

|dgiot方案 |  其他方案  |
| ------------ | ------------ |
| 内嵌dgiot完整系统，支持海量协议解析 | 只支持电表协议解析，无法接入其他设备 |
| 抄表数据本地存储，支持历史回调 | 数据4G上云，网络问题导致数据丢失无法追溯 |
| 组网简单，一层组网，千元级起步 | 组网复杂，三四层组网，设备数量多，万元级起步 |
| 高频采集，秒级，千万级采集量  |  采集频率低，分钟级或小时级，万级采集量 |

--------------------------------------------------------------
![file](https://www.dgiotcloud.cn/wp-content/uploads/2023031609432654.png)
## 真实物理机模拟
### 120台电表秒级压测准备
将区域数控一体机的6个串口和主机用usb转485线连接，模拟电表集中器接入效果。然后在配置端向每一个集中器发送20条抄表命令。从而模拟出一台区域数控一体机连接120台电表的效果。
![file](http://www.dgiotcloud.cn/wp-content/uploads/2023031611553040.png)

在主机上打开6个虚拟电表软件,然后对应每一个串口连接上一台虚拟电表。虚拟电表按照下图配置:
![file](https://www.dgiotcloud.cn/wp-content/uploads/2023031608415096.png)

--------------------------------------------------------------

## 平台操作
1. 首先创建两个产品。一个是电表DTU，代表电表的网关设备；一个是电表，电表我们的电表设备。
   ![file](https://www.dgiotcloud.cn/wp-content/uploads/202303160857121.png)
2. 区域数控一体机上线后在组态界面对其串口参数进行调试，适配虚拟电表的串口协议。
   ![file](https://www.dgiotcloud.cn/wp-content/uploads/2023031609204456.png)
3. 手动创建设备，按下图格式手动创建20个电表到1个usb端口下。然后到电表DTU设备下为usb串口绑定子设备。（其中“&amp;”电表usb的串口标号，“##”代表几号电表。子网地址为设备编号）
   ![file](https://www.dgiotcloud.cn/wp-content/uploads/2023031609460862.png)

![file](https://www.dgiotcloud.cn/wp-content/uploads/2023031609454348.png)
4.主机上的电表收到指令后回复电表数据，平台可以看到所有数据。
![file](https://www.dgiotcloud.cn/wp-content/uploads/2023031609272785.png)

![file](https://www.dgiotcloud.cn/wp-content/uploads/2023031609273375.png)

#### 至此，电表压测已开始。

--------------------------------------------------------------
## 压测数据展示
用区域数控一体机对120个电表进行8秒一轮采集，一周时间稳定采集1千万多条数据。

![file](https://www.dgiotcloud.cn/wp-content/uploads/2023031611024194.png)

120台电表高频抄表下，服务器压力测试

![file](https://www.dgiotcloud.cn/wp-content/uploads/202303161110152.png)




*想了解更多 [dgiot](https://www.dgiotcloud.cn) 的具体细节，欢迎大家在 [GitHub](https://github.com/dgiot/dgiot) 上查看相关源代码。*


---
title: OPC-DA通道连接手册
sidebar_position: 4
---
# OPC-DA通道设备连接手册
### 1.KepServer配置与平台配置
1.确保KepServer能显示出PLC的点位数据。

**所需软件：Smart，KepServer**

利用网线将电脑与PLC的以太网口进行连接，可以以以太网连接调试、支持RS485串口连接也可以放在交换机下用ip进行调试。
【https://www.ad.siemens.com.cn/productportal/Prods/s7-200-smart-portal/200SmartTop/SmartSMS/035.html】
连接完以太网后，开启电源可以看见plc处于Run或者Stop状态。Link口常亮，Rx/Tx会不定期跳动闪烁说明电脑与PLC存在数据的传输。
通过网络高级设置获得电脑和PLC的IP并记录。选择左边任务栏内的模块并将CPU设置为当前PLC的CPU型号。勾选以太网端口。

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/Smart%E8%B0%83%E8%AF%95.png" />

在网卡搜索中查找到PLC的IP，选择对应IP后可点击闪烁指示灯检测是否连接上PLC。

<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/%E8%BF%9E%E6%8E%A5PLC.png" />

将程序下载到CPU上
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/CPU%E7%BC%96%E7%A8%8B.png" />
完成上述操作后，我们可以看见下侧导航栏显示已经连接上plc了。此时可以随意更改点位数据，读取锁定的数据值。
下一步进行对KepServer的数据配置，用于获取PLC内点位数据
首先创建通道
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/KepServer%E6%95%B0%E6%8D%AE%E9%85%8D%E7%BD%AE.png" />
在选择网卡时，可以选择默认也可以选择物理网卡即连接plc的网卡。接入单台设备通常选择默认，若在交换价下有多台设备则按实际情况选择。
最终效果如下图
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/%E6%95%88%E6%9E%9C%E5%9B%BE.png" />
接下来需要配置设备：
填好设备名称和产品型号后，需要绑定PLC地址。此处调用前面Smart配置时下侧plc的连接地址。
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/%E9%85%8D%E7%BD%AE%E8%AE%BE%E5%A4%87.png" />
点击下一步填写唯一地址，选用200,201,300,301中的一个。
设备详情图
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/%E8%AF%A6%E6%83%85%E5%9B%BE.png" />
操作完成上述步骤后，点入【运行时】——>【连接】。（该操作需要在每次对通道或者设备进行修改后执行，让配置重新加载更新）；点入【工具】——>【启动OPC Quick Cliens】。
启动后可以PLC内数据读取。还可以通过Smart修改地址数据，同时KepServer也会随时变更数据。

2.对平台进行配置
平台要有四个通道，依次是MQTT通道，TD存储通道、指令任务通道和TOPO组态通道。其中TOPO通道的名称必为“TOPO组态通道”。可以依据下图。
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/%E6%89%80%E9%9C%80%E9%80%9A%E9%81%93.png" />
完成通道后创建产品并进行物模型搭建（采集策略改为‘不采集（主动上报）’，协议类型为’DLINK’协议，数据标识处根据Kepserver中标识：通道.设备.item的顺序，也可以在连接dgiot_dtu后依据上报的报文来填写。在创建完要监测的点位后，重启通道。
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/%E9%80%9A%E9%81%93%E9%85%8D%E7%BD%AE.png" />

下一步配置DTU。
MQTT客户端通道：登录用户和登录密码设置为对应产品的ID和密钥。下面服务器地址改成对应服务器，端口选择1883.点击下面的‘扫描’，将会对本机的KerServer进行扫描，点击左侧设备树，多点几下勾选要变传的数据。勾选OPC_da的‘主动上报’。然后点击‘连接’建立本地与服务器的连接。
此时改变plc内点位数据，报文里会将数据上传。这里的格式可以复制下来用作物模型DLINK里面的数据标识。
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/dtu%E9%85%8D%E7%BD%AE%E8%BF%9E%E6%8E%A5.png" />
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/dtu%E9%85%8D%E7%BD%AE.png" />


### 2.平台查看
点击对应上线的设备，查看详情进入实时数据页面。此时因为数据是变传的所以可能暂无数据。需要通过修改plc点位数据使KepServer内数据变化，接着可在dtu处看见上传的报文。操作后会实时刷新数据完成监控。

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/%E5%B9%B3%E5%8F%B0%E6%95%B0%E6%8D%AE.png" />
过程图解
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/OPC%EF%BC%88da%EF%BC%89/%E7%A4%BA%E6%84%8F%E5%9B%BE.jpg" />


### 2.创建产品
1.创建产品

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081902061520.png" />

2.Modbus协议设备类型的产品

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208190207031.png" />

3.创建物模型对设备的基本参数做定义。

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E7%89%A9%E6%A8%A1%E5%9E%8B.png" />

这里需要区分一下，里面的采集策略不是采集频率。采集频率是通过创建的”指令任务通道“里的采集频率决定的。这边的采集策略是防止某设备连接出问题导致后续从机设备数据都不上来从而跳过坏的设备所决定的。

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E9%87%87%E9%9B%86%E9%A2%91%E7%8E%87%E5%92%8C%E7%AD%96%E7%95%A5%E5%8C%BA%E5%88%86.png" />

这是创建好的物模型：

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E7%89%A9%E6%A8%A1%E5%9E%8B%E6%80%BB%E8%A7%88.png" />

### **详细的点读取和块读取可参考以下链接：<a href="https://www.dgiotcloud.cn/3908/uigfui234/">详谈数据块采集配置</a>**

4.如何复制物模型实现快速复制

在产品管理-配置-物模型-查看物模型处

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911214582.png" />

将物模型代码复制粘贴即可

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911212924.png" />


复制完后可以点击编辑查看配置情况，dgiot针对modbusRTU多个数据的情况提供一次性全部读取的方案。
<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911203071.png" />

负责采集的物模型的下方数据来源与设备参数配置的一致
<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911210140.png" />

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911210523.png" />

## **产品添加通道后需对所用到的通道重启(启用/禁用)**
## **产品添加通道后需对所用到的通道重启(启用/禁用)**
## **产品添加通道后需对所用到的通道重启(启用/禁用)**

### 3.SHT20传感器设备连接的DTU注册成功

1.SHT20传感器设备连接的DTU注册成功


<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/202208191122335.png" />
2.SHT20传感器设备连接的DTU上线成功

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911224777.png" />

3.设备地图显示成功

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911225873.png" />

### 4.ModbusRTU数据采集成功

1.SHT20传感器实时数据

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911230950.png" />

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911231476.png" />

2.ModbusRTU历史数据

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911231874.png" />
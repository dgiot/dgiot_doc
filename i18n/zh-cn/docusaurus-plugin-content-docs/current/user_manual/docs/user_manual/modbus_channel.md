---
title: Modbus通道设备接入
sidebar_position: 1
---
# Modbus设备连接手册
### 1.创建采集通道
1.创建ModbusRTU采集通道。位置在通道管理-创建通道
<img width="100%" src="http://www.dgiotcloud.cn/wp-content/uploads/2022081812155529.png" />

2.选择Modbus采集通道并配置
<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081901583136.png" />

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911184451.png" />



4.通道日志查看

<img width="100%" src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/meter/8.png" />

<img width="100%" src="https://www.dgiotcloud.cn/wp-content/uploads/2022081911190426.png" />


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
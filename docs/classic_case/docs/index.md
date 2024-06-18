---
title: Modbus典型案例
sidebar_position: 1
---

## **产品选型**
#### **在购物网站搜索Modbus+传感器名称即可**

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E4%BA%AC%E4%B8%9C.png" />

------------------------------------------------------

## **一、太阳能光伏发电远程监测**
**DGIOT物联网平台赋能太阳能光伏发电汇控箱，定时采集汇控箱内电池状态和发电量管理，并内置控制功能。项目中底层采集设备和控制设备全部采用Modbus-RTU作为通讯协议，实现了户外太阳能发电量管理与监测。
结合DGIOT微信小程序，在线观看电池状态和发电量，以及工单系统进行统一维护。**

#### **项目详情参考博客：<a href="https://www.dgiotcloud.cn/1348/dgiot%e6%94%af%e6%8c%81%e5%a4%9a%e5%9e%8b%e5%a4%aa%e9%98%b3%e8%83%bd%e6%9d%bf%e8%bf%9c%e7%a8%8b%e7%ae%a1%e6%8e%a7%e5%92%8c%e5%a4%9a%e5%b1%8f%e8%bf%90%e7%bb%b4/">dgiot支持多型太阳能板远程管控和多屏运维</a>**

### **1.太阳能控制交互图**
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E5%90%8D%E5%9F%8E%E4%BA%A4%E4%BA%92.png" />

### **2.太阳能智慧箱组态大屏**
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E5%A4%AA%E9%98%B3%E8%83%BD%E7%BB%84%E6%80%81.png" />

### **3.太阳能套件物模型**
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E5%90%8D%E5%9F%8E%E7%89%A9%E6%A8%A1%E5%9E%8B.png" />

### **4.小程序协同管理**
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E5%90%8D%E5%9F%8E%E5%B0%8F%E7%A8%8B%E5%BA%8F.png" />


## **二、智慧农业**
**农业物联网是物联网技术在农业生产、经营、管理和服务中的具体应用。它运用传感器、射频识别等设备，采集环境信息，通过数据传输和处理，实现农业的自动化、智能化管理。
农业物联网能提升生产效率，优化作物生长环境，为现代农业发展提供了重要支持。通常监测的指标覆盖领域会比较多，从土壤的参数、大棚气体指标、虫情监测以及光照降水等等都需要全面监测起来。
因此应对这类离散型的多种类传感器，DGIOT支持多台从机公用485总线进行数据管理。**

**农业传感器大多采用Modbus-rtu格式的报文，节省DTU的数量。并通过”块采集法“减少4G流量消耗提升网络通讯质量。**

### **1.智慧农业多组态展示**
**如下图所示，dgiot物联网平台支持电视端、WEB端、PAD端以及手机APP端的数据查看。**
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E5%86%9C%E4%B8%9A%E5%A4%9A%E7%AB%AF%E5%B1%95%E7%A4%BA.png" />

### **2.智慧农业传感器套件**
**使用了二氧化碳温湿度传感器、光照度传感器、五针式土壤传感器。该套件可以搭配一体机做商务演示便携式套件**
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E5%86%9C%E4%B8%9A%E5%A5%97%E4%BB%B6.jpg" />

### **3.智慧农业多组态展示**
**下面是落地项目所接入的终端设备托管界面**
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E5%86%9C%E4%B8%9A%E8%AE%BE%E5%A4%87%E7%BB%88%E7%AB%AF.png" />

### **4.智慧农业产品物模型**
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/%E5%86%9C%E4%B8%9A%E4%BA%A7%E5%93%81%E7%89%A9%E6%A8%A1%E5%9E%8B.png" />

## 总结
基于Modbus-RTU协议的设备接入dgiot具有强大的兼容性，且接入步骤简单，一次配置即可接入海量设备进行托管。在智能化改造过程中，通常使用Modbus这类国际化的标准协议进行适配。因此DGiot的Modbus通道具备强大的拓展性，依托于平台的电信级稳定性和高并发可以实现海量且不同厂家设备的接入
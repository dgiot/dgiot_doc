---
title: 高配动环
sidebar_position: 2

---

# 高配动环

## 概述

### 产品介绍 

&emsp;&emsp;高低压配电室综合性监管是全部电能管理系统中的一个关键步骤。现阶段，高低压配电室一般都采用无人化，
按时巡查制度，那样既消耗财力物力也没法保证对高低压配电室的自然环境和安全性实时监控系统。而高低压配电室的自然环境平稳靠谱对变电器等机器设备的常规运转尤为重要。
高配动环实现以下功能:  

* 电路状态监控
* 配电室环境监测

### 产品概述及目标

&emsp;&emsp;监测高压配电室具体情况，完成了智能化高压开关柜运作监管、高压柜通电表明、电流强度等负荷运作监管
、母线槽温度测量检测、电缆线温度测量检测，完成配电室环境监测，降低高低压配电室粗放型管理方法造成成本费
过高，与此同时完成配电设备驱动力自然环境的远程管理。

## 高配机房
![高配机房](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/high_collar/7.jpg)

## MQTT协议获取信息
通过订阅TOPIC获取高配服务器上报信息  

```
$dg/thing/{productId}/{deviceAddr}/properties/reports
```

设备信息测试(部分内容)

```markdown
"id": "YG1",
          "desc": "烟感1",
          "quality": "0",
          "value": "0.000"

"id": "Tag1",
          "desc": "断路器状态",
          "quality": "1",
          "value": "1.000"
```

## dgiot平台展示效果
### 高配动环产品信息
#### 高配环境产品信息
![产品信息](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/high_collar/1.png)
#### 高配动力产品信息
![产品信息](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/high_collar/2.png)
### 高配动环设备信息
#### 高配环境设备信息
![设备信息](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/high_collar/3.png)
#### 高配动力设备信息
![设备信息](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/high_collar/4.png)
### 高配动环设备数据
#### 高配环境设备数据
![设备数据](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/high_collar/5.png)
#### 高配动力设备数据
![设备数据](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/doc_ylb/high_collar/6.png)

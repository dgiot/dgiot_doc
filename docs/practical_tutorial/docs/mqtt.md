---
title: Mqtt设备接入教程(适用v4.7.0后)
sidebar_position: 7
---

## 一、添加产品
### 1、登录dgiot-物联网开发平台
### 2、顶部导航栏选择产品，点击创建产品
**配置参数**
(1)依次填写名称，分组，选择分类和应用，节点，联网方式，确定回到上一页
![product_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_1.png)
(2) 选择刚刚创建的产品，点击配置
![product_2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_2.png)
(3)添加物模型
 - 自定义属性添加
![product_3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_3.png)
填写名称，标识符，取值范围，数据类型，单位
![product_4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_4.png)
 - 标准属性添加，选择符合产品的分类，点击添加
![product_5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_5.png)
 自动添加相关属性
 ![image.png](https://i.loli.net/2021/01/28/cdvbRT5pVXOjiYB.png)
 
(4)添加物接入
选择物接入，选择通道
Voltage sensor Channel 是接收mqtt数据进行处理的通道
![image.png](https://i.loli.net/2021/01/28/n5RrXZ1AjYVOSPh.png)
选择对应通道
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用
![image.png](https://i.loli.net/2021/01/28/NU7LufC5qkoK6Bw.png)

(5)添加物存储
选择物存储，选择通道
TD resource channel 是将数据存储到数据库的通道
![image.png](https://i.loli.net/2021/01/28/O75R1mwquMdahbE.png)
选择对应通道
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用
![image.png](https://i.loli.net/2021/01/28/2BuJdlyL3m1hpRq.png)

## 二、添加设备
### 1、顶部导航栏选择设备，点击设备添加；
(1)依次填写名称，设备编号，资产编号，型号，品牌，选择对应的产品等
![image.png](https://i.loli.net/2021/01/28/9Ow3CZBD7l6atxv.png)

## 一、创建通道
### 1、顶部导航栏选择通道，点击创建通道
(1)依次选择通道类型，所属应用，填写通道名称等
![channel_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/channel_1.png)

## 一、添加规则
### 1、顶部导航栏选择规则，点击添加
 - 选择客户端连接事件，筛选 Username 为 'ammeter' 的设备并获取连接信息：
```
SELECT clientid, connected_at FROM "$events/client_connected" WHERE username = 'ammeter'
```
 - 选择客户端断开事件，筛选 Username 为 'ammeter' 的设备并获取断开信息：	
```
SELECT clientid, disconnected_at FROM "$events/client_disconnected" WHERE username = 'ammeter'
```
 - 选择发布到 thing/9cc13a64f7/ammeter_001/post 主题的消息，并从消息内容中筛选出 "clientid","payload","topic" 字段：
```	
SELECT clientid, payload, topic FROM "thing/9cc13a64f7/ammeter_001/post"
```
![image.png](https://i.loli.net/2021/01/28/gemxZlFEnkMJLGz.png)
下拉添加响应动作，选择相应的通道添加，然后新建
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用
![product_5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_5.png)

## 一、设备连接
以mqttfx为例，下载地址http://ci.iotn2n.com/shuwa/oem/mqttfx.zip 
 1. 配置连接 
 - Broker Address:平台IP
 - Broker Port:默认1883
 - Client ID：填写设备编号
 - User Name Password：规则引擎配置的
 例如：
 ```
    SELECT clientid, connected_at FROM "$events/client_connected" WHERE username = 'ammeter'
 ```
![mqttfx_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/mqttfx_1.png)

 2. 发送消息
 - topic：填写设备发布topic
![mqttfx_3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/mqttfx_3.png)
 - 发送内容：设备所属产品的物模型 json串
![mqttfx_4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/mqttfx_4.png)
 - 发送 {"electric_fr":99}
![mqttfx_2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/mqttfx_2.png)

3. 通道查看日志
选择产品连接物接入通道，订阅日志
mqtt连接时打印日志
![mqttfx_6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/mqttfx_6.png)
mqtt发送消息时打印日志
![mqttfx_7.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/mqttfx_7.png)
mqtt断开时时打印日志
![mqttfx_8.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/mqttfx_8.png)





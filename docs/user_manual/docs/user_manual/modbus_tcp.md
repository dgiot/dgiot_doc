---
title: ModbusTcp通道设备接入
sidebar_position: 5
---
# ModbusTcp设备连接手册
### 1.创建采集通道
在通道管理-创建通道处选择MODBUSXC资源通道，填写名称，地址端口等，创建完启用通道
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/MODBUSXC%E9%80%9A%E9%81%93.png" />

### 2.创建产品
创建产品
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/MODBUSXC%E4%BA%A7%E5%93%81%E5%88%9B%E5%BB%BA.png" />

### 3.导入物模型

1.进入物模型页面，找到导入物模型选项


<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E5%AF%BC%E5%85%A5TCP%E5%8D%8F%E8%AE%AE.png" />
2.选择MODBUSX TCP协议，下载模板

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E4%B8%8B%E8%BD%BDTCP%E5%8D%8F%E8%AE%AE%E6%A8%A1%E7%89%88.png" />

下载完成后得到如下图所示模版

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/TCP%E5%8D%8F%E8%AE%AEcsv.png" />

3.使用记事本打开 选择文件另存为


<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E6%A8%A1%E7%89%88%E5%8F%A6%E5%AD%98%E4%B8%BA.png" />

保存类型选择所有文件，选中当前文件，编码选择UTF-8，点击保存

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/UTF-8%E4%BF%9D%E5%AD%98.png" />

导入成功
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E5%AF%BC%E5%85%A5%E6%88%90%E5%8A%9F%E5%9B%BE%E7%A4%BA.png" />

### 4.创建分组
进入分组管理，新增
选择创建的plc采集通道，所属部门，关联创建的产品

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E5%88%9B%E5%BB%BA%E5%88%86%E7%BB%84.png" />
如不绑定产品，可以把当前分组当成产品，可以给该分组配置采集信息，导入物模型，
用于采集
<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E4%B8%8D%E5%85%B3%E8%81%94%E4%BA%A7%E5%93%81%E7%9A%84%E5%88%86%E7%BB%84%E9%85%8D%E7%BD%AE.png" />
启用分组，如果没有绑定产品，则默认当前分组为产品，进行采集
如果绑定了产品，会启动分组下绑定的所有产品
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E5%88%86%E7%BB%84%E5%9B%BE%E7%A4%BA.png" />
绑定了产品，则给子产品配置采集信息

<img width="100%" src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E7%BB%91%E5%AE%9A%E4%BA%A7%E5%93%81%E7%9A%84%E5%88%86%E7%BB%84%E9%85%8D%E7%BD%AE.png" />
启用分组下产品，该产品进行采集
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E5%90%AF%E7%94%A8%E4%BA%A7%E5%93%81.png" />

### 5.查看数据
自动创建对应设备
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E5%AF%B9%E5%BA%94%E8%AE%BE%E5%A4%87.png" />
采集到设备的实时数据
<img src="https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot_FC/%E5%AE%9E%E6%97%B6%E6%9F%A5%E7%9C%8B%E8%AE%BE%E5%A4%87%E6%95%B0%E6%8D%AE.png" />
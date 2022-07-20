---
title: 证书安装
sidebar_position: 9
---

## TLS证书
1，一键部署
[参考部署详情](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/certificate_of_installation)

2，在服务器上可以找到TSL证书如下：
![找到TSL证书](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/certificate1.png)

3，然后将证书烧入设备
mqtt.fx 1.5验证
## tls配置
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/certificate2.png)
## mqtts连接，订阅和发布测试
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/certificate3.png)


注：
+ 使用证书后，设备上报后的端口号为8883.
+ 设备连接时关闭“SSL Secure”
+ 重启通道
+ 域名证书放需要到执行命令的同一目录下

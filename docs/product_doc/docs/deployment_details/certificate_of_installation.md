---
title: 证书安装
sidebar_position: 9
---

##TLS证书
1，一键部署
[参考一键部署](https://gitee.com/dgiiot/dgiot/wikis/产品手册/产品简介/系统部署/一键部署)

2，在服务器上可以找到TSL证书如下：
![找到TSL证书](https://images.gitee.com/uploads/images/2022/0108/165748_9e7780bb_10296448.png "屏幕截图.png")

3，然后将证书烧入设备
mqtt.fx 1.5验证
# tls配置
![输入图片说明](https://images.gitee.com/uploads/images/2021/1227/094010_671cc01e_8820282.png "屏幕截图.png")
# mqtts连接，订阅和发布测试
![输入图片说明](https://images.gitee.com/uploads/images/2021/1227/094148_a2e23230_8820282.png "屏幕截图.png")


注：
+ 使用证书后，设备上报后的端口号为8883.
+ 设备连接时关闭“SSL Secure”
+ 重启通道
+ 域名证书放需要到执行命令的同一目录下

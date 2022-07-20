---
title: 华为云部署
sidebar_position: 5
---

为了节省开发者和实施工程师的时间，降低部署难度，本文提供了一套基于linux系统的一键式部署方式，以便快速交付，提升学习和商用部署的效率。
## 安装部署
#### 1.服务器
[华为云地址](https://www.huaweicloud.com/?locale=zh-cn)

云服务器购买时选择如下操作系统：centos 7.6/7.9
可以选择微信支付录购买云服务器，**安装时请设置登录密码**
![hwyun1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun1.png)

由于一键式部署要求纯操作系统环境，无需安装其他例如Nginx/Tengine+MySQL等软件，否则易和一键式部署冲突，如果已有相关应用，请联系微信群技术客服单独处理

支付完成之后,会自动生成云服务器实例
![hwyun2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun2.png)
点击云服务器实例，选择远程登录入口，**如果安装时忘记设置密码可以在下面页面重置一下密码** 
![hwyun3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun3.png)

#### 2.一键部署脚本获取路径： https://gitee.com/dgiiot/dgiot 进入DG-IOT开源物联网平台

#### 3.页面下滑至一键部署处，复制如下代码
```
wget -qO dgiot_install.sh https://gitee.com/dgiiot/dgiot/raw/master/dgiot_install.sh  && sh dgiot_install.sh
```
-d （域名  可选配置，正式商用建议配置域名，默认使用云服务器公网IP地址访问）
-s （版本号 可选配置，指定版本号 例：-s dgiot_156，默认是最新版本）

[版本列表链接](https://gitee.com/dgiiot/dgiot/wikis/%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2/%E7%89%88%E6%9C%AC%E5%88%97%E8%A1%A8)

#### 4.登录华为云服务器，进入页面，将复制的代码粘贴后回车，等待脚本安装，此时间大约需要30分钟，请耐心等待
![hwyun4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun4.png)

#### 5.当出现图中所示，dgiot single deploy end显示后, 安装部署完成
![hwyun5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun5.png)
安装过程中要敲几次回车，防止网页会话超时
![hwyun6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun6.png)

#### 6.防火墙
系统需要开启端口进行数据传输，云服务默认没有开启对应端口，需要在防火墙上添加安全规则，操作如下
需要开启的端口列表如下：

| 端口名 | 连接地址 | 说明 |
|-----|----|----|
|  80   |  http://prod.iotn2n.com/  |  dgiot http连接  |
|  443  |  https://prod.iotn2n.com/ |  dgiot https证书连接  |
|  1883   | tcp://prod.iotn2n.com:1883 |   mqtt tcp连接 |
|  8883| tcp://prod.iotn2n.com:8883    |   mqtt tcp 证书连接 |
|  8083  | ws://prod.iotn2n.com:8083/mqtt   |  mqtt websocket连接  |
|  8084  |  wss://prod.iotn2n.com:8084/mqtt  | mqttwebsocke证书连接   |

#### 7.部署完成后，打开浏览器，输入域名/IP地址即可访问物联网平台，稍等片刻
![hwyun7.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun7.png)
第一次打开页面稍慢
![hwyun8.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun8.png)

页面打开后需要输入用户名和秘密，默认用户名和密码均为：dgiot_admin
![hwyun10.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun10.png)

登录后出现如下页面，恭喜你一键式部署成功，可以使用DG_IOT平台进行对应操作


![hwyun9.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/hwyun/hwyun9.png)

最后欢迎随时试用 dgiot在华为云的服务器实例，也欢迎自己尝试接入设备（总计投入成本，39元1年和30分钟时间） 
http://122.112.252.58//#/index
+ 运维人员
账号：dgiot_admin
密码：dgiot_admin
+ 开发人员
账号：dgiot_dev
密码：dgiot_dev



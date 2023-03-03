---
title: 腾讯云轻量型服务器部署
sidebar_position: 8
---

为了节省开发者和实施工程师的时间，降低部署难度，本文提供了一套基于linux系统的一键式部署方式，以便快速交付，提升学习和商用部署的效率。
## 安装部署

#### 1.服务器（本案例采用腾讯云服务器作为示例）
[腾讯云地址](https://cloud.tencent.com/)

云服务器购买时选择如下操作系统：centos 7.6/7.9

由于一键式部署要求纯操作系统环境，无需安装其他例如Nginx/Tengine+MySQL等软件，否则易和一键式部署冲突，如果已有相关应用，请联系微信群技术客服单独处理

#### 2.一键部署脚本获取路径： [脚本获取](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/system_deployment)

#### 3.页面下滑至一键部署处，复制如下代码
```
wget -qO dgiot_install.sh https://gitee.com/dgiiot/dgiot/raw/master/dgiot_install.sh  && sh dgiot_install.sh
```
-d （域名  可选配置，正式商用建议配置域名，默认使用云服务器公网IP地址访问）
-s （版本号 可选配置，指定版本号 例：-s dgiot_156，默认是最新版本）

[版本列表链接](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/version_releases)

#### 4.用户购买了云服务后，登录进入服务器实例页面，以腾讯云服务器为例：
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tencent_cloud_lightweight1.png)


#### 5.进入该图页面，密钥为购买服务器时装系统时创建，选择密钥后，点击VNC登录下面的登录界面
注意：建议用putty或者其他客户端工具，网页端容易自动断开连接（connection closed）
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tencent_cloud_lightweight2.png)    

#### 6.进入页面，输入“root”后回车，出现“Password:”界面后，输入密码后回车
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tencent_cloud_lightweight3.png)
将复制的代码粘贴后回车，等待脚本安装，此时间大约需要30分钟，请耐心等待
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tencent_cloud_lightweight4.png)
#### 7.当出现图中所示，dgiot single deploy end显示后, 安装部署完成
![6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/bushu/6.png)

#### 8.防火墙

系统需要开启端口进行数据传输，云服务默认没有开启对应端口，需要在防火墙上添加安全规则，操作如下（以腾讯云为例）
需要开启的端口列表如下：

| 端口名 | 连接地址 | 说明 |
|-----|----|----|
|  80   |  http://prod.dgiotcloud.cn/  |  dgiot http连接  |
|  443  |  https://prod.dgiotcloud.cn/ |  dgiot https证书连接  |
|  1883   | tcp://prod.dgiotcloud.cn:1883 |   mqtt tcp连接 |
|  8883| tcp://prod.dgiotcloud.cn:8883    |   mqtt tcp 证书连接 |
|  8083  | ws://prod.dgiotcloud.cn:8083/mqtt   |  mqtt websocket连接  |
|  8084  |  wss://prod.dgiotcloud.cn:8084/mqtt  | mqtt websocke证书连接   |


点击防火墙按钮进入防火墙规则配置页面 
![点击进入防火墙](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tencent_cloud_lightweight5.png)

添加防火墙端口
![设置防火墙端口](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tencent_cloud_lightweight6.png)

#### 9.部署完成后，打开浏览器，输入域名/IP地址即可访问物联网平台 
页面打开后需要输入用户名和秘密，默认用户名和密码均为：dgiot_admin
![登录页面](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tencent_cloud_lightweight7.png)

登录后出现如下页面，恭喜你一键式部署成功，可以使用DG_IOT平台进行对应操作
![成功页面](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tencent_cloud_lightweight8.png)
---
title: 百度云部署
sidebar_position: 2
---

为了节省开发者和实施工程师的时间，降低部署难度，本文提供了一套基于linux系统的一键式部署方式，以便快速交付，提升学习和商用部署的效率。
## 安装部署
#### 1.服务器
[百度云地址](https://cloud.baidu.com/)

云服务器购买时选择如下操作系统：centos 7.6/7.9
可以选择支付宝购买云服务器，**安装时请设置登录密码**
![baiduyun1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/baiduyun/baiduyun1.png)
由于一键式部署要求纯操作系统环境，无需安装其他例如Nginx/Tengine+MySQL等软件，否则易和一键式部署冲突，如果已有相关应用，请联系微信群技术客服单独处理

支付完成之后,会自动生成云服务器实例
![baiduyun2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/baiduyun/baiduyun2.png)


#### 2.一键部署脚本获取路径： [脚本获取](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/system_deployment)

#### 3.页面下滑至一键部署处，复制如下代码
```
wget -qO dgiot_install.sh https://gitee.com/dgiiot/dgiot/raw/master/dgiot_install.sh  && sh dgiot_install.sh
```
-d （域名  可选配置，正式商用建议配置域名，默认使用云服务器公网IP地址访问）
-s （版本号 可选配置，指定版本号 例：-s dgiot_156，默认是最新版本）

[版本列表链接](https://doc.dgiotcloud.cn/docs/product_doc/docs/deployment_details/version_releases)

#### 4.登录百度云服务器，进入页面，将复制的代码粘贴后回车，等待脚本安装，此时间大约需要30分钟，请耐心等待
![baiduyun3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/baiduyun/baiduyun3.png)

#### 5.当出现图中所示，dgiot single deploy end显示后, 安装部署完成
![baiduyun4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/baiduyun/baiduyun4.png)
#### 6.防火墙
百度轻量级应用防火墙全开，不需要设置

#### 7.部署完成后，打开浏览器，输入域名/IP地址即可访问物联网平台 
页面打开后需要输入用户名和秘密，默认用户名和密码均为：dgiot_admin
登录后出现如下页面，恭喜你一键式部署成功，可以使用DG_IOT平台进行对应操作
![baiduyun5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/baiduyun/baiduyun5.png)

登录成功后可以看到设备管理页面
![baiduyun6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/baiduyun/baiduyun6.png)

最后欢迎随时试用 dgiot在百度云的服务器实例，也欢迎自己尝试接入设备（总计投入成本，73元1年和30分钟时间） 
http://180.76.237.108/#/index
+ 运维人员
账号：dgiot_admin
密码：dgiot_admin
+ 开发人员
账号：dgiot_dev
密码：dgiot_dev



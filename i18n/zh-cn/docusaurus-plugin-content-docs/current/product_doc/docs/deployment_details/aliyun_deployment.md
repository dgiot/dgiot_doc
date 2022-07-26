---
title: 阿里云部署
sidebar_position: 3
---

为了节省开发者和实施工程师的时间，降低部署难度，本文提供了一套基于linux系统的一键式部署方式，以便快速交付，提升学习和商用部署的效率。
## 安装部署
#### 1.服务器
[阿里云地址](https://www.aliyun.com/)

云服务器购买时选择如下操作系统：centos 7.6/7.9
可以选择支付宝登录购买云服务器，**安装时请设置登录密码**
![操作系统选择示例](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/aliyun/aliyun1.png)

由于一键式部署要求纯操作系统环境，无需安装其他例如Nginx/Tengine+MySQL等软件，否则易和一键式部署冲突，如果已有相关应用，请联系微信群技术客服单独处理

支付完成之后,会自动生成云服务器实例
![aliyun2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/aliyun/aliyun2.png)
点击云服务器实例，选择远程登录入口，**如果安装时忘记设置密码可以在下面页面重置一下密码** 
![aliyun3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/aliyun/aliyun3.png)

#### 2.一键部署脚本获取路径： https://doc.dgiotcloud.cn/docs/product_doc/ 进入dgiot开源物联网平台

#### 3.页面下滑至一键部署处，复制如下代码
```
wget -qO dgiot_install.sh https://gitee.com/dgiiot/dgiot/raw/master/dgiot_install.sh  && sh dgiot_install.sh
```
-d （域名  可选配置，正式商用建议配置域名，默认使用云服务器公网IP地址访问）
-s （版本号 可选配置，指定版本号 例：-s dgiot_156，默认是最新版本）

[版本列表链接](https://doc.dgiotcloud.cn/docs/product_doc/)

#### 4.登录阿里云服务器，进入页面，将复制的代码粘贴后回车，等待脚本安装，此时间大约需要30分钟，请耐心等待
![aliyun4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/aliyun/aliyun4.png)

#### 5.当出现图中所示，dgiot single deploy end显示后, 安装部署完成
![aliyun5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/aliyun/aliyun5.png)

#### 6.防火墙

详见[端口设置-防火墙]![aliyun6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/aliyun/aliyun6.png)
#### 7.部署完成后，打开浏览器，输入域名/IP地址即可访问物联网平台 
页面打开后需要输入用户名和秘密，默认用户名和密码均为：dgiot_admin
![登录页面](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/aliyun.png)

登录后出现如下页面，恭喜你一键式部署成功，可以使用DG_IOT平台进行对应操作
![aliyun7.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/aliyun/aliyun7.png)
![aliyun8.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/aliyun/aliyun8.png)
![aliyun9.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/wiki/aliyun/aliyun9.png)

最后欢迎随时试用 dgiot在阿里云的服务器实例，也欢迎自己尝试接入设备（总计投入成本，99元1年和30分钟时间） 
http://39.104.86.18/#/index
+ 运维人员
账号：dgiot_admin
密码：dgiot_admin
+ 开发人员
账号：dgiot_dev
密码：dgiot_dev



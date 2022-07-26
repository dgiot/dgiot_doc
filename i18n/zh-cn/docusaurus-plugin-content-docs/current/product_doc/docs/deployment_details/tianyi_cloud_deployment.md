---
title: 天翼云部署
sidebar_position: 6
---

# 天翼云部署
   为了节省开发者和实施工程师的时间，降低部署难度，本文提供了一套基于linux系统的一键式部署方式及问题解答，以便快速交付，提升学习和商用部署的效率。
## 安装部署
### 1.服务器
[中国电信天翼云](https://www.ctyun.cn/)（CTYUN.CN）
#### 1.1 DGIOT用户均可通过DGIOT开源平台指定天翼云战略合作伙伴（中国电信5G创新实验室•甬畅实验室）获取天翼云主机免费使用1个月体验资格，体验免费，后可申请后付费。
#### 1.2 获取甬畅实验室提供的天翼云主机体验账号后，体验默认配置为1核1G云主机一台、弹性IP一个，系统盘40G，操作系统：centos 7.6
#### 1.3 如已经有天翼云主机，由于一键式部署要求纯操作系统环境，无需安装其他例如Nginx/Tengine+MySQL等软件，否则易和一键式部署冲突，如果已有相关应用，请联系微信群技术客服单独处理
### 2. 一键部署脚本获取路径： https://doc.dgiotcloud.cn/docs/product_doc/ 进入dgiot开源物联网平台
### 3. 页面下滑至一键部署处，复制如下代码
```
wget -qO dgiot_install.sh https://gitee.com/dgiiot/dgiot/raw/master/dgiot_install.sh  && sh dgiot_install.sh
```
-d （域名  可选配置，正式商用建议配置域名，默认使用云服务器公网IP地址访问）
-s （版本号 可选配置，指定版本号 例：-s dgiot_156，默认是最新版本）

[版本列表链接](https://doc.dgiotcloud.cn/docs/product_doc/)

### 4. 登录天翼云控制台，进入远程登录页面，将复制的代码粘贴后回车，等待脚本安装，此时间大约需要10-20分钟，请耐心等待
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tianyi1.png)
### 5. 当出现图中所示，dgiot single deploy end显示后, 安装部署完成
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tianyi2.png)
### 6. 更改安全组开放端口
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tianyi3.png)
如天翼云域名未备案默认不开放80端口，建议添加NGINX WEB访问端口8088(同时需修改/data/dgiot/nginx/conf/nginx.conf 中的80端口为8088端口)。其他因DGIOT端口需要开放TCP如下端口
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tianyi4.png)
### 7. 部署完成后，打开浏览器，输入域名/IP地址（或IP地址:8088）即可访问物联网平台
页面打开后需要输入用户名和秘密，默认用户名和密码均为：dgiot_admin
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tianyi5.png)
登录后出现如下页面，恭喜，一键式部署成功，可以使用DG_IOT平台进行对应操作
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/tianyi6.png)
### 8. 安装问题答疑
#### 8.1 如一键部署执行到脚本 configure postgresql的时候就跳转到系统命令行无法继续
通过执行该命令即可解决：
```
yum install glibc-headers
```
出现选择输入y
重新执行dgiot一键部署wget命令或者直接在当前用户目录下执行sh dgiot_install.sh命令即可。

#### 8.2 如一键部署执行到脚本systemctl start dgiot_pg_writer后直接跳转到系统命令行无法继续

请回到第6步检查下安全组添加7432端口。
重新执行dgiot一键部署命令或者直接在当前用户目录下执行sh dgiot_install.sh命令即可。

#### 8.3 完成安装后在浏览器打开访问访问

天翼云默认80端口需要网站备案后才能访问，所以修改下/data/dgiot/nginx/conf 下面的ngnix.conf修改web端口80为其他端口号例如8088，即可在浏览器输入IP地址:8088 即可。

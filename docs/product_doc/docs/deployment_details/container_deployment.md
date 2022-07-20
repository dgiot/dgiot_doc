---
title: 容器部署
sidebar_position: 11
---

# docker部署
## centos7.6环境下部署流程
### 环境准备
#### 安装docker
```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
发布地址:https://hub.docker.com/r/dgiot/dgiot
#### 启动并加入开机启动
```shell
sudo systemctl start docker
sudo systemctl enable docker
```
#### 设置镜像源(阿里云）
```shell
 sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

#### 拉取dgiot镜像（4.4.5）
```shell
docker pull dgiot/dgiot:4.4.5
```
![输入图片说明](https://images.gitee.com/uploads/images/2022/0408/112818_e51b92bf_10541338.png "屏幕截图.png")

#### 运行dgiot镜像（4.4.5）
```shell
docker run -it --privileged  9b8218425745
```

##### 相关连接
 - [CentOS Docker 安装](https://www.runoob.com/docker/centos-docker-install.html)
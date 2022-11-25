---
title: 容器部署 sidebar_position: 11
---

# docker编译

#### docker编译

```shell
docker build --rm --tag dgiot/dgiot:4.7.0 .
```

docker启动

```shell
docker run -itd --privileged -p 80:8080 --hostname dgiot dgiot/dgiot:4.7.0 init
```

# 容器部署

## centos7.6环境下部署流程

### 环境准备

#### 安装docker

```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

发布地址:https://hub.docker.com/r/dgiot

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

#### 拉取dgiot镜像（4.7.1）

#### dgiot有三个镜像

#### 创建 docker 本地局域网络

```shell
docker network create --subnet=173.173.0.0/24  docker-dgiot
```

|  版本 | 功能 |  
|------|----------|
| dgiot/dgiot_dashboard:4.7.1   |     dgiot_dashboard  | 
| dgiot/dgiot_edge:4.7.1        |     dgiot_edge微服务  | 
| dgiot/dgiot_db:4.7.1          |     dgiot_db数据库    | 

```shell
docker pull dgiot/dgiot_dashboard:4.7.1
docker pull dgiot/dgiot_edge:4.7.1   
docker pull dgiot/dgiot_db:4.7.1  
```
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/container.png)

####镜像运行顺序 dgiot_dashboard > dgiot_db > dgiot_edge
#### 运行dgiot_dashboard镜像（4.7.1）
```shell
docker run --env DOMAIN_NAME={输入你的域名} -itd --net docker-dgiot --ip 173.173.0.10 --privileged -p 80:80 -p 1337:1337 --hostname dgiot_dashboard dgiot/dgiot_dashboard:4.7.1 init
```
#### 运行dgiot_db镜像（4.7.1）
```shell
docker run --env IS_INTRANET=false -itd --net docker-dgiot --ip 173.173.0.30 --privileged --hostname dgiot_db dgiot/dgiot_db:4.7.1 init
```
#### 运行dgiot_edge镜像（4.7.1）
```shell
docker run --env IS_INTRANET=false --env DOMAIN_NAME={输入你的域名} -itd --net docker-dgiot --ip 173.173.0.20 --privileged -p 1883:1883 -p 18083:18083 -p 8083-8183:8083-8183 --hostname dgiot dgiot/dgiot_edge:4.7.1 init
```
运行 
```shell
docker ps
```
启动成功
![输入图片说明](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_web/image_deployment/container1.png)

进入容器命令
```shell
docker exec -it <CONTAINER ID> bash
```

##### 相关连接

- [CentOS Docker 安装](https://www.runoob.com/docker/centos-docker-install.html)
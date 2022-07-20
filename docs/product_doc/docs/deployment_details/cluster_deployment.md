---
title: 集群部署
sidebar_position: 14
---
##dgiot集群部署
## 基础环境部署

### 修改主机`hosts`

```
vim /etc/hosts
```

输入“i”进入编辑模式 

```
主节点ip data1
节点ip data2
```

按“ESC" :wq 保存退出。

### 修改主机`hostname`

```
vim /etc/hostname
```
输入“i”进入编辑模式

```
data1#这里以data1为例，data2操作相同
```

### 重启

```
reboot
```

### 检查网络是否能够连通

```
ping data1#这里以data1为例，data2操作相同
```

### 修改taos配置文件

配置文件的路径 `/etc/taos/taos.cfg`, 一定要修改的参数是`firstEp` 和`fqdn`.

```
vi /etc/taos/taos.cfg
```

输入“i”进入编辑模式 

```
// firstEp 是每个节点启动后连接的第一个节点，每个节点这行配置相同
firstEp              data1:6030
// 配置本节点的FQDN，如果本机只有一个hostname, 无需配置
fqdn                  data1
```

按“ESC" :wq 保存退出。

### 备份清除data文件

```
mv data data.bak
```

### 创建data文件

```
mkdir data
```

### 关闭防火墙

```
systemctl stop firewalld
```

### 查看防火墙运行状态，检查是否关闭防火墙

```
systemctl status firewalld
```

### 主节点首先启动

```
systemctl start taosd
```
### 查看节点状态，检查taosd是否成功启动

```
systemctl status taosd
```

### 进入taos服务
```
[root@data1 taos]# taos
```
### 查看现存节点
```
taos> show dnodes;
```
可以看到
```
   id   |           end_point            | vnodes | cores  |   status   | role  |       create_time       |      offline reason      |
======================================================================================================================================
      1 | data1:6030                     |      1 |      1 | ready      | any   | 2022-03-21 17:25:40.610 |                          |
```
### 动态加入后续节点

第一个节点启动成功后,我们就可以加入其它的节点到集群中去了
+ 首先启动此节点的taosd服务，检查服务是否启动成功
```
systemctl start taosd
systemctl status taosd
```
启动成功后进入taos服务
```
[root@data1 taos]# taos
```
查看当前集群状态
```
taos> show dnodes;
   id   |           end_point            | vnodes | cores  |   status   | role  |       create_time       |      offline reason      |
======================================================================================================================================
      1 | data1:6030                     |      1 |      1 | ready      | any   | 2022-03-21 17:25:40.610 |                          |
```
添加当前节点到集群中
```
taos> create dnode "data2:6030";
```
查看集群是否添加成功，出现如下所示即可成功
```
show dnodes;
   id   |           end_point            | vnodes | cores  |   status   | role  |       create_time       |      offline reason      |
======================================================================================================================================
      1 | data1:6030                     |      0 |      1 | ready      | any   | 2022-03-21 17:25:40.610 |                          |
      2 | data2:6030                     |      1 |      1 | ready      | any   | 2022-03-21 17:35:37.303 |                          |
```
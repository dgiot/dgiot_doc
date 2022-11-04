---
title: 通道化微服务
sidebar_position: 3
---

 基于Erlang/OTP平台基础上，dgiot通道对Actor模型做了如下扩展
+ 让Actor模型在supervisor管控下运行更加稳健
+ 对Actor进行一系列运维管控机制保证通道更可靠
+ 扩展出proctol/bridge/backend/feature四种类型
+ 同时在路由层引入规则引擎，让消息路由使用更加灵活
+ 在state/Behavior的基础上扩展gRPC机制，支持其他语言应用开发
```
Actor由状态(state)、行为(Behavior)和邮箱(mailBox)三部分组成
状态(state)：Actor中的状态指的是Actor对象的变量信息，状态由Actor自己管理，避免了并发环境下的锁和内存原子性等问题
行为(Behavior)：行为指定的是Actor中计算逻辑，通过Actor接收到消息来改变Actor的状态
邮箱(mailBox)：邮箱是Actor和Actor之间的通信桥梁，邮箱内部通过FIFO消息队列来存储发送方Actor消息，接受方Actor从邮箱队列中获取消息
```

![dgiot通道管理交互图.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/dgiot/channel/DG-IoT%E9%80%9A%E9%81%93%E7%AE%A1%E7%90%86%E4%BA%A4%E4%BA%92%E5%9B%BE.png)


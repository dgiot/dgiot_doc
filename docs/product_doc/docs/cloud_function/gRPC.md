---
title: gRPC
sidebar_position: 1
---

## 简述

- 基于gRPC进行跨服务、跨编程语言的能力扩展
- 可以将远程微服务的能力返回给dgiot

## 架构

```
dgiot                                      Third-party Runtime
+========================+                 +========+==========+
|    ExHook              |                 |        |          |
|   +----------------+   |      gRPC       | gRPC   |  User's  |
|   |   gPRC Client  | ------------------> | Server |  Codes   |
|   +----------------+   |    (HTTP/2)     |        |          |
|                        |                 |        |          |
+========================+                 +========+==========+
```

## 使用

### gRPC service

See: `priv/protos/exhook.proto`

## gRPC推荐框架

See: https://github.com/grpc-ecosystem/awesome-grpc

## 参考

- [grpcbox](https://github.com/tsloughter/grpcbox)

## 扩展管理
用户可根据需求新增API接口并进行在线设计和编码.
![拓展编程.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/function/exproto/%E6%8B%93%E5%B1%95%E7%BC%96%E7%A8%8B.png)
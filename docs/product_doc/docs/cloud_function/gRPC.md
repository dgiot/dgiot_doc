---
title: gRPC
sidebar_position: 1
---

## ����

- ����gRPC���п���񡢿������Ե�������չ
- ���Խ�Զ��΢������������ظ�dgiot

## �ܹ�

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

## ʹ��

### gRPC service

See: `priv/protos/exhook.proto`

## gRPC�Ƽ����

See: https://github.com/grpc-ecosystem/awesome-grpc

## �ο�

- [grpcbox](https://github.com/tsloughter/grpcbox)

## ��չ����
�û��ɸ�����������API�ӿڲ�����������ƺͱ���.
![��չ���.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/function/exproto/%E6%8B%93%E5%B1%95%E7%BC%96%E7%A8%8B.png)
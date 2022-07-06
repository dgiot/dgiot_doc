
# dtu与平台的连接

我们通过平台给传感器发布指令，并上传传感器的数据都离不开一个很重要的中介——dtu。接下来，我们来了解一下，dtu是如何与平台连接的。（以有人dtu为例）。

进入dtu的设置的方式有两种：区别在于需不需要网线。

+ 需要网线

通过网线将dtu与电脑连接。打开电脑浏览器，输入127.0.10.1即可进入dtu的设置界面。

+ 不需要网线

不需要网线时，我们只需要知道其入网的ip值，在浏览器中搜索即可。

![dtu_edit.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/dtu_edit.png)

在```串口及网络设置```里面更改远程网络参数设置里面的服务器地址。这个地址就是我们平台的服务器地址。

![dtu_link.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/dtu_link.png)

如果想设置dtu连入的wifi，可进入```以太网功能设置```界面，设置好wifi的帐号和密码。dtu就会连入这个wifi。

设置好后，在```模块管理```里点击```重启```即可。
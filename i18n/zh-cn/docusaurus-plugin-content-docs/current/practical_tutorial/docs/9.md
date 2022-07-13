---
title: 摄像头接入
sidebar_position: 10
---

#### 1.打开cmd命令窗口，输入ping 192.168.1.1 --- 100，观察是否有回复,当ping到一定位置，输入ARP -A，观察ip地址与mac地址。
![z.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/z.png)
#### 2.观察摄像头上mac地址，对应到ip地址，下载软件VLC midea player。
[vlc-3.0.16-win64.exe](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/vlc-3.0.16-win64.exe)
#### 3.安装好打开VLC,点击媒体，点击打开网络串流，复制粘贴rtsp://admin:shuwafly2020@192.168.1.7:554/cam/realmonitor?channel=1&subtype=0，点击播放即可显示图像。
![x.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/x.png)
![c.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/c.png)
### 推流教程：
#### 1.下载解压[ffmpeg.rar](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/ffmpeg.rar)，打开文件夹到ffmpeg
![1230.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/1230.png)
#### 2.接下来在图中位置输入CMD点击回车
![0123.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/0123.png)
#### 3.弹出命令框
![d7a72f6b-da80-a652-ce30-3b7fac72c790.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/d7a72f6b-da80-a652-ce30-3b7fac72c790.png)
#### 4.进入bin文件夹中，输入ffmpeg -i  "rtsp://admin:shuwafly2020@192.168.1.7:554（摄像头地址）"  -r 15  -s 640*480 -an -vcodec h264 -max_delay 100 -g 5 -b 7000 -f flv  "rtmp://153239.livepush.myqcloud.com/live/dfghgtf?txSecret=572220ccc127fdaf866044ae3118efef&txTime=6163B56F（推流地址）"
![fdc38822-603a-97ba-0b3b-20bb648e368f.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/fdc38822-603a-97ba-0b3b-20bb648e368f.png)
#### 5.复制域名网页地址在平台上即可
![81e17434-36b0-f9d9-b4d7-4befd6b66f88.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/manual/cloud/shexiangji/81e17434-36b0-f9d9-b4d7-4befd6b66f88.png)



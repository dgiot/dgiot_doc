---
title: 实时消息
sidebar_position: 3
---

# 前端消息路由框架
 dgiot-mqtt2eventbus

![DG-IoT前端消息路由.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/msg_route/DG-IoT%E5%89%8D%E7%AB%AF%E6%B6%88%E6%81%AF%E8%B7%AF%E7%94%B1.png)

+ 实现现一个前端用户只需要一个mqtt连接
+ 页面业务与网络通讯(mqtt)去耦合
+ 页面与页面之间通讯走eventbus/vuex,让页面组件之间去耦合


# dgiot-mqtt-dashboard
## Installation

```bash
yarn add @dgiot/dgiot-mqtt-dashboard
```

## Quick Start

### [main.js](https://github.com/dgiot/dgiot-Component-example/blob/master/src/main.js)
```diff
  import Vue from 'vue'
  import App from './App.vue'
  > import dgiotStore from '@dgiot/dgiot-mqtt-dashboard/src/store'
  > import dgiotBus from '@dgiot/dgiot-mqtt-dashboard/src/utils/bus'
  > import dgiotMixin from '@dgiot/dgiot-mqtt-dashboard/src/mixins/mqtt'
  Vue.use(dgiotBus)
  Vue.mixin(dgiotMixin)
  Vue.config.productionTip = false
  new Vue({
    > dgiotStore,
    render: h => h(App),
  }).$mount('#app')
```

### [examples.vue](https://github.com/dgiot/dgiot-Component-example/blob/master/src/App.vue)
  ```diff
  <template>
    <div id="app">
      +<dgiot-mqtt-dashboard />
    </div>
  </template>

  <script>
  +import dgiotMqttDashboard from '@dgiot/dgiot-mqtt-dashboard'
  export default {
    name: 'App',
    components: {
      +dgiotMqttDashboard
    },
    mounted() {
      console.log(this.Store)
    },
  }
  </script>
  ```
### Online examples

[![Edit gmullerb-react-reducer-provider](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/dgiot/dgiot-mqtt-dashboard)


# 微服务

![ddd](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E5%9B%BE_02.png)

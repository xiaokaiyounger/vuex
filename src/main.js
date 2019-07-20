import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入状态管理store对象
import store from './plugins/store'

import './cai/assignObj'

new Vue({
  render: h => h(App),
  store,//注册到根
}).$mount('#app')

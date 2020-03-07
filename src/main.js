import Vue from 'vue'
import App from './App.vue'
// 引入rem适配
import './libs/rem'
// 引入router路由
import router from './router'
// 引入图标
import './assets/icon/iconfont.css/iconfont.css'
// 引入公共组件Header
import Header from './components/Header/Header.vue'
import {Search,Button} from 'vant'
// 注册成公共组件
Vue.component(Header.name,Header)
Vue.component(Search.name,Search)
Vue.component(Button.name,Button)
Vue.config.productionTip = false
// 创建vue的实例对象
new Vue({
  el: '#app',
  components:{
    App
  },
  template: '<App/>',
  // 注册路由器
  router
})
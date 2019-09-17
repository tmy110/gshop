/**
 * 入口js
 */
import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './mock/mockServer'//加载mockServer即可
//引入过滤器
import './fiters'

//注册全局mint-ui组件标签
Vue.component(Button.name, Button)//<mt-button>
Vue.use(VueLazyload,//内部自定义一个指令lazy
  {loading}
)

new Vue({
  el: '#app',
  render: h => h(App),
  //配置路由器
  router,//使用vue-router
  store,//使用vuex
})
//测试

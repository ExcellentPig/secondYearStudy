import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routeConfig.js'

Vue.use(VueRouter);

const router=new VueRouter({
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes
});

//引入element-ui
//yarn add element element-ui --save
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//使用element-ui
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

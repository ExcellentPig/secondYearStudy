/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

//声明使用
Vue.use(VueResource)  //内部会给vm对宪法和组件对象添加一个属性 名字是:$http


// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})

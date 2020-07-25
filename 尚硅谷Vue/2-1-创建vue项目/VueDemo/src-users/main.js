/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
// import {Button,Swipe} from 'mint-ui'
import {Button} from 'mint-ui'

//注册成标签(全局注册)
Vue.component(Button.name,Button)
//Vue.component(Swipe.name,Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})

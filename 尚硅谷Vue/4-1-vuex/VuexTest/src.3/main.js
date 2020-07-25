import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App),
	store //所有的组件对象都多了一个:$state属性
})

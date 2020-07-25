import Vue from 'vue'
import App from './App.vue'

//全局注册组件
// import Users from './components/User.vue';
// Vue.component("users",Users);

new Vue({
  el: '#app',
  render: h => h(App)
})

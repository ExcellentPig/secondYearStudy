import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import VueResource from 'vue-resource'

//全局注册组件
// import Users from './components/User.vue';
// Vue.component("users",Users);

Vue.use(VueRouter);
Vue.use(VueResource);

//配置路由

import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

const router=new VueRouter({
	mode:'history',
	routes:[
		{path:"/",component:Home},
		{path:"/helloworld",component:HelloWorld}
	]
})

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})

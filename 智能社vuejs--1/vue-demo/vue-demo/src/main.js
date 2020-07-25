import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routerConfig from './router.config.js'

import './assets/css/animate.css';

Vue.use(VueRouter);

const router=new VueRouter(routerConfig);

new Vue({
  el: '#app',
  render: h => h(App),
	router
})

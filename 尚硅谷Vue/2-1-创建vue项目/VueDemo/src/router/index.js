/*
路由器模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'   

Vue.use(VueRouter)

export default new VueRouter({
	//n个路由
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		},
		{
			path:'/',
			redirect:'/about'
		}
	]
})
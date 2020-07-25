/**
 * 路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
	//n个路由
	routes:[
		{
			path:'/home',
			component:Home
		},
		{
			path:'/about',
			component:About
		},
		{
			path:'/',
			redirect:'/home'
		}
	]
})


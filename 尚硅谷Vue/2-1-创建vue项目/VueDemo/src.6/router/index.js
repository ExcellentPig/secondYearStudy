import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import About from '../views/About.vue'
import Home from '../views//Home.vue'

export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home
		}
	]
})
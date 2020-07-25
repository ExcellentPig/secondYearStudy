import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'
 


//配置路由
const router=new VueRouter();


router.map(routerConfig);

new Vue({
	el:'body',
	components:{
		app:App
	}
});

router.start(App,'#app');


//配置路由规则

//引入模块
import Home from './component/Home.vue'
import News from './component/News.vue'
export default{
		'/home':{
			component:Home
		},
		'/news':{
			component:News
		}
}
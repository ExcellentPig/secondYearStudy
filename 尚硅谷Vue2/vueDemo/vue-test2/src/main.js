import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'



new Vue({ //固定属性名
  el: '#app',
  render: h => h(App),
	router
})

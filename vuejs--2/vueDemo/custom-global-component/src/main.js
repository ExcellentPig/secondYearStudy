import Vue from 'vue'
import App from './App.vue'

import Loading from './components/loading' //默认找index.js
import Loading2 from './components/loading2'

Vue.use(Loading);
Vue.use(Loading2);

new Vue({
  el: '#app',
  render: h => h(App)
})

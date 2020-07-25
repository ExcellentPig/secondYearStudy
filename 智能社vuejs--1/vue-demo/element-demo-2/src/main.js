import Vue from 'vue'
import App from './App.vue'
// 
// import { Button, Radio } from 'element-ui';
// 
// Vue.component(Button.name, Button);
// Vue.component(Radio.name, Radio);

// Vue.component(Button);

import './element-ui.js'

new Vue({
  el: '#app',
  render: h => h(App)
})

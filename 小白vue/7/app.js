
Vue.component('greeting',{
	template:`,
			<div>
			
			<p>hello vue components {{name}}</p>
			<button @click="changeName">change</button>	
			
			</div>
	`,
	data(){
		return {
			name:'khan'
		}
	},
	methods:{
		changeName(){
			this.name='henry';
		}
	}
})


new Vue({
	el:'#vue-app-one'
});

new Vue({
	el:'#vue-app-two'
});

/*
  
  template必须最外面需要一个根标签

*/
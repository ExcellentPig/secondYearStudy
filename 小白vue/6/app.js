//实例化vue对象
var one=new Vue({
	el:'#vue-app-one',
	data:{
		title:'one'
	},
	computed:{
		greet(){
			return 'hello one'
		}
	}
});

var two=new Vue({
	el:'#vue-app-two',
	data:{
		title2:'two'
	},
	computed:{
		greet(){
			return 'hello two'
		}
	},
	methods:{
		changeTitle(){
			one.title="change";
		}
	}
});

two.title2='change two';

/*

	

*/
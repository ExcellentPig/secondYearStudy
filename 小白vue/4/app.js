//实例化vue对象
new Vue({
	el:'#vue-app',
	data:{
		a:0,
		b:0,
		age:20,
		error:false,
		success:false,
		characters:['a','b','c','d','e'],
		users:[
			{name:'khan',age:20},
			{name:'rsoe',age:18},
			{name:'stone',age:22}
		]
	},
	methods:{
		/*addToA(){ //两个都会执行
			console.log('Add to A')
			return this.a+this.age
		},
		addToB(){
			console.log('Add to B')
			return this.b+this.age
		}
		*/
	},
	computed:{ //index 调用计算属性不能加括号
		addToA(){ //两个都会执行
			console.log('Add to A')
			return this.a+this.age
		},
		addToB(){
			console.log('Add to B')
			return this.b+this.age
		}
	}
});

/*

	el:element  //需要获取的元素，一定是html中的根容器元素
	
	data:用于数据的存储

*/
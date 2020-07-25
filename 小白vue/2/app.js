//实例化vue对象
new Vue({
	el:'#vue-app',
	data:{
		name:'khan',
		website:'http://www.baidu.com',
		Tag:'<a href="http://www.baidu.com">Baidu</a>'
	},
	methods:{
		// console.log(this.data.name); //error
		greet:function(time){
			return 'GOOD '+time+' '+this.name+'!';
		}
	}
});

/*

	el:element  //需要获取的元素，一定是html中的根容器元素
	
	data:用于数据的存储
	
	methods:用于存储各种方法
	
	data-binding:给属性绑定对应的值

*/
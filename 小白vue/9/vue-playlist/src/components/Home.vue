<template>
	<div id="home">
		<Header @titleChanged="updateTitle($event)" :title="title"></Header>
		<!-- <users></users> -->
		<Users :users="users"></Users>
		<Users :users="users"></Users>
		<Footer :title="title"></Footer>
	</div>
</template>

<script>
//局部引入
import Users from './User.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
	name: 'home',
	data() {
		return {
			users: [
				// { name: 'khan', position: 'Web', show: false },
				// { name: 'khan', position: 'Web', show: false },
				// { name: 'khan', position: 'Web', show: false },
				// { name: 'khan', position: 'Web', show: false },
				// { name: 'khan', position: 'Web', show: false },
				// { name: 'khan', position: 'Web', show: false },
				// { name: 'khan', position: 'Web', show: false },
				// { name: 'khan', position: 'Web', show: false },
				// { name: 'khan', position: 'Web', show: false }
			],
			title:'传递的是一个值(numebr,string.boolean)'
		};
	},
	// components:{
	// 	"users":Users
	// }
	components: {
		Users,
		Header,
		Footer
	},
	methods:{
		updateTitle(title){
			this.title=title;
		}
	},
	created(){
		this.$http.get("http://jsonplaceholder.typicode.com/users")
		.then((data)=>{
			console.log(data);
			this.users=data.body;
		})
	}
};
</script>

<style scoped="scoped">
h1 {
	color: lightblue;
	/*
		* 全局
		* */
}
</style>

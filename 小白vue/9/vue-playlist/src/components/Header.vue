<template>
	<header @click="changeTitle">
		<h1>{{ title1 }} {{title}}</h1>
	</header>
</template>

<script>
export default {
	props:{
		title:{
			type:String
		}
	},
	data() {
		return {
			title1: 'Vue.js Demo'
		}
	},
	methods:{
		changeTitle(){
			//this.title="changed"
			
			this.$emit("titleChanged","子组件向父组件传值")
		}
	},
	beforeCreate(){
		console.log('组件实例化之前执行的函数');
	},
	created(){
		console.log('组件实例化完毕,但页面还未显示');
	},
	beforeMount(){
		console.log('组件挂载前，页面仍为展示，但虚拟Dom已经配置完');
	},
	mounted(){
		console.log('组件挂载后，此方法执行后页面展示');
	},
	beforeUpdate(){
		console.log('组件更新前，页面仍未更新，但虚拟Dom已经配置');
	},
	updated(){
		console.log('组件更新，此方法执行后，页面更新');
	},
	beforeDestroy(){
		console.log('组件销毁前');
	},
	destroyed(){
		console.log('组件销毁');
	}
};
</script>

<style scoped="scoped">
header {
	background-color: lightgreen;
	padding: 10px;
}
h1 {
	color: #222;
	text-align: center;
}
</style>

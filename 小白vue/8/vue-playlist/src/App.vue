<template>
  <div id="app">
    <h1>hello vue</h1>
		<h5>{{title}}</h5>
		<!-- <users></users> -->
		<Users></Users>
  </div>
</template>

<script>
	//局部引入
import Users from './components/User.vue';
export default {
  name: 'app',
  data () {
    return {
			title:'khan'
    }
  },
	// components:{
	// 	"users":Users
	// }
	components:{
		Users
	}
}
</script>

<style scoped="scoped">
	h1{
		color: lightblue; 
		/*
		* 全局
		* */
	}
</style>

<template>
	<div class="loading-box">
		<p @click="change">{{msg}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'Loading...^_^'
			}
		},
		methods:{
			change(){
				this.msg='^_^Loading...'
			}
		}
	}
</script>

<style scoped="scoped">
		.loading-box{
			color: red;
			font-size: 40px;
			font-family: '楷体';
			text-shadow: 2px 2px 5px #000;
		}
</style>

<template>
	<div class="loading-box">
		Loading...
		<p @click="change">{{msg}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'Loading +++++'
			}
		},
		methods:{
			change(){
				this.msg = '++++ Loading'
			}
		}
	}
</script>

<style scoped="scoped">
	.loading-box{
		color: darkblue;
		font-size: 25px;
		font-family: "宋体";
	}
</style>

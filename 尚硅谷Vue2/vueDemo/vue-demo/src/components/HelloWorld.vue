<template>
	<div>
		<p class="msg">{{msg}}</p>
	</div>
</template>

<script>
	export default{//配置对象与(vue)一致
		data(){
			return {
				msg:'khan'
			}
		}
	}
</script>

<style scoped="scoped">
	.msg{
		color: darkcyan;
		font-size: 30px;
	}
</style>

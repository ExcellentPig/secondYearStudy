<template>
	<div id="app">
		<h3>vue-loader + vue-router</h3>
		<div>
			<a v-link="{path:'/home'}">主页</a>
			<a v-link="{path:'/news'}">news</a>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	
</script>
<style>
	body{
		background: #ccc
	}
</style>
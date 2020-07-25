<template>
	<div id="news">
		<h3>我是新闻页</h3>
		<ul>
			<li v-for="value,index in news">{{value}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'news',
		data(){
			return {
				news:['1111','222','3333','4444']
			}
		}
	}
</script>

<style scoped="scoped">
	li{
		border-bottom: 2px dashed lightblue;
	}
</style>

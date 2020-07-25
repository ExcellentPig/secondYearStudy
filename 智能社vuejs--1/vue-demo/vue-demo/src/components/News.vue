<template>
	<div id="news">
		<h3>我是新闻</h3>
		<ul>
			<li class="li" v-for="val,index in news" :key="index">{{val}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'news',
		data(){
			return {
					news:['1','2','3','4']
				}
			}
		}
</script>

<style scope>
	.li{
		border-bottom: 2px dashed lightcoral;
	}
</style>

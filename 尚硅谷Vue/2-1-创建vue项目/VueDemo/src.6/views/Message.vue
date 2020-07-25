<template>
	<ul>
		<li v-for="(message,index) in messages" :key="message.id">
			<a href="???">{{message.title}}</a>
		</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return {
				messages:[]
			}
		},
		
		mounted(){
			//模拟ajax请求，从后台获取数据
			
			setTimeout(()=>{
				const messages=[
					{
						id:1,
						title:'message004'
					},
					{
						id:2,
						title:'message002'
					},
					{
						id:4,
						title:'message004'
					}
				]
				this.messages=messages
			},1000)
		}
	}
</script>

<style>
</style>

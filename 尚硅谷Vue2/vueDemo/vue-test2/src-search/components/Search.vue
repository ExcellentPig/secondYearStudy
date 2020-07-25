<template>
	<div>
		<section class="jumbotron">
			<h3 class="jumbotron-heading">Search Github Users</h3>
			<div>
				<input v-model="searchName" type="text" placeholder="enter the name you search" />
				<button @click="search">Search</button>
			</div>
		</section>
	</div>
</template>

<script>
	import PunSub from 'pubsub-js'
	export default{
		data(){
			return {
				searchName:''
			}
		},
		methods:{
			search(){
				const searchName=this.searchName.trim()
				if(searchName){
					//发布搜索的消息
					PunSub.publish('search',searchName)
				}
			}
		}
	}
</script>

<style></style>

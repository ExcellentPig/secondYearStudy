<template>
	<div class="users">
		<h1>hello users</h1>
		<ul>
			<li v-for="user in users">
				{{user}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'users',
		data(){
			return {
				users:['khan','rose','jack']
			}
		}
	}
</script>

<style scoped="scoped">
	h1{
		color: lightcoral;
		/*
		* 不加scoped会影响全局
		* 
		* */
	}
</style>

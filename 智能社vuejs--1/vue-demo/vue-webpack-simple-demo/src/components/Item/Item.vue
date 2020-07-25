<template>
	<div class="list">
		<ul>
			<li v-for="value in a">{{value}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				a:[1,2,3,4,5,6,7]
			}
		}
	}
</script>

<style>
</style>

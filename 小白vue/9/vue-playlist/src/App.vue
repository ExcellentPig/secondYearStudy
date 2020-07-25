<template>
	<div id="app">
		<!-- <ul>
			<li> -->
				<!--会重新加载页面-->
				<!-- <a href="/">Home</a>
				<a href="/helloworld">Hello</a>
			</li>
		</ul> -->
		
		<router-link to="/" tag="li">Home</router-link>
		<router-link to="/helloworld" tag="li">Hello</router-link>
		
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: 'app'
};
</script>

<style scoped="scoped">


</style>

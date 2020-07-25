<template>
	<div>
		<h2>Home</h2>
		<div>
			<ul class="nav nav-tabs">
				<!-- <li><a href="#/home/news" class="router-link-exact-active activeClass">News</a></li>
				<li><a href="#/home/message" class="">Message</a></li> -->
			
				<router-link to="/home/news">News</router-link>
				<router-link to="/home/message">Message</router-link>
			</ul>
			<div>
				<!-- <li>news01</li>
				<li>news03</li>
				<li>news05</li> -->
				
				<router-view></router-view>
				<hr>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>

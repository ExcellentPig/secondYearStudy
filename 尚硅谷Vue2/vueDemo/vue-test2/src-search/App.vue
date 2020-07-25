<template>
	<div id="app">
		<div class="container">
			<Search></Search>
			<!-- <UsersMain></UsersMain> -->
			<users-main></users-main>
		</div>
	</div>
</template>

<script>
import Search from './components/Search.vue';
import Main from './components/Main.vue';
export default {
	components: {
		Search,
		UsersMain:Main
	}
};
</script>

<style></style>

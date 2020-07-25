<template>
	<div>
		<img class="logo" src="./assets/logo.png"/>
		<HelloWorld/>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
	components: {
		HelloWorld
	}
};
</script>

<style scoped="scoped">
.logo {
	width: 200px;
	height: 200px;
}
</style>

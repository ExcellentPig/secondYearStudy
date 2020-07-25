<template>
	<div id="app">
			{{msg}}
			<ul>
				<li>
					<router-link to="/home">主页</router-link>
					<router-link to="/news">新闻</router-link>
				</li>
			</ul>
			<div>
				<transition 
				enter-activve-class="animated rollIn"
				leave-active-class="animated rollOut"
				>
					<router-view></router-view>
				</transition>
			</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		};
	}
};
</script>

<style>
html,body{
	overflow: hidden;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>

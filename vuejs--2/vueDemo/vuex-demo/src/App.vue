<template>
	<div id="app">
		<h3>vuex</h3>
		<input @click="increment" type="button" value="增加" />
		<input @click="decrement" type="button" value="减少" />
		<input @click="clickOdd" type="button" value="偶数增加" />
		<input @click="clickAsync" type="button" value="点击异步" />
		<!-- <div>现在的数字为:{{$store.state.count}}</div> -->
		<div>现在的数字为:{{count}},它现在是:{{getOdd}}</div>
	</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default{
	computed:mapGetters([
		'count',
		'getOdd'
	]),
		methods:mapActions([
			'increment',
			'decrement',
			'clickOdd',
			'clickAsync'
		])
	}
</script>

<style>
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

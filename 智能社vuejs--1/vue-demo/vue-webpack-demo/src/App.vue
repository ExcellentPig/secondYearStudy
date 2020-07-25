<template>
  <div id="app">
    <h1>Vue</h1>
		<h2>{{msg}}</h2>
		<Khan></Khan><br>
		<Rose></Rose>
  </div>
</template>

<script>
	import Khan from './components/Khan.vue'
	import Rose from './components/Rose.vue'
export default {
  name: 'App',
	data(){
		return {
			msg:'hahah'
		}
	},
	components:{
		Khan,
		Rose
	}
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
</style>

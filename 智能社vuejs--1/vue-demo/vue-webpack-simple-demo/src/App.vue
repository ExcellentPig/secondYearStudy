<template>
  <div id="app">
    <h3>{{msg}}</h3>
		<input type="button" value="change" @click="change">
		<News></News>
		<Khan></Khan>
		<Item></Item>
  </div>
</template>

<script>
import News from './components/News.vue'
import Khan from './components/Khan.vue'
import Item from './components/Item/Item.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue....'
    }
  },
	methods:{
		change(){
			// this.msg="khan"
			var str=this.msg;
			str=str.split('').reverse();
			this.msg=str;
		}
	},
	components:{
		News,
		Khan,
		Item
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

h1, h2 {
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

<template>
  <div id="app">
		<Item></Item>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2 id="test">Essential Links(Color has changed)</h2>
    <br/>
    <ul>
      <router-link :to="{name:'index'}" tag="li">index</router-link>
      <br/>
      <router-link :to="{name:'MyElementuiA01'}" tag="li">MyElementui Demo1(eltable dialog)</router-link>
      <br/>
      <router-link :to="{name:'MyElementuiC01'}" tag="li">MyElementui Demo2(el-tabs)</router-link>
      <br/>
      <router-link :to="{name:'A1_Layout01'}" tag="li">MyElementui Demo3(Layout el-row/el-col)</router-link>
      <br/>
      <router-link :to="{name:'A2_eCharts01'}" tag="li">MyElementui Demo4(eltable eCharts)</router-link>
        <br/>
        <router-link :to="{name:'filter_demo1'}" tag="li">列表的过滤和排序(demo1)</router-link>
        <br/>
        <router-link :to="{name:'filter_demo2'}" tag="li">表格行内排序、编辑、删除效果(demo2)</router-link>
    </ul>
		
    <router-view></router-view>
  </div>
</template>

<script>

  import MyElementuiA01 from './components/elementui01/MyElementuiA01'
  import MyElementuiC01 from './components/elementui01/MyElementuiC01'
  import A1_Layout01 from './components/elementui02/A1_Layout01'
  import A2_eCharts01 from './components/elementui02/A2_eCharts01'
  import filter_demo1 from './components/complexfilter/demo1'
  import filter_demo2 from './components/complexfilter/demo2'
	import Item from './components/znc/Item.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    MyElementuiA01,
    MyElementuiC01,
    A1_Layout01,
    A2_eCharts01, filter_demo1,filter_demo2,
		Item
  }
}
</script>

<style>
  @import './assets/css/mycss.css';

  router-link{
    font-size: 20px;
    color: #f60;
  }
</style>

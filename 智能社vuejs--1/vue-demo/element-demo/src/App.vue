<template>
	<div id="app">
		welcome
		<el-button type="primary">主要按钮</el-button>
		<el-button type="danger" icon="el-icon-info">danger</el-button>
		<el-button type="info" icon="el-icon-back">info</el-button>

		<span class="el-icon-delete"></span>
		<span class="el-icon-loading"></span>

		<el-row>
			<el-col :span="12"><div class="my-grid"></div></el-col>
			<el-col :span="12"><div class="my-grid"></div></el-col>
		</el-row>
		<el-row>
			<el-col :span="8"><div class="my-grid"></div></el-col>
			<el-col :span="8"><div class="my-grid"></div></el-col>
			<el-col :span="8"><div class="my-grid"></div></el-col>
		</el-row>

		<Date></Date>
		<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
	</div>
</template>

<script>
	
import Date from './components/Date.vue'
	
export default {
	data() {
		return {
			value1: true,
			value2: true
		};
	},
	components:{
		Date
	}
};
</script>

<style scoped="scoped" lang="less">
@color:red;
.height(@h){
	height: @h
}
.my-grid {
	border: 1px solid @color;
	.height(50px); 
}
</style>

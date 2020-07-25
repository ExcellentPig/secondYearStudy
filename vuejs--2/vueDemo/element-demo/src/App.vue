<template>
  <div id="app">
		<el-button type="primary">普通按钮</el-button>
		<el-button type="danger">危险按钮</el-button>
		<el-button type="info">info</el-button>
		<el-button type="success" icon="el-icon-circle-close">succss</el-button>
		<el-button type="warning" icon="el-icon-loading">warning</el-button>
		<br>
		<br>
		<br>
		<span class="el-icon-delete"></span>
		<span class="el-icon-loading"></span>
		<br>
		<br>
		<br>
		<el-row>
			<el-col :span="12">
				<div class="my-grid">
					<Date></Date>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="my-grid">
					
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="8">
				<div class="my-grid">
					
				</div>
			</el-col>
			<el-col :span="8">
				<div class="my-grid">
					
				</div>
			</el-col>
				<el-col :span="8">
				<div class="my-grid">
					
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Date from './components/Date.vue'

export default{
	components:{
		Date
	}
}

</script>

<style scoped="scoped" lang="less">
	
@color:red;
// .h50{
// 	height: 50px;
// }
.height(@h){
	height: @h;
}
.my-grid{
	border: 1px solid @color;
	.height(100px);
}
	
// .my-grid{
// 	border: 1px solid darkblue;
// 	height: 50px;
// }
</style>

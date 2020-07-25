<template>
	<div id="app">
		<el-button @click="get">普通按钮</el-button>
		<hr>
		<div>
			{{myMessage}}
		</div>
		<br>
		<el-button type="primary">primary</el-button>
		<br />
		<br />
		<br />
		<el-radio v-model="radio" label="1">备选项</el-radio>
		<el-radio v-model="radio" label="2">备选项</el-radio>
		<br />
		<br />
		<br />
		<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>

		<br />
		<br />
		<br />
		<el-rate v-model="val"></el-rate>
		<br />
		<br />
		<br />
		<el-pagination layout="prev, pager, next" :total="50"></el-pagination>
		<br />
		<br />
		<br />
		<el-tabs v-model="activeName">
			<el-tab-pane label="用户管理" name="first">
				<el-badge :value="12" class="item"><el-button size="small">评论</el-button></el-badge>
				<el-badge :value="3" class="item"><el-button size="small">回复</el-button></el-badge>
			</el-tab-pane>
			<el-tab-pane label="配置管理" name="second">
				<el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费"></el-switch>
				<el-switch style="display: block" v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费"></el-switch>
			</el-tab-pane>
			<el-tab-pane label="角色管理" name="third">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column prop="date" label="日期" width="180"></el-table-column>
					<el-table-column prop="name" label="姓名" width="180"></el-table-column>
					<el-table-column prop="address" label="地址"></el-table-column>
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="定时任务补偿" name="fourth"><el-color-picker v-model="color1"></el-color-picker></el-tab-pane>
		</el-tabs>
		<br>
		<br>
		<br>
		<myButton @click.native="get"></myButton>
	</div>
</template>

<script>
import myButton from './components/Button.vue'
import axios from 'axios'
export default {
	name: 'app',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			radio: '1',
			value1: '',
			value3: true,
			value4: false,
			val: 3.5,
			activeName: 'second',
			color1: '#409EFF',
			myMessage:'默认数据',
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			]
		}
	},
	mounted(){
		this.get();
	},
	methods:{
		get(){
			//alert(1);
			axios.get('https://api.github.com/users/itstrive')  //a.txt
			.then((res)=>{
				//console.log(res)
				this.myMessage=res.data;
			}).catch((err)=>{
				console.log(err)
			})
		}
	},
	components:{
		myButton
	}
};
</script>

<style>
.item {
	margin-top: 10px;
	margin-right: 40px;
}
</style>

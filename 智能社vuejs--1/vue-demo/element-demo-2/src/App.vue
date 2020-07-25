<template>
	<div id="app">
		<el-button @click="get">普同</el-button>
		<div>
			{{myMessage}}
		</div>
		<hr>
		<!--
	 
	 需要哪个就在main.js中引入哪个，没有引入的不能使用
	 -->
		<el-button type="danger">danger</el-button>
		<el-radio class="radio" v-model="radio" label="1">khan</el-radio>
		<el-radio class="radio" v-model="radio" label="2">rose</el-radio>
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<div class="block">
			<span class="demonstration">默认</span>
			<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
		</div>
		<div class="block">
			<span class="demonstration">带快捷选项</span>
			<el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1"></el-date-picker>
		</div>
		<el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>

		<myButton @click.native="get"></myButton>
		
	</div>
</template>

<script>
// import Form from './components/Form.vue'
import myButton from './components/Button.vue'
import axios from 'axios'
export default {
	name: 'app',
	data() {
		return {
			myMessage:'默认数据',
			radio: '1',
			input: '',
			pickerOptions1: {
				disabledDate(time) {
					return time.getTime() > Date.now();
				},
				shortcuts: [
					{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					},
					{
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					},
					{
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}
				]
			},
			value1: '',
			value2: ''
		};
	},
	components:{
		// Form
		myButton
	},
	mounted(){
		this.get();
	},
	methods:{
// 		get(){
// 			//alert(1)
// 			axios.get('a.txt')
// 			.then((res)=>{
// 				console.log(res);
// 				this.myMessage=res.data;
// 			}).catch((err)=>{
// 				console.log(err);
// 			})
// 		}
			get(){
			//alert(1)
			axios.get('https://api.github.com/users/itstrive')
			.then((res)=>{
				console.log(res);
				this.myMessage=res.data;
			}).catch((err)=>{
				console.log(err);
			})
		}
	}
};
</script>

<style></style>

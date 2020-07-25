<template>
	<div id="app">
		<mt-header fixed title="固定在顶部"></mt-header>
		<br />
		<div class="my-button-box">
			<mt-button type="default">default</mt-button>
			<mt-button type="primary" @click.native="open">加载数据</mt-button>
			<mt-button type="danger">danger</mt-button>
		</div>
		<br />
		<mt-radio title="单选框列表" v-model="value" :options="['选项A', '选项B', '选项C']"></mt-radio>
		<mt-cell title="选择">{{ value }}</mt-cell>
		<br />
		<div class="page-swipe">
			<mt-swipe :auto="0" :show-indicators="false">
				<mt-swipe-item :class="{ slide1: true }">1</mt-swipe-item>
				<mt-swipe-item :class="{ slide2: true }">2</mt-swipe-item>
				<mt-swipe-item :class="{ slide3: true }">3</mt-swipe-item>
			</mt-swipe>
		</div>
		<mt-tabbar>
			<mt-tab-item id="外卖">
				<img slot="icon" src="./assets/logo.png" />
				外卖
			</mt-tab-item>
			<mt-tab-item id="订单">
				<img slot="icon" src="./assets/logo.png" />
				订单
			</mt-tab-item>
			<mt-tab-item id="发现">
				<img slot="icon" src="./assets/logo.png" />
				发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				<img slot="icon" src="./assets/logo.png" />
				我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
	name: 'app',
	data() {
		return {
			msg: '',
			value: ''
		};
	},
	methods: {
		open() {
			// alert(1);
			Indicator.open('加载中...');
			
			setTimeout(()=>{
				Indicator.close();
			},2000)
		}
	}
};
</script>

<style scoped="scoped">
.page-swipe .mint-swipe {
	height: 200px;
	color: #fff;
	font-size: 30px;
	text-align: center;
	margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
	line-height: 200px;
}
.page-swipe .slide1 {
	background-color: #0089dc;
	color: #fff;
}
.page-swipe .slide2 {
	background-color: #ffd705;
	color: #000;
}
.page-swipe .slide3 {
	background-color: #ff2d4b;
	color: #fff;
}
.page-swipe-desc {
	text-align: center;
	color: #666;
	margin-bottom: 5px;
}

.my-btn-box {
	margin-top: 50px;
}
.my-button-box {
	margin-top: 50px;
}
</style>

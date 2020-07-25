import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = { //数据
	count: 10
};
const mutations = { //处理数据(状态)的变化
	increment(state) {
		state.count++;
	},
	decrement(state) {
		state.count--;
	}
};

const actions = { //处理你要做什么，异步请求,判断，流程控制...
	increment: ({
		commit
	}) => {
		//console.log(commit);
		commit('increment')
	},
	decrement: ({
		commit
	}) => {
		commit('decrement')
	},
	clickOdd: ({
		commit,
		satte
	}) => {
		//alert(state.count);
		if (state.count % 2 == 0) {
			commit('increment')
		}
	},
	clickAsync: ({
		commit
	}) => {
		new Promise((resolve) => {
			setTimeout(() => {
				//alert(1)
				commit('increment');
				resolve();
			}, 1000)
		})
	}
};

const getters = {
	count(state) {
		return state.count;
	},
	getOdd(state){
		return state.count%2==0?'偶数':'奇数';
	}
};

//导出store对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

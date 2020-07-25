import {
	INCREMENT,
	DECREMENT
} from './types.js'

import getters from './getters.js'

const state={
	count:20
};

const mutations={
	[INCREMENT](){
		state.count++;
	},
	[DECREMENT](){
		state.count--;
	}
};

export default{
	state,
	mutations,
	getters
}
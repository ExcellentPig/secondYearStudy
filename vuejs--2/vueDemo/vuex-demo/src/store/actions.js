import * as types from './types.js'

export default {
	increment: ({
		commit
	}) => {
		commit(types.INCREMENT);
	},
	decrement: ({
		commit
	}) => {
		commit(types.DECREMENT);
	},
	clickAsync: ({
		commit
	}) => {
		new Promise((resolve) => {
			setTimeout(() => {
				//alert(1)
				commit(types.INCREMENT);
				resolve();
			}, 1000)
		})
	},
	clickOdd: ({
		commit,
		state
	}) => {
		if (state.mutations.count % 2 == 0) {
			commit(types.INCREMENT);
		}
	}
}

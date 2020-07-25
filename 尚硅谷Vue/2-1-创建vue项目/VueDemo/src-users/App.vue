<template>
	<mt-button type="primary" @click.native="handleClick" style="width: 100%;">primary</mt-button>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
	methods:{
		handleClick(){
			Toast('khan')
		}
	}
};
</script>

<style></style>

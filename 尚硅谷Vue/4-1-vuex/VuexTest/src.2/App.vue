<template>
  <div>
		<p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">increment if odd</button>
		<button @click="incrementAsync">increment async</button>
	</div>
</template>

<script>
export default {
	computed:{
		evenOrOdd(){ 
			return this.$store.getters.evenOrOdd
		}
	},
	methods:{
		increment(){
			//通知vuex去increment
			this.$store.dispatch('increment') //触发store中的对应的action调用
		},
		decrement(){
			this.$store.dispatch('decrement')
		},
		incrementIfOdd(){
			this.$store.dispatch('incrementIfOdd')
		},
		//异步增加  过一秒增加
		incrementAsync(){
			this.$store.dispatch('incrementAsync')
		}
	}
}
</script>

<style>

</style>

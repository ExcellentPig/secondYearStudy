<template>
  <div>
		<p>click {{count}} times, count is {{evenOrOdd}}</p>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">increment if odd</button>
		<button @click="incrementAsync">increment async</button>
	</div>
</template>

<script>
//mapGetters()返回值  对象
import {mapState,mapGetters,mapActions} from 'vuex'
export default{
	/*computed: {
	  count () {
	    return this.$store.state.count
	  },
	  evenOrOdd () {
	    return this.$store.getters.evenOrOdd
	  }
	},*/
	computed: {
	  ...mapState(['count']),
	  ...mapGetters({evenOrOdd:'evenOrOdd'})
	},
	/*methods: {
	  increment () {
	    this.$store.dispatch('increment')
	  },
	  decrement () {
	    this.$store.dispatch('decrement')
	  },
	  incrementIfOdd () {
	    this.$store.dispatch('incrementIfOdd')
	  },
	  incrementAsync () {
	    this.$store.dispatch('incrementAsync')
	  }
	}*/
	methods: {
	  ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
	}
}
</script>

<style>

</style>

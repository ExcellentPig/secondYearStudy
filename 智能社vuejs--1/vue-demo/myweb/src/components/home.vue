
<template>
  <div>
    <div class="home text-center">{{home}}</div>
    <router-link to="page01">w我是要跳转的</router-link>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return{
        home:'别看了，这里什么都没有'
      }
    },
    components:{

    }
  }
</script>

<style >
  .home {
    margin-top: 10%;
    font-size: 2.4em;
    font-weight: bold;
  }
</style>


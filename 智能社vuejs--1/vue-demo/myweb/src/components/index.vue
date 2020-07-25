<template>
    <div>
        <img src="../assets/images/5132.jpg" width="200" height="300"></img>
        <br/>
        <ul>
            <router-link :to="{name:'MyElementuiA01'}" tag="li">MyElementui Demo1(eltable dialog)</router-link>
            <br/>
            <router-link :to="{name:'MyElementuiC01_index'}" tag="li">MyElementui Demo2(el-tabs)</router-link>
            <br/>
            <router-link :to="{name:'A1_Layout01_index'}" tag="li">MyElementui Demo3(Layout el-row/el-col)</router-link>
            <br/>
            <router-link :to="{name:'A2_eCharts01_index'}" tag="li">MyElementui Demo4(eltable eCharts)</router-link>
            <br/>
            <router-link :to="{name:'/'}" tag="li">Back to Home</router-link>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script>
    import {add} from '../assets/js/myjs.js';
    console.log("add(2,3) = ",add(2,3));



    export default {
        name: "index",

    }
</script>

<style scoped>

</style>
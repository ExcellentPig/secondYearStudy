<template>
    <div id="ma2_eCharts">
        <child_A02_eCharts></child_A02_eCharts>
    </div>
</template>

<script>
    import A02_eCharts from "./A02_eCharts"
    export default {
        name: "A2_eCharts01",
        components:{
            'child_A02_eCharts': A02_eCharts
        }
    }
</script>

<style scoped>

</style>

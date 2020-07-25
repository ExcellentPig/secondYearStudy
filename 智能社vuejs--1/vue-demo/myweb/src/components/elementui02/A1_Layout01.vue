<template>
    <div id="a1_Layout">
        <child1></child1>
    </div>
</template>

<script>
    import A01_Layout from "./A01_Layout"
    export default {
        name: "A1_Layout01",
        components:{
            'child1': A01_Layout
        }
    }
</script>

<style scoped>

</style>

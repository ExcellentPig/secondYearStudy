<template>
    <div id="myElementuiC01">
        <el-tabs v-model="activeName"  @tab-click="handleClick">
            <el-tab-pane label="测试栏目1" name="c01_table1" :key="'c01_table1'">
                <child1  v-if="isChildUpdate1"></child1>
            </el-tab-pane>
            <el-tab-pane label="测试栏目2" name="c01_table2" :key="'c01_table2'">
                <child2  v-if="isChildUpdate2"></child2>
            </el-tab-pane>

            <el-tab-pane label="测试栏目3" name="c02_form" :key="'c02_form'">
                <child3  v-if="isChildUpdate3"></child3>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
    import c01_table1 from './c01_table1'
    import c01_table2 from './c01_table2'
    import c02_form from './c02_form'
    export default {
        name: "MyElementuiC01",
        components:{
            child1:c01_table1,
            child2:c01_table2,
            child3:c02_form
        },
        data() {
            return {
                //默认第一个选项卡
                activeName: "c01_table1",
                isChildUpdate1:true,
                isChildUpdate2:false,
                isChildUpdate3:false
            }
        },
        mounted(){

        },
        methods:{
            handleClick(tab) {
                if(tab.name == "c01_table1") {
                    this.isChildUpdate1 = true;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = false;
                } else if(tab.name == "c01_table2") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = true;
                    this.isChildUpdate3 = false;
                }
                else if(tab.name == "c02_form") {
                    this.isChildUpdate1 = false;
                    this.isChildUpdate2 = false;
                    this.isChildUpdate3 = true;
                }
            }
        }
    }
</script>

<style scoped>
</style>

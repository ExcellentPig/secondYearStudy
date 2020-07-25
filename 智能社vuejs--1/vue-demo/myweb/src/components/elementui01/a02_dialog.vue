<template>
    <div id="a02_dialog">
        <el-dialog
                :title="dialogTitle"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <el-form label-position="right" label-width="80px" :model="msg" :rules="rules" ref='dialogCom'>
                <el-form-item v-for="(item,key) in data" :key="key" :label="item.prop" :prop='item.prop'>
                    <el-input v-model="msg[item.prop]"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>

</template>
<script>
    export default{
        name: 'a02_dialog',
        props:['data','dialogTitle','vdata','rules'],  //接收父组件的传值

        data() {
            return {
                dialogVisible:false,  //控制显示或者隐藏的布尔值
                msg:{},   // :model中绑定的数据,直接写成vdata会有问题
            }
        },methods:{
            handleClose(){
                this.dialogVisible = false;
                this.$refs.dialogCom.resetFields();
            },submitForm(){
                this.$refs.dialogCom.validate((valid) => {
                    if (valid) {

                        console.log('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }

                });
            },
            resetForm(){
                this.$refs.dialogCom.resetFields();
            }
        },mounted() {

        },watch:{
            dialogVisible(val){
                if(val){
                    this.msg = JSON.parse(JSON.stringify(this.vdata)); //深拷贝,直接赋值改变引用:rules在input改变值后会有问题
                }
            }
        }

    }
</script>


<style scoped>

</style>

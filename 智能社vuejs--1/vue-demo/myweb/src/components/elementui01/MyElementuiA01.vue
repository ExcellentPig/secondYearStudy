<template>
    <div id="myElementuiA01">
        <child @columnEdit='event'></child>
        <dialogComponent
                ref ='dialogComponent'
                :data ='propdata'
                :dialogTitle = 'dialogTitle'
                :vdata = 'vdata'
                :rules ='rules'
        ></dialogComponent>
    </div>
</template>

<script>
    import child from './a01_child.vue'
    import dialogComponent from './a02_dialog.vue'
    export default {
        name: "MyElementuiA01",
        data() {
            return {
                propdata:[], //dialog需要显示的东西
                dialogTitle:'编辑',//dialog的title
                vdata :{}, //表单验证和双向绑定需要用到的数据源
                rules:
                    {
                        date: [
                            { required: true, message: '请输入日期' },
                        ],
                        name: [
                            { required: true, message: '请输入名称'}
                        ],
                        address: [
                            {  required: true, message: '请选择地址' }
                        ]},  //表单验证的规则，也可动态生成。
            }
        },
        methods:{
            event({index,row}){  //接收子组件的传值,没有用到index
                this.propdata = this.dataFormat(row);  //需要用到input输入框中的label
                this.$refs.dialogComponent.dialogVisible = true; //使dialog显示
                console.log(this.vdata);
                console.log(this.propdata);
            },dataFormat(data){     //将数据转换成想要的格式
                let dataArrlist = [];
                for(let i in data){
                    let Json = {};
                    Json.prop = i;
                    Json.name = data[i];
                    this.vdata[i] = data[i];
                    dataArrlist.push(Json);
                }
                return dataArrlist;
            }
        },components:{   //注册组建
            child,
            dialogComponent,
        },mounted() {

        },
    }
</script>

<style scoped>

</style>

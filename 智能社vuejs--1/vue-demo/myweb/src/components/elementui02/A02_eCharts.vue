<template>
    <div id="id_A02_eCharts">
        <el-container>
            <el-header class="el-header">Header</el-header>
            <el-container>
                <el-aside class="el-aside" width="20%">aside</el-aside>
                <el-main center="true" width="80%">
                    <div>
                        <el-table :data="tableData" class="el-table-filter"
                                  style="font-size: 10px"
                                  row-style="height:20px"
                                  cell-style="padding:0">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column label="项目编号" prop="id"></el-table-column>
                            <el-table-column label="项目名称" prop="name"></el-table-column>
                            <el-table-column label="到期时间" :sortable="true" :sort-method="sortByDate">
                                <template slot-scope="scope">
                                    {{scope.row.deadline | deadline}}
                                </template>
                            </el-table-column>
                            <el-table-column label="赏金" prop="price"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <a href="javascript:;">[删除]</a>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div style="width:100%;margin:0 auto;text-align: center;font-size: 16px">
                        <h1>vue中插入Echarts示例</h1>
                        <el-button @click="showECharts">显示Echarts图</el-button>
                        <hr/>
                        <div id="myChart"></div>
                    </div>
                </el-main>
            </el-container>
            <el-footer class="el-footer"></el-footer>
        </el-container>
    </div>
</template>

<script>
    // 引入基本模板
    // let echarts = require('echarts/lib/echarts')
    // // 引入柱状图组件
    // require('echarts/lib/chart/bar')
    // // 引入提示框和title组件
    // require('echarts/lib/component/tooltip')
    // require('echarts/lib/component/title')
    // // 这里之所以使用 require 而不是 import，是因为 require 可以直接从 node_modules 中查找，而 import 必须把路径写全。
    import echarts from 'echarts'

    export default {
        name: 'A02_eCharts',

        data() {
            return {
                tableData: [
                    {
                        type: '平面设计',
                        id: '477760',
                        name: 'logo设计',
                        price: 10000,
                        deadline: '2019-4-13',
                        url: 'javascript:;',
                    },{
                        type: '整站建设',
                        id: '451534',
                        name: '信息网站开发',
                        price: 10000,
                        deadline: '2019-3-13',
                        url: 'javascript:;',
                    },{
                        type: 'IOS',
                        id: '789412',
                        name: '信息网站开发',
                        price: 10000,
                        deadline: '2019-2-13',
                        url: 'javascript:;',
                    },{
                        type: 'UI设计',
                        id: '564325',
                        name: '信息网站开发',
                        price: 10000,
                        deadline: '2019-1-13',
                        url: 'javascript:;',
                    },{
                        type: 'VI设计',
                        id: '458252',
                        name: 'VI优化设计',
                        price: 10000,
                        deadline: '2019-4-5',
                        url: 'javascript:;',
                    },{
                        type: 'Android',
                        id: '456782',
                        name: 'Android开发',
                        price: 10000,
                        deadline: '2019-2-7',
                        url: 'javascript:;',
                    }
                ]
            }
        },
        filters: {
            deadline(value) {
                let now = new Date().getTime();
                // let valuetime = this.$options.methods.parserDate(value);
                let valuetime =Date.parse(value);
                if(valuetime - now < 0) {
                    return '已结束'
                } else {
                    let date = new Date(valuetime)
                    let Y = date.getFullYear()
                    let M = date.getMonth() + 1
                    let D = date.getDate()
                    return `${Y}-${M}-${D}`
                }
            }
        },
        mounted(){
        },
        methods: {
            parserDate(date) { //'2019-4-5' ==> 1554393600000
                var t = Date.parse(date);
                return t;
            },
            showECharts() {
                let myChart = echarts.init(document.getElementById('myChart'));
                myChart.resize();//关键步骤
                let option = {
                    color: ['#f44'],
                    padding: 5,
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {
                            type : 'shadow'
                        }
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'每月花费',
                            type:'bar',
                            barWidth: '60%',
                            data:[995,666,444,858,654,236,645,546,846,225,547,356]
                        }
                    ]
                };
                myChart.setOption(option);

                //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
                window.addEventListener('resize',function() {myChart.resize()});
            },
            sortByDate(obj1, obj2) {
                let val1 = obj1.deadline
                let val2 = obj2.deadline
                return val1 - val2
            }
        }
    }
</script>

<style scoped>
    .el-table-filter {
        max-height: 800px;
        overflow: auto;
    }
    .el-aside{
        background-color: #0f6674;
    }
    .el-header{
        background-color: #17a2b8;
    }
    .el-footer{
        background-color: #7abaff;
    }
    #myChart{
        width: 400px;
        height: 300px;
        border: 1px solid red;
        margin: 0 auto;
    }

</style>



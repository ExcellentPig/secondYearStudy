<template>
    <div>
        <el-table :data="tableData" class="tb-edit" style="width: 100%" highlight-current-row  ref="multipleTable" @row-click="handleCurrentChange">
            <el-table-column label="id" width="180"  sortable prop="idx">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.idx" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.idx}}</span>
                </template>
            </el-table-column>
            <el-table-column label="日期" width="180"  sortable prop="date">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180"  sortable prop="name">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="地址"  sortable prop="address">
                <template scope="scope">
                    <el-input size="small" v-model="scope.row.address" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.address}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br>数据:{{tableData}}
    </div>
</template>
<script>
    export default {
        data() {
            return{
                tableData: [{
                    idx:'001',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    idx:'002',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    idx:'003',
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    idx:'004',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            handleCurrentChange(row, event, column) {
                console.log(row, event, column, event.currentTarget)
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
                this.tableData=this.tableData.filter(({ idx }) => idx !==row.idx,1);
            },
        }
    };
</script>

<style>
    .tb-edit .el-input {
        display: none
    }
    .tb-edit .current-row .el-input {
        display: block
    }
    .tb-edit .current-row .el-input+span {
        display: none
    }
</style>

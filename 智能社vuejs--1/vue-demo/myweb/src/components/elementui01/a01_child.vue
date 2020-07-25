<template>
    <div id="a01_child">
        <el-table
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
            <el-table-column
                    label="Date"
                    prop="date">
            </el-table-column>
            <el-table-column
                    label="Name"
                    prop="name">
            </el-table-column>
            <el-table-column
                    label="address"
                    prop="address">
            </el-table-column>
            <el-table-column
                    align="right">
                <template slot="header" slot-scope="slot">
                    <el-input
                            v-model="search"
                            size="mini"
                            placeholder="Type to search"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>

    export default{
        name:'a01_child',
        data() {
            return {
                tableData: [{
                    date: '2018-11-13',
                    name: '张三',
                    address: '江南'
                }, {
                    date: '2018-11-14',
                    name: '李四',
                    address: '大漠'
                }, {
                    date: '2018-11-15',
                    name: '王五',
                    address: '塞北'
                }, {
                    date: '2018-11-26',
                    name: 'Elvisde',
                    address: '极寒'
                }],
                search: ''
            }
        },
        methods:{
            handleEdit(index,row){
                console.log(1)
                //当handleEdit执行时，就会触发columnEdit函数；
                // this.$emit('columnEdit',{index,row})
            },
            handleDelete(index,row){
                console.log(2)
                this.tableData.splice(index, 1);
            }
        }

    }
</script>

<style scoped>

</style>

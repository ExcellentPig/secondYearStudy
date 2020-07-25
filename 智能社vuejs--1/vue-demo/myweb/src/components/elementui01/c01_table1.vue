<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-message"></i> 任务中心</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`待办任务(${unreadTask.length})`" name="first">
                    <el-table :data="unreadTask.slice((currentPage-1)*pageSize, currentPage*pageSize)" :show-header="false" style="width: 100%" @row-click="openDetails">
                        <el-table-column>
                            <template slot-scope="scope">
                                <span class="message-title" >{{scope.row.title}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" width="180"></el-table-column>
                    </el-table>
                    <el-pagination
                            stripe
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            @handleSelectionChange="handleSelectionChange"
                            @handleFilter="handleFilter"
                            @handelAction="handelAction"
                            layout="prev, pager, next"
                            :page-sizes="[10, 20, 30, 50]"
                            :page-size="pageSize"
                            page-count="5"
                            :total= "pageNums">
                    </el-pagination>
                </el-tab-pane>
                <el-tab-pane :label="`当前任务(${onreadTask.length})`" name="second">
                    <template>
                        <el-table :data="onreadTask.slice((currentPage-1)*pageSize, currentPage*pageSize)" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                        </el-table>
                        <el-pagination
                                stripe
                                @current-change="handleCurrentChange"
                                layout="prev, pager, next"
                                :page-size="pageSize"
                                :total="pageNums">
                        </el-pagination>
                    </template>
                </el-tab-pane>
                <el-tab-pane :label="`已完成任务(${finishTask.length})`" name="third">
                    <template>
                        <el-table :data="finishTask.slice((currentPage-1)*pageSize, currentPage*pageSize)" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                        </el-table>
                        <el-pagination
                                stripe
                                @current-change="handleCurrentChange"
                                layout="prev, pager, next"
                                :page-size="pageSize"
                                :total= "pageNums">
                        </el-pagination>
                    </template>
                </el-tab-pane>
                <el-tab-pane :label="`驳回任务(${rejectTask.length})`" name="fourth">
                    <template >
                        <el-table :data="rejectTask.slice((currentPage-1)*pageSize, currentPage*pageSize)" :show-header="false" style="width: 100%">
                            <el-table-column>
                                <template slot-scope="scope">
                                    <span class="message-title">{{scope.row.title}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" width="150"></el-table-column>
                        </el-table>
                        <el-pagination
                                stripe
                                @current-change="handleCurrentChange"
                                layout="prev, pager, next"
                                :page-size="pageSize"
                                :total= 'pageNums'>
                        </el-pagination>
                    </template>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'c01_table1',
        data() {
            return {
                message: 'first',
                showHeader: false,
                currentPage:1,
                pageSize:6,
                //消息总数
                pageNums:20,
                unreadTask: [{
                    date: '2018-09-02 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A1:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A2:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A3:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A4:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A5:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A6:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A7:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A8:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A9:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A10:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A11:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A12:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A13:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A14:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A15:今晚12点整发大红包，先到先得',
                }],
                onreadTask: [{
                    date: '2018-09-02 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A1:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A2:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A3:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A4:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A5:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A6:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A7:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A8:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A9:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A10:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A11:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A12:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A13:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A14:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A15:今晚12点整发大红包，先到先得',
                }],
                finishTask: [{
                    date: '2018-09-02 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A1:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A2:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A3:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A4:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A5:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A6:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A7:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A8:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A9:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A10:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A11:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A12:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A13:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A14:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A15:今晚12点整发大红包，先到先得',
                }],
                rejectTask: [{
                    date: '2018-09-02 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A1:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A2:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A3:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A4:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A5:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A6:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A7:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A8:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A9:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A10:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A11:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A12:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A13:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A14:今晚12点整发大红包，先到先得',
                },{
                    date: '2018-09-02 21:00:00',
                    title: 'A15:今晚12点整发大红包，先到先得',
                }]
            }
        },
        methods: {
            handleCurrentChange(currentPage){
                this.currentPage = currentPage
            },
            handleSizeChange: function (size) {
                this.pageSize = size
            },
            // 选中行
            handleSelectionChange (val) {
                console.log('val:', val)
            },
            // 编辑
            handleEdit (index, row) {
                console.log(' index:', index)
                console.log(' row:', row)
            },
            // 删除
            handleDel (index, row) {
                console.log(' index:', index)
                console.log(' row:', row)
            },

            //阅读消息
            openDetails(column) {
                console.log(column);
            },
        },
        computed: {
            unreadNum(){
                return this.unreadTask.length;
            }
        }
    }

</script>

<style>
    .message-title{
        cursor: pointer;
    }
    .handle-row{
        margin-top: 30px;
    }
</style>

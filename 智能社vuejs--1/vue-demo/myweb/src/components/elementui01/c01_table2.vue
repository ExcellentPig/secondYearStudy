<template>
    <div class="table">

        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 工序检查 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="container">

                <div class="handle-box">
                    <el-button type="warning" icon="el-icon-delete" class="handle-del mr10" @click="delGroup" :disabled="this.multipleSelection.length === 0||this.disabled" >批量删除
                    </el-button>
                    <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                    <el-button type="primary" icon="el-icon-search">搜索
                    </el-button>
                    <el-button type="primary" fixed="right" @click="handleAdd">新增+
                    </el-button>
                </div>

                <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" align="center"></el-table-column>
                    <el-table-column prop="Partld" label="零件编号" width="80" fixed>
                    </el-table-column>
                    <el-table-column prop="WallThicknessCpOne" label="壁厚检查点1" width="100">
                    </el-table-column>
                    <el-table-column prop="WallThicknessCpTwo" label="壁厚检查点2" width="100">
                    </el-table-column>
                    <el-table-column prop="WallThicknessCpThree" label="壁厚检查点3" width="100">
                    </el-table-column>
                    <el-table-column prop="WallThicknessCpFour" label="壁厚检查点4" width="100">
                    </el-table-column>
                    <el-table-column prop="WallThicknessCpFive" label="壁厚检查点5" width="100">
                    </el-table-column>
                    <el-table-column prop="WaxModelsNumber" label="蜡模编号" width="80">
                    </el-table-column>
                    <el-table-column prop="MouldNumber" label="胎具编号" width="80">
                    </el-table-column>
                    <el-table-column prop="Operator" label="操作员" width="80">
                    </el-table-column>
                    <el-table-column prop="PressingTime" label="压制时间" width="80">
                    </el-table-column>
                    <el-table-column prop="WaxInjectionTemperature" label="压蜡温度" width="80">
                    </el-table-column>
                    <el-table-column prop="RoomTemperature" label="房间温度" width="80">
                    </el-table-column>
                    <el-table-column prop="BlueRayCheck" label="蓝光检查" width="80">
                    </el-table-column>
                    <el-table-column prop="RadialCheck" label="射线检查" width="80">
                    </el-table-column>
                    <el-table-column prop="VisualCheck" label="目视检查" width="80">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="160" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pagination">
                    <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :page-count="pagecount">
                    </el-pagination>
                </div>
            </div>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="60%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="Partld">
                    <el-input v-model="form.Partld"></el-input>
                </el-form-item>
                <el-form-item label="WallThicknessCpOne">
                    <el-input v-model="form.WallThicknessCpOne"></el-input>
                </el-form-item>
                <el-form-item label="WallThicknessCpTwo">
                    <el-input v-model="form.WallThicknessCpTwo"></el-input>
                </el-form-item>
                <el-form-item label="WallThicknessCpThree">
                    <el-input v-model="form.WallThicknessCpThree"></el-input>
                </el-form-item>
                <el-form-item label="WallThicknessCpFour">
                    <el-input v-model="form.WallThicknessCpFour"></el-input>
                </el-form-item>
                <el-form-item label="WallThicknessCpFive">
                    <el-input v-model="form.WallThicknessCpFive"></el-input>
                </el-form-item>
                <el-form-item label="PressingTime">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.PressingTime" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="RoastTemperature">
                    <el-input v-model="form.MouldNumber"></el-input>
                </el-form-item>
                <el-form-item label="NumberOfCleans">
                    <el-input v-model="form.RadialCheck"></el-input>
                </el-form-item>
                <el-form-item label="Operator">
                    <el-input v-model="form.Operator"></el-input>
                </el-form-item>
                <el-form-item label="WaxModelsNumber">
                    <el-input v-model="form.WaxModelsNumber"></el-input>
                </el-form-item>
                <el-form-item label="WaxInjectionTemperature">
                    <el-input v-model="form.WaxInjectionTemperature"></el-input>
                </el-form-item>
                <el-form-item label="RoomTemperature">
                    <el-input v-model="form.RoomTemperature"></el-input>
                </el-form-item>
                <el-form-item label="BlueRayCheck">
                    <el-input v-model="form.BlueRayCheck"></el-input>
                </el-form-item>
                <el-form-item label="VisualCheck">
                    <el-input v-model="form.VisualCheck"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
        <!--添加信息弹出框-->
        <el-dialog title="添加" :visible.sync="addVisible">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="WallThicknessCpOne">
                    <el-input v-model="form.WallThicknessCpOne"></el-input>
                </el-form-item>
                <el-form-item label="WallThicknessCpTwo">
                    <el-input v-model="form.WallThicknessCpTwo"></el-input>
                </el-form-item>
                <el-form-item label="WallThicknessCpThree">
                    <el-input v-model="form.WallThicknessCpThree"></el-input>
                </el-form-item>
                <el-form-item label="WallThicknessCpFour">
                    <el-input v-model="form.WallThicknessCpFour"></el-input>
                </el-form-item>
                <el-form-item label="WallThicknessCpFive">
                    <el-input v-model="form.WallThicknessCpFive"></el-input>
                </el-form-item>
                <el-form-item label="PressingTime">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.PressingTime" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="MouldNumber">
                    <el-input v-model="form.MouldNumber"></el-input>
                </el-form-item>
                <el-form-item label="RadialCheck">
                    <el-input v-model="form.RadialCheck"></el-input>
                </el-form-item>
                <el-form-item label="Operator">
                    <el-input v-model="form.Operator"></el-input>
                </el-form-item>
                <el-form-item label="WaxModelsNumber">
                    <el-input v-model="form.WaxModelsNumber"></el-input>
                </el-form-item>
                <el-form-item label="WaxInjectionTemperature">
                    <el-input v-model="form.WaxInjectionTemperature"></el-input>
                </el-form-item>
                <el-form-item label="RoomTemperature">
                    <el-input v-model="form.RoomTemperature"></el-input>
                </el-form-item>
                <el-form-item label="BlueRayCheck">
                    <el-input v-model="form.BlueRayCheck"></el-input>
                </el-form-item>
                <el-form-item label="VisualCheck">
                    <el-input v-model="form.VisualCheck"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveAdd">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'c01_table2',
        data() {
            return {
                url: './test.json',
                pagesize: 20,
                multipleSelection: [],//选中显示的值
                pagecount: 0,
                select_word: '',
                tableData: [],
                disabled:true,
                pageData: [],
                del_list: [],
                cur_page: 0,
                goal_page: 19,
                editVisible: false,
                is_search: false,
                is_add: false,
                addVisible: false,
                delVisible: false,
                form: {
                    Partld: 0,
                    WallThicknessCpThree: 0,
                    MouldNumber: '',
                    RadialCheck: '',
                    WallThicknessCpFive: 0,
                    Operator: '',
                    WallThicknessCpFour: 0,
                    WaxModelsNumber: 0,
                    WallThicknessCpOne: 0,
                    WallThicknessCpTwo: 0,
                    PressingTime: undefined,
                    WaxInjectionTemperature: 0,
                    RoomTemperature: 0,
                    BlueRayCheck: '',
                    VisualCheck: ''
                },
                idx: -1
            }
        },
        created() {
            this.getData();
        },

        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = (val - 1) * this.pagesize;
                this.goal_page = this.cur_page + this.pagesize;
                this.getData();
            },
            handleClick(row) {
                // console.log(row);
            },
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    Partld: item.Partld,
                    WaxModelsNumber: item.WaxModelsNumber,
                    MouldNumber: item.MouldNumber,
                    RadialCheck: item.RadialCheck,
                    WallThicknessCpFive: item.WallThicknessCpFive,
                    Operator: item.Operator,
                    WallThicknessCpFour: item.WallThicknessCpFour,
                    WallThicknessCpThree: item.WallThicknessCpThree,
                    WallThicknessCpTwo: item.WallThicknessCpTwo,
                    WallThicknessCpOne: item.WallThicknessCpOne,
                    PressingTime: item.PressingTime,
                    WaxInjectionTemperature: item.WaxInjectionTemperature,
                    RoomTemperature: item.RoomTemperature,
                    BlueRayCheck: item.BlueRayCheck,
                    VisualCheck: item.VisualCheck
                };
                this.editVisible = true;
            },
            handleDelete(index, row) {
                this.idx = index;
                this.delVisible = true;
            },
            getData() {
                this.$axios.get(this.url, {
                    params: {
                        start: this.cur_page,
                        end: this.goal_page
                    }
                }).then((res) => {
                    this.tableData = res.data.list;
                    this.pageData = res.data.page;
                    this.pagecount = parseInt(this.pageData.pagecount);
                })
            },
            // 保存编辑
            saveEdit() {
                let saveEditData = this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                axios.put(this.url, saveEditData, {
                    params: {
                        id: "eq." + this.form.id
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                    }
                });
                this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            },
            // 确定删除
            deleteRow() {
                console.log(this.tableData[this.idx].Partld);
                this.tableData.splice(this.idx, 1);
                // axios.delete(this.url,{
                //     params:{
                //         Partld:"eq."+this.tableData[this.idx].Partld
                //     },
                //     headers:{
                //         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                //     }
                // }).then((res)=>{
                //     console.log(res.data)
                // });
                this.$message.success('删除成功');
                this.delVisible = false;
            },
            handleAdd() {
                this.addVisible = true
            },
            saveAdd() {
                let addData = this.form;
                this.tableData.unshift(addData);
                axios.post(this.url, addData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                });
                this.$message.success('添加成功');
                this.addVisible = false;
            },
            search() {
                this.is_search = true;
            },
            // formatter(row, column) {
            //     return row.address;
            // },
            filterTag(value, row) {
                return row.tag === value;
            },
            delGroup() {
                // const length = this.multipleSelection.length;
                //let str = '';
                this.del_list = this.del_list.concat(this.multipleSelection);
                // for (let i = 0; i < length; i++) {
                //     str += this.multipleSelection[i].Partld + ' ';
                //     // console.log(this.multipleSelection[i].Partld);
                // }
                this.tableData.splice(this.del_list,this.multipleSelection.length);
                this.$message.success('删除成功！');
                this.multipleSelection = [];
                this.disabled=false;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                this.disabled = false;
            }
        }
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 250px;
        display: inline-block;
    }

    .del-dialog-cnt {
        font-size: 16px;
        text-align: center
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }
</style>


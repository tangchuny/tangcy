<template>
    <div class="">
       <el-table class="o-pt" :data="tableData" ref="table" style="width: 100%"  @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            width="30">
                        </el-table-column>
                        <el-table-column prop="account0" label="会员账号" align="center" width="100"></el-table-column>
                        <el-table-column prop="account1" sortable label="姓氏" align="center" width="100"></el-table-column>
                        <el-table-column prop="account2" sortable label="名字" align="center" width="100"></el-table-column>
                        <el-table-column prop="account3" sortable label="证件号" align="center" width="100"></el-table-column>
                        <el-table-column prop="account4" label="绑定手机" align="center" width="100"></el-table-column>
                        <el-table-column prop="account5" label="注册时间" align="center" width="100"></el-table-column>
                        <el-table-column prop="account6" label="是否开启谷歌认证" align="center" width="150">
                             <template slot-scope="scope">
                                <el-switch
                                v-model="account6"
                                active-color="#13ce66"
                                inactive-color="#999999">
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column prop="account7" label="是否开启手机认证" align="center" width="150">
                            <template slot-scope="scope">
                                <el-switch
                                v-model="account7"
                                active-color="#13ce66"
                                inactive-color="#999999">
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column prop="account8" label="是否实名" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account9" label="是否禁用" align="center" width="120">
                            <template slot-scope="scope">
                                <el-switch
                                v-model="account9"
                                active-color="#13ce66"
                                inactive-color="#999999">
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column prop="account10" label="是否开启交易" align="center" width="120">
                            <template slot-scope="scope">
                                <el-switch
                                v-model="account10"
                                active-color="#13ce66"
                                inactive-color="#999999">
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column prop="account11" label="是否激活" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account12" label="照片地址" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account13" label="操作" align="center" width="120">
                             <template slot-scope="scope">
                                <a class="t-link-blue o-pr-m">详情</a>
                                <a class="t-link-blue">删除</a>
                            </template>
                        </el-table-column>
                    </el-table>
    </div>
</template>
<script>
import jsons from '../../../json/user-info.json'

export default {
    data(){
        return{
            account9: true,
            input5: '',
            select: '',
            tableData: [
                
            ],
        }
    },
    methods: {
        toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    mounted(){
        this.tableData = jsons.data
    }
}
</script>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

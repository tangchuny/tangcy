<template>
    <div class="">
       <el-table class="o-pt" :data="tableData" ref="table" style="width: 100%"  @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            width="30">
                        </el-table-column>
                        <el-table-column prop="account0" label="用户账号" align="center" width="100"></el-table-column>
                        <el-table-column prop="account1" sortable label="姓氏" align="center" width="100"></el-table-column>
                        <el-table-column prop="account2" sortable label="名字" align="center" width="100"></el-table-column>
                        <el-table-column prop="account3" sortable label="币种名称" align="center" width="120"></el-table-column>
                        <el-table-column prop="account4" label="提币钱包地址" align="center" width="120"></el-table-column>
                        <el-table-column prop="account5" label="状态" align="center" width="100">
                          
                        </el-table-column>
                        <el-table-column prop="account5" label="操作时间" align="center" width="100"></el-table-column>
                        <el-table-column prop="account6" label="充币数量(个)" align="center" width="150">
                        </el-table-column>
                        <el-table-column prop="account7" label="充币手续费" align="center" width="150">
                        </el-table-column>
                        <el-table-column prop="account8" label="实际到账数" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account9" label="交易订单号" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account10" label="备注" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account13" label="操作" align="center" width="120">
                             <template slot-scope="scope">
                                <a class="t-link-blue">查看详情</a>
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

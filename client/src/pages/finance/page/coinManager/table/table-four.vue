<template>
    <div class="">
        <el-table class="o-pt" :data="tableData" ref="table" style="width: 100%"  @selection-change="handleSelectionChange">
                         <el-table-column
                            type="selection"
                            width="30">
                        </el-table-column>
                        <el-table-column prop="account0" label="用户账号" align="center"></el-table-column>
                        <el-table-column prop="account1" sortable label="姓氏" align="center"></el-table-column>
                        <el-table-column prop="account1" sortable label="名字" align="center"></el-table-column>
                        <el-table-column prop="account11" label="币种名称" align="center" >
                        </el-table-column>
                        <el-table-column prop="account12" label="可用资金" align="center" >
                        </el-table-column>
                        <el-table-column prop="account12" label="状态" align="center" >
                        </el-table-column>
                         <el-table-column prop="account12" label="提币钱包地址" align="center" width="200">
                        </el-table-column>
                        <el-table-column prop="account12" label="交易订单号" align="center" >
                        </el-table-column>
                         <el-table-column prop="account12" label="备注" align="center" >
                        </el-table-column>
                        <el-table-column prop="account13" label="驳回原因" align="center">
                        </el-table-column>
                    </el-table>
    </div>
</template>
<script>
import jsons from '../../../json/user-info.json'

export default {
    name: 'table-fund',
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

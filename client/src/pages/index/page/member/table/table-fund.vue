<template>
    <div class="">
        <el-table class="o-pt" :data="tableData" ref="table" style="width: 100%"  @selection-change="handleSelectionChange">
                     
                        <el-table-column prop="account0" label="会员账号" align="center"></el-table-column>
                        <el-table-column prop="account1" sortable label="姓氏" align="center"></el-table-column>
                        <el-table-column prop="account11" label="资金账户号" align="center" >
                        </el-table-column>
                        <el-table-column prop="account12" label="可用资金" align="center" >
                        </el-table-column>
                         <el-table-column prop="account12" label="冻结资金" align="center" >
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

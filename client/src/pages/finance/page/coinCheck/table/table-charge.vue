<template>
    <div class="">
       <el-table class="o-pt" :data="tableData" ref="table" style="width: 100%"  @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            width="30">
                        </el-table-column>
                        <el-table-column prop="account0" label="用户名" align="center"></el-table-column>
                        <el-table-column prop="account1" sortable label="交易币" align="center"></el-table-column>
                        <el-table-column prop="account11" label="定价比" align="center" >
                        </el-table-column>
                        <el-table-column prop="account12" label="买方费率" align="center" >
                        </el-table-column>
                         <el-table-column prop="account12" label="卖方费率" align="center" >
                        </el-table-column>
                        <el-table-column prop="account13" label="操作" align="center">
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
    name: 'table-charge',
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

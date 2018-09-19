<template>
    <div class="">
       <el-table class="o-pt" :data="tableData" ref="table" style="width: 100%"  @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            width="30">
                        </el-table-column>
                        <el-table-column prop="account0" label="用户账号" align="center"></el-table-column>
                        <el-table-column prop="account1" sortable label="姓氏" align="center"  ></el-table-column>
                        <el-table-column prop="account2" sortable label="名字" align="center"  ></el-table-column>
                        <el-table-column prop="account3" sortable label="币种名称" align="center"  ></el-table-column>
                        <el-table-column prop="account4" label="充币钱包地址" align="center" width="300"></el-table-column>
                        <el-table-column prop="account5" label="操作时间" align="center"  ></el-table-column>
                        <el-table-column prop="account10" label="备注" align="center">
                        </el-table-column>
                    </el-table>
                    <div class="c-tc o-m-b">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage4"
                      :page-sizes="[100, 200, 300, 400]"
                      :page-size="100"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="400">
                    </el-pagination>
                    </div>
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
            currentPage4: 4,
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

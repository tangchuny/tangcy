<template>
    <div class="">
        <el-table class="o-pt" :data="tableData" ref="table" style="width: 100%"  @selection-change="handleSelectionChange">
                        <!-- <el-table-column
                            type="selection"
                            width="30">
                        </el-table-column> -->
                        <el-table-column prop="account0" label="买方用户账号" align="center" width=120 ></el-table-column>
                        <el-table-column prop="account1" sortable label="卖方用户账号" align="center"  width=160></el-table-column>
                        <el-table-column prop="account11" label="成交时间" align="center"  width=120>
                        </el-table-column>
                        <el-table-column prop="account12" label="成交时间" align="center"  width=120>
                        </el-table-column>
                         <el-table-column prop="account12" label="交易币种" align="center"  width=120>
                        </el-table-column>

                         <el-table-column prop="account12" label="定价币种" align="center"  width=120>
                        </el-table-column>
                         <el-table-column prop="account12" label="买方手续费" align="center"  width=120 >
                        </el-table-column>

                         <el-table-column prop="account12" label="卖方手续费" align="center"  width=120>
                        </el-table-column>
                         <el-table-column prop="account12" label="成交均价" align="center" width=120 >
                        </el-table-column>

                         <el-table-column prop="account12" label="成交数量" align="center"  width=120>
                        </el-table-column>
                         <el-table-column prop="account12" label="成交总价" align="center"  width=120>
                        </el-table-column>

                        <!-- <el-table-column prop="account13" label="操作" align="center" width=120>
                             <template slot-scope="scope">
                                <a class="t-link-blue o-pr-m">详情</a>
                                <a class="t-link-blue">删除</a>
                            </template>
                        </el-table-column> -->
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

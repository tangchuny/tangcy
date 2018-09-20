<template>
    <div class="">
       <el-table class="o-pt" :data="tableData" ref="table" style="width: 100%"  @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            width="30">
                        </el-table-column>
                        <el-table-column prop="account0" label="委托人" align="center" width="100"></el-table-column>
                        <el-table-column prop="account1" sortable label="姓氏" align="center" width="100"></el-table-column>
                        <el-table-column prop="account2" sortable label="名字" align="center" width="100"></el-table-column>
                        <el-table-column prop="account3" sortable label="委托时间" align="center" width="140"></el-table-column>
                        <el-table-column prop="account4" label="交易币种" align="center" width="100"></el-table-column>
                        <el-table-column prop="account5" label="定价币种" align="center" width="100"></el-table-column>
                        <el-table-column prop="account6" label="委托类型" align="center" width="150">
                             
                        </el-table-column>
                        <el-table-column prop="account7" label="出价类型" align="center" width="150">
                            <template slot-scope="scope">
                                <el-switch
                                v-model="account7"
                                active-color="#13ce66"
                                inactive-color="#999999">
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column prop="account8" label="委托价" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account9" label="委托数量" align="center" width="120">
                           
                        </el-table-column>
                        <el-table-column prop="account10" label="委托金额" align="center" width="120">
                            
                        </el-table-column>
                        <el-table-column prop="account11" label="成交数量" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account12" label="成交均价" align="center" width="120">
                        </el-table-column>
                         <el-table-column prop="account12" label="委托单号" align="center" width="120">
                        </el-table-column>
                         <el-table-column prop="account12" label="状态" align="center" width="120">
                        </el-table-column>
                         <el-table-column prop="account12" label="来源" align="center" width="120">
                        </el-table-column>
                         <el-table-column prop="account12" label="交易明细" align="center" width="120">
                        </el-table-column>
                         <el-table-column prop="account12" label="客户IP" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account13" label="操作" align="center" width="120">
                             <template slot-scope="scope">
                                <a class="t-link-blue o-pr-m">取消委托</a>
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

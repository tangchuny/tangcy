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
                        <el-table-column prop="account3" sortable label="币种名称" align="center" width="130"></el-table-column>
                        <el-table-column prop="account4" label="充币钱包地址" align="center" width="200"></el-table-column>
                        <el-table-column prop="account5" label="操作时间" align="center" width="130"></el-table-column>
                        <el-table-column prop="account6" label="充币数量(个)" align="center" width="150">
                        </el-table-column>
                        <el-table-column prop="account7" label="手续费" align="center" width="150">
                        </el-table-column>
                        <el-table-column prop="account8" label="实际到账数" align="center" width="150">
                        </el-table-column>
                        <el-table-column prop="account9" label="交易订单号" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account10" label="备注" align="center" width="120">
                        </el-table-column>
                        <el-table-column prop="account13" label="操作" align="center" width="120">
                             <template slot-scope="scope">
                                <a class="t-link-blue o-pr-m" @click="Edit">通过</a>
                                <a class="t-link-blue" @click="unPass(scope.row)">驳回</a>
                            </template>
                        </el-table-column>
                    </el-table>
                    <Editer v-model="Editer.view" :title="Editer.title" :form="Editer.form"></Editer>
                    <un-pass v-model="Show.view" :title="Show.title" :form="Show.form"></un-pass>

    </div>
</template>
<script>
import jsons from '../../../json/user-info.json'
import Editer from '../modal/modal-pass.vue'
import unPass from '../modal/modal-unPass.vue'
export default {
    data(){
        return{
            account9: true,
            input5: '',
            select: '',
            tableData: [
                
            ],
            Show : {
                view : false,
                title : null,
                Params : null,
            },
        }
    },
    components : {
        Editer,
        unPass,
    },
    methods: {
        unPass(data){
            this.Show.view  = true
            this.Show.title = '驳回该提币申请'
            this.Show.form  = data ? this.Origin(data) : null            
        },
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

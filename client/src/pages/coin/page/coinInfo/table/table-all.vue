<template>
    <div class="">
       <el-table class="o-pt" :data="tableData" ref="table" style="width: 100%"  @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            width="30">
                        </el-table-column>
                        <el-table-column prop="account0" label="币种名称" align="center" ></el-table-column>
                        <el-table-column prop="account1" sortable label="发行量（个）" align="center"></el-table-column>
                        <el-table-column prop="account2" sortable label="发行单价(￥)" align="center" ></el-table-column>
                        <el-table-column prop="account3" sortable label="发行方名称" align="center" ></el-table-column>
                        <el-table-column prop="account4" label="产品状态" align="center" ></el-table-column>
                        <el-table-column prop="account5" label="时间" align="center"></el-table-column>
                        <el-table-column prop="account6" label="交易状态" align="center">
                        </el-table-column>
                        <el-table-column prop="account13" label="操作" align="center" width="200">
                             <template slot-scope="scope">
                                  <el-button size="mini" type="warning" @click="showDetail(scope.row,'配置交易参数')" round>配置交易参数</el-button>
                                  <el-button size="mini" @click="Edit(scope.row)" round>修改</el-button>
                            </template>
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
                  <modal-setting v-model="Show.view" :title="Show.title" :form="Show.form"></modal-setting>
                  <Editer v-model="Editer.view" :title="Editer.title" :form="Editer.form"></Editer>
    </div>
</template>
<script>
import jsons from '../../../json/user-info.json'
import modalSetting from '../modal/modal-setting.vue'
import Editer from '../modal/modal-editer.vue'
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
    components: {
      modalSetting,
      Editer
    },
    methods: {
         showDetail(data, title){
            this.Show.view  = true
            this.Show.title = title
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
      },
      setting() {
        this.show = true
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

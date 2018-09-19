<template>
    <div class="o-m-l c-bg-f">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="充币地址" name="first">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-2 c-tr">
                                    <el-button type="primary" plain>批量通过</el-button>
                                    <el-button type="success" plain>批量驳回</el-button>
                                    <el-button type="info" plain>刷新</el-button>
                                    <el-button type="warning" plain>导出</el-button>
                            </div>
                        </div>
                    </div>
                <table-info></table-info>
            </el-tab-pane>
            <el-tab-pane label="提币地址" name="second">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-2 c-tr">
                                    <el-button type="primary" plain>批量通过</el-button>
                                    <el-button type="success" plain>批量驳回</el-button>
                                    <el-button type="info" plain>刷新</el-button>
                                    <el-button type="warning" plain>导出</el-button>
                            </div>
                        </div>
                    </div>
               
                <table-fund></table-fund>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import memberSearch from './modal/search.vue'
import tableInfo from './table/table-info.vue'
import tableFund from './table/table-fund.vue'
import tableCharge from './table/table-charge.vue'
export default {
    data(){
        return{           
            activeName: 'first',
            input5: '',
            select: ''
        }
    },
    components : {
        memberSearch,
        tableInfo,
        tableFund,
        tableCharge,
    },
   
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

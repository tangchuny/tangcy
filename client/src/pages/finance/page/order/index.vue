<template>
    <div class="o-m-l c-bg-f">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="当前委托" name="first">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                             <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="primary" plain>批量取消委托</el-button>
                                    <el-button type="success" plain>成功按钮</el-button>
                                    <el-button type="danger" plain>导出</el-button>
                                    <el-button type="info" @click="Refresh">刷新</el-button>

                            </div>
                        </div>
                    </div>
               
                <table-one></table-one>
            </el-tab-pane>
            <el-tab-pane label="成交记录查询" name="second">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="primary" plain>主要按钮</el-button>
                            </div>
                        </div>
                    </div>
               
                <table-fund></table-fund>
            </el-tab-pane>
            <el-tab-pane label="历史委托" name="third">
                历史委托
            </el-tab-pane>
            <el-tab-pane label="全部待成交委托" name="four">
                全部待成交委托
            </el-tab-pane>
             <el-tab-pane label="部分成交已撤交委托" name="five">
                部分成交已撤交委托
            </el-tab-pane>
            <el-tab-pane label="全部成交委托" name="six">
                全部成交委托
            </el-tab-pane>
            <el-tab-pane label="全部撤交委托" name="seven">
                全部撤交委托
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import memberSearch from './modal/search.vue'
import tableOne from './table/table-one.vue'
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
        tableOne,
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

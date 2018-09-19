<template>
    <div class="o-m-l c-bg-f coin-info">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="primary" @click="Edit">添加交易对</el-button>
                                    <el-button type="info">刷新</el-button>
                                    <el-button type="danger">批量删除</el-button>
                            </div>
                        </div>
                    </div>
                <table-all></table-all>
            </el-tab-pane>
            <el-tab-pane label="已开启" name="second">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                   <el-button type="primary" @click="Edit">添加交易对</el-button>
                                    <el-button type="info">刷新</el-button>
                            </div>
                        </div>
                    </div>
               
                <table-fund></table-fund>
            </el-tab-pane>
            <el-tab-pane label="已关闭" name="third">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                   <el-button type="primary" @click="Edit">添加交易对</el-button>
                                    <el-button type="info">刷新</el-button>
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
import tableAll from './table/table-all.vue'
import tableFund from './table/table-fund.vue'
import tableCharge from './table/table-charge.vue'
export default {
    name: 'coin-trade',
    data(){
        return{           
            activeName: 'first',
            input5: '',
            select: ''
        }
    },
    components : {
        memberSearch,
        tableAll,
        tableFund,
        tableCharge,
    },
   
}
</script>

<style >
.coin-info .el-tabs__header{
        padding: 10px;
    }
    

 .coin-info .el-select .el-input {
    width: 130px;
  }
  .coin-info .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

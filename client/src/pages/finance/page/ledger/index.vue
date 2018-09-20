<template>
    <div class="o-m-l c-bg-f">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="归集币种冷账户明细" name="first">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="primary" plain >刷新</el-button>
                            </div>
                        </div>
                    </div>
                <table-one></table-one>
            </el-tab-pane>
            <el-tab-pane label="归集币种冷账户" name="second">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="primary" plain >刷新</el-button>
                                    <el-button type="warning" plain >转入线下</el-button>
                            </div>
                        </div>
                    </div>
               
                <table-two></table-two>
            </el-tab-pane>
            <el-tab-pane label="代币资产信息" name="third">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="primary" plain >刷新</el-button>
                                    <el-button type="primary" plain >充矿工费</el-button>
                                    <el-button type="warning" plain >归集</el-button>
                                    <el-button type="danger" plain>查询</el-button>
                            </div>
                        </div>
                    </div>
               
                <table-three></table-three>
            </el-tab-pane>
            <el-tab-pane label="交易手续费查询" name="four">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="primary" plain >刷新</el-button>
                            </div>
                        </div>
                    </div>
               
                <table-four></table-four>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import memberSearch from './modal/search.vue'
import tableOne from './table/table-one.vue'
import tableTwo from './table/table-two.vue'
import tableThree from './table/table-three.vue'
import tableFour from './table/table-four.vue'
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
        tableTwo,
        tableThree,
        tableFour
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

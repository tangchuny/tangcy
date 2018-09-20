<template>
    <div class="o-m-l c-bg-f coin-info">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="充币地址" name="first">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="info" @click="Refresh">刷新</el-button>
                                    <el-button type="warning">导出</el-button>
                            </div>
                        </div>
                    </div>
                <table-all></table-all>
            </el-tab-pane>
            <el-tab-pane label="提币地址" name="second">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="info" @click="Refresh">刷新</el-button>
                                    <el-button type="warning">导出</el-button>
                            </div>
                        </div>
                    </div>
               
                <table-out></table-out>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import memberSearch from './modal/search.vue'
import tableAll from './table/table-all.vue'
import tableOut from './table/table-out.vue'
export default {
    name: 'coin-address',
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
        tableOut,
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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

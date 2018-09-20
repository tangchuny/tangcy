<template>
    <div class="o-m-l c-bg-f">
        <el-tabs v-model="activeName">
            <el-tab-pane label="充币成功查询" name="first">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="info" @click="Refresh">刷新</el-button>
                                    <el-button type="warning" >导出</el-button>
                            </div>
                        </div>
                    </div>
                <table-one></table-one>
            </el-tab-pane>
            <el-tab-pane label="充币失败查询" name="second">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="info" @click="Refresh">刷新</el-button>
                                    <el-button type="warning" >导出</el-button>
                            </div>
                        </div>
                    </div>
               
                <table-two></table-two>
            </el-tab-pane>
            <el-tab-pane label="提币成功查询" name="third">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="info" @click="Refresh">刷新</el-button>
                                    <el-button type="warning" >导出</el-button>
                            </div>
                        </div>
                    </div>
               
                <table-three></table-three>
            </el-tab-pane>
            <el-tab-pane label="提币失败查询" name="four">
                <div class="o-m-l c-bg-f">
                    <div class="l-flex o-m-m">
                            <member-search></member-search>
                            <div class="l-flex-1 c-tr">
                                    <el-button type="info" @click="Refresh">刷新</el-button>
                                    <el-button type="warning" >导出</el-button>
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
        tableFour,
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

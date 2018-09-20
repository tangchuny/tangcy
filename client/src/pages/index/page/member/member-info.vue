<template>
    <div class="o-m-l c-bg-f">
      assssss  
    </div>
</template>
<script>
import memberSearch from './search.vue'
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

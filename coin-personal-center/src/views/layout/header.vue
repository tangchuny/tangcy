<template>
    <div class="l-flex nav">
        <div class="l-flex-1">个人中心</div>
        <div class="l-flex-3">
            <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  
</el-menu>

        </div>
        <div class="l-flex-1 c-tr">asdf</div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            activeIndex2: '1',
        }
    }
}
</script>


<style scoped lang="scss">
    @import '~scss_vars';
    .nav{
        // background: #0d0f32;
    }
    .el-menu{
         background-color: #0d0f32;
    }
</style>
<style lang="scss">
    @import "../../../common/style/config.scss";
    .Header {
        background: rgb(84, 92, 100);
        height: 60px; line-height: 60px;
    }
</style>

<template>
    <div class="Header l-flex">
       <div class="l-flex-1 c-color-f o-ml-l c-text-12">币种信息管理后台</div>
       <div class="l-flex-1">
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-menu-item index="1">货币基础信息管理</el-menu-item>
                <el-menu-item index="2">币地址管理</el-menu-item>
                <el-menu-item index="3">交易对管理</el-menu-item>
            </el-menu>

       </div>
       <div class="l-flex-1 c-color-g-3 c-tr c o-mr-l">
           <span>May0526 </span>
           <span class="o-mlr-s">|</span>
           <span>退出</span>
       </div>
    </div>
</template>

<script>

export default {
    name : 'Header',
    data (){
        return {

        }
    },
}
</script>
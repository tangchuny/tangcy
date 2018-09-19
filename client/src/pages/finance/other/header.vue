<style lang="scss">
    @import "../../../common/style/config.scss";
    .Header {
        background: rgb(84, 92, 100);
        height: 60px; line-height: 60px;
    }
</style>

<template>
    <div class="Header l-flex">
       <div class="l-flex-1 c-color-f o-ml-l c-text-12">财务管理后台</div>
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
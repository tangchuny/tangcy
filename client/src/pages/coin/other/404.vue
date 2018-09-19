<style lang="scss">
    @import "../../../common/style/config.scss";
    .Error {
        padding:8rem 0; text-align:center;
        h1 {font-size:5rem; margin:.7rem 0; color:#d5d5d5;}
    }
</style>

<template>
    <div class="Error">
        <h1><b>404</b></h1>
        <h2 class="c-color-t"><b>THIS PAGE NOT FOUND !</b></h2>
        <h5 class="o-mt">抱歉，当前页面不存在</h5>
    </div>
</template>

<script>

export default {
    name : 'Error',
    data (){
        return {

        }
    },
}
</script>
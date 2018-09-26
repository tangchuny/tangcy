<template>
    <div class="u-border-t o-p-b">
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">币种</span>
                    <span class="">{{Params.tradeCoin}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">总金额</span>
                    <span class="c-color-g-3">{{Params.price}}</span>
                </div>
            </div>
            
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">提币地址余额</span>
                    <span class="c-color-g-3">{{Params.price}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">时间</span>
                    <span class="c-color-g-3">{{Params.time}}</span>
                </div>
               
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">提币地址</span>
                    <span class="c-color-g-3">{{Params.walletAddr}}</span>
                </div>
                
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">冷钱包地址</span>
                    <span class="c-color-g-3">{{Params.walletAddr}}</span>
                </div>
                
            </div>


        </div>
</template>
<script>
export default {
    data() {
        return{
            Params: {

            }
        }
    },
    props: ['params'],
    wathc: {
        params(val) {
        }
    },
    created() {
        
        this.Params = this.params
    }
}
</script>
<style lang="scss" scoped>
.t-w{
    width: 120px;
    text-align: right;
    margin-right: 20px;
}
</style>



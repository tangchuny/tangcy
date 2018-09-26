<template>
    <div class="u-border-t o-p-b">
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">会员账号</span>
                    <span class="">{{Params.email}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">姓氏：</span>
                    <span class="c-color-g-3">{{Params.firstName}}</span>
                </div>
            </div>
            
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">名字</span>
                    <span class="c-color-g-3">{{Params.lastName}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">币种名称</span>
                    <span class="c-color-g-3">{{Params.tradeCoin}}</span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">提币钱包地址</span>
                    <span class="c-color-g-3">{{Params.walletAddr}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">操作时间</span>
                    <span class="c-color-g-3">{{Params.time}}</span>
                </div>
            </div>

             <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">提币数量</span>
                    <span class="c-color-g-3">{{Params.number}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">手续费</span>
                    <span class="c-color-g-3">{{Params.price}}</span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">实际到账数</span>
                    <span class="c-color-g-3">{{Params.number}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">交易订单号</span>
                     <span class="c-color-g-3">{{Params.id}}</span>
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



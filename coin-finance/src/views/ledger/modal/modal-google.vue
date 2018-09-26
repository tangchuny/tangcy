<template>
    <div class="u-border-t o-p-b">
        <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">币种</span>
                    <span class="">
                        {{Params.tradeCoin}}
                    </span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">总金额</span>
                    <span class="c-color-g-3">
                        {{Params.price}}
                    </span>
                </div>
            </div> 

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">提币地址</span>
                    <span class="c-color-g-3">
                        {{Params.walletAddr}}
                    </span>
                </div>
                
            </div> 

             <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">冷钱包地址</span>
                    <span class="c-color-g-3">
                        {{Params.walletAddr}}
                    </span>
                </div>
                
            </div> 


            <div class="l-flex  c-line-xxl">
                    <div class="l-flex-1 l-flex">
                        <span class="t-w">转出金额</span>
                        <span class="">
                            <el-input v-model="numbers"></el-input>
                        </span>
                    </div>
                </div> 
        <el-alert
                    class="o-mb-l"
                    title="*不要透露密码、短信和谷歌验证码给任何人"
                    type="warning">
                </el-alert>
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">谷歌验证码</span>
                    <el-input v-model="verify"></el-input>
                </div>
            </div>
             <div slot="footer" class="dialog-footer c-tr">
				<el-button @click.native="$emit('exit')">取消</el-button>
				<el-button type="primary" @click.native="$emit('exit')" :loading="addLoading">提交</el-button>
			</div>
        </div>
</template>
<script>
export default {
    data() {
        return{
            verify: '',
            numbers: null,
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



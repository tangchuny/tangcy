<template>
        <div class="u-border-t o-p-b">
            
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">交易币种</span>
                    <span ><el-input v-model="Params.tradeCoin"></el-input></span>

                </div>
                <div class="l-flex-2 l-flex">
                    <span class="t-w">定价币种</span>
                     <span ><el-input v-model="Params.priceCoin"></el-input></span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">初始价格</span>
                    <span ><el-input v-model="Params.tradeCoin"></el-input></span>

                </div>
                <div class="l-flex-2 l-flex">
                    <span class="t-w">开启/关闭交易</span>
                     <span >
                         <el-switch
                            v-model="Params.isTradeable"
                            active-color="#13ce66"
                            inactive-color="#dedede">
                        </el-switch>
                     </span>
                </div>
            </div>

               
              <div slot="footer" class="dialog-footer c-tc o-mt-l">
                <el-button @click="$emit('exit')">取 消</el-button>
                <el-button type="primary" @click="$emit('exit')">确 定</el-button>
              </div>
        </div>
       
</template>
<script>
export default {
    name: 'trade-modal-edit',
    data() {
        return{
            value1: true,
            value2: true,
            radio: '1',
            desc: '请输入...',
            Params: {
                tradeCoin: null,
                priceCoin: null,
                isTradeable: null,

            }
        }
    },
    props: ['params'],
    wathc: {
        params(val) {
        }
    },
    created() {
        if(this.params) {
            this.Params = this.params
        }
    }
}
</script>
<style lang="scss" scoped>
.t-w{
    width: 180px;
    text-align: right;
    margin-right: 20px;
}
</style>



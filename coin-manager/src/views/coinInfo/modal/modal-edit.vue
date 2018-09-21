<template>
        <div class="u-border-t o-p-b">
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">币种名称：</span>
                    <span class="">{{Params.coinName}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                  
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">发行方名称</span>
                    <span class="">{{Params.publicName}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">产品状态</span>
                    <span class="">
                            <el-switch
                            v-model="Params.proType"
                            active-color="#13ce66"
                            inactive-color="#dedede">
                            </el-switch>
                    </span>
                </div>
            </div>
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">发行时间</span>
                    <span class="">
                        <el-date-picker
                        v-model="Params.time"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">交易状态</span>
                    <span class="">
                            <el-switch
                            v-model="Params.google"
                            active-color="#13ce66"
                            inactive-color="#dedede">
                            </el-switch>
                    </span>
                </div>
            </div>

            <div slot="footer" class="dialog-footer c-tc o-mt-l">
                <el-button @click="$emit('exit')">取 消</el-button>
                <el-button type="primary" @click="$emit('exit')">确定修改</el-button>
            </div>
        </div>
       
</template>
<script>
export default {
    data() {
        return{
            value1: true,
            value2: true,
            radio: '1',
            desc: '请输入...',
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
    width: 180px;
    text-align: right;
    margin-right: 20px;
}
</style>



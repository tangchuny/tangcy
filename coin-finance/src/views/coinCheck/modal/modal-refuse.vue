<template>
    <div class="u-border-t o-p-b">

        <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">用户账号</span>
                    <span class="">
                        <el-input v-model="Params.email"></el-input>
                    </span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">提币数量</span>
                    <span class="c-color-g-3">
                        <el-input v-model="Params.number"></el-input>
                    </span>
                </div>
            </div> 

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">驳回理由</span>
                    <el-input v-model="refuse" type="textarea"></el-input>
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
            refuse: '',
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



<template>
    <el-dialog
        width="30%"
        :showClose = false
        :visible.sync="innerVisible"
        :closeOnClickModal=false
        append-to-body>
            <div class="o-p-b">
                <div class="c-tc">
                    <i class="el-icon-warning c-color-e" style="font-size: 3rem;"></i>
                </div>
                <div class="c-tc o-p-l">为了您的账号安全，我们强烈建议您开启二次验证。</div>
                <div class="l-flex o-m-b">
                    <div class="l-flex-1 u-border c-line-xxl c-tc o-mr-b">
                        手机认证
                    </div>
                    <div class="l-flex-1  u-border c-line-xxl c-tc ">
                        谷歌认证
                    </div>
                </div>
               <p class="o-mt-l c-tr">
                     <el-button type="text" @click="handleSubmit2">我知道了</el-button>
                    <el-button type="primary" @click="handleSubmit2" :loading="logining">暂不设置</el-button>
               </p>
            </div>
        </el-dialog>
</template>
<script>
export default {
    data() {
        return {
            innerVisible: true
        }
    },
    methods: {
        handleSubmit2() {
            this.innerVisible = false
        },
    }
}
</script>

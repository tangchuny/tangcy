<template>
    <div class="u-border-t o-p-b">
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">会员账号</span>
                    <span class="">
                        <el-input v-model="Params.email"></el-input>
                    </span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">姓氏：</span>
                    <span class="c-color-g-3">
                        <el-input v-model="Params.firstName"></el-input>
                    </span>
                </div>
            </div>
            
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">名字</span>
                    <span class="c-color-g-3">
                         <el-input v-model="Params.lastName"></el-input>
                    </span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">证件类型：</span>
                    <span class="c-color-g-3">
                        <el-select v-model="Params.cid" placeholder="请选择">
                            <el-option label="身份证" value="shanghai"></el-option>
                        </el-select>
                    </span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">绑定手机号码</span>
                    <span class="c-color-g-3"><el-input v-model="Params.tel"></el-input></span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">注册时间</span>
                    <span class="c-color-g-3">
                        <el-date-picker
                        v-model="Params.time"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions1">
                        </el-date-picker>
                    </span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">是否开启谷歌认证</span>
                    <span class="">
                        <el-switch
                            v-model="Params.google"
                            active-color="#13ce66"
                            inactive-color="#dedede">
                        </el-switch>
                    </span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">是否开启手机认证</span>
                    <span class="">
                        <span class="">
                        <el-switch
                            v-model="Params.telCertification"
                            active-color="#13ce66"
                            inactive-color="#dedede">
                        </el-switch>
                    </span>
                    </span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">是否实名</span>
                    <span class="">{{Params.certification}}</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">是否禁用</span>
                    <span class="">
                        <el-switch
                            v-model="Params.useable"
                            active-color="#13ce66"
                            inactive-color="#dedede">
                        </el-switch>
                    </span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">是否开启交易</span>
                    <span class="c-color-g-3">
                        <el-switch
                            v-model="Params.isTradeable"
                            active-color="#13ce66"
                            inactive-color="#dedede">
                        </el-switch>
                    </span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">是否激活</span>
                     <span class="c-color-g-3">
                        <el-switch
                            v-model="Params.isActive"
                            active-color="#13ce66"
                            inactive-color="#dedede">
                        </el-switch>
                    </span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">照片地址</span>
                    <a :href="Params.url" target="new" class="c-color-p">{{Params.url}}</a>
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



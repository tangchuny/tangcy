<template>
    <div class="personCenter">
         <div class="o-mt-l l-flex u-border-b o-pb-l">
            <div class="l-flex-2 l-flex">
                <div class="photo">
                </div>
                <div class="info">
                    <div >
                        <span class="c-text-9 c-tb c-color-b-3">445344449@qq.com</span>
                        <span class="c-color-w c-text-7 o-ml-l">Lv.1</span>
                        <a class="c-btn-gray">未认证</a>
                        <span class="c-btn-green">普通用户</span>
                        </div>
                    <p class="c-text-65 c-color-g-3 o-mt-s">最后登录时间: 2018-09-20 17:42:21    IP: 18.218.75.202</p>
                    <p class="c-text-7 o-mt-s">使用BNB支付交易手续费<span class="c-color-g-2">（25% 折扣）</span>
                        <el-switch
                            v-model="value2"
                            active-color="#13ce66"
                            inactive-color="#dedede">
                        </el-switch>
                    </p>
                </div>
            </div>
            
            <div class="l-flex-1">
                <div class="l-flex-v o-mt-b o-ml-b c-text-7">
                    <span>可用: <label class="o-ml-l c-color-g-2">12330.00000000</label></span>
                    <span class="o-mt-m">冻结: <label class="o-ml-l c-color-g-2">0.00000000</label></span>
                </div>
            </div>
            <div class="l-flex-1">
                <div class="l-flex-v o-mt-b">
                    <span>资产折合 0.00000000 <b>BTC</b> / ￥0.00</span>
                    <span class="c-text-7 o-mt-m">单位净值：0.5501 USDT</span>
                </div>
            </div>
        </div>
        <!--安全认证-->
        <table-save></table-save>
        <!--地址管理-->
        <div class="o-mt-b l-flex">
            <!--认证前-->
             <!-- <div class="l-flex-1 l-flex u-border o-p-b">
                 <div class="l-flex-4">
                   <span class="c-text-9 o-mb-m">身份认证</span>
                   <div class="c-text-7 c-color-g-2">您还未身份认证，为了您的操作方便以及账户安全，请尽快认证！</div>
                </div>
                <div class="l-flex-1 c-tr">
                    <el-button type="danger">立马认证</el-button>
                </div>
             </div> -->
              <!--认证后-->
             <div class="l-flex-1  u-border o-p-b c-tc">
                   <div class="c-text-8 c-color-g-2"><i class="c-color-s el-icon-success o-mr-l "> 您的身份信息已通过认证</i></div>
                   <div class="c-text-7 c-color-g-2 o-mt-l">
                       <span class="o-mr-l"> 国籍China (中国)</span>
                       <span class="o-mr-l"> 证件号45**********42</span>
                       <span class="o-mr-l"> 姓名 汤春燕</span>
                   </div>
             </div>

             <div class="l-flex-1 l-flex u-border o-p-b o-ml-l">
                 <div class="l-flex-4">
                   <span class="c-text-9 o-mb-m">提现地址管理</span>
                   <div class="c-text-7 c-color-g-2">地址管理允许您保存和备注提现地址，以便在提现时快速选择。</div>
                </div>
                <div class="l-flex-1 c-tr">
                    <el-button type="warning" @click.native="$router.push({path: 'address'})">地址管理</el-button>
                </div>
             </div>
        </div>
        <!--设备管理-->
        <div class="o-mt-b">
             <div class="o-mb-m">设备管理</div>
            <table-list></table-list>
        </div>
        <!--最近登陆-->
        <div class="o-mt-b">
             <div class="o-mb-m">最近登陆</div>
            <login-list></login-list>
        </div>

        <el-dialog
			:title="modal.title"
			:visible.sync="modal.show"
			width="30%">
			<component :is="modal.name" @exit="exit" @callBack="callBack" :show="modal.show" :params="modal.params"></component>
		</el-dialog>

        <identify-modal></identify-modal>
    </div>
</template>
<script>
import tableList from './table/table-list.vue'
import loginList from './table/table-login-list.vue'
import modalPassword from './modal/modal-password.vue'
import identifyModal from './modal/modal-identify.vue'
import tableSave from './table/table-save.vue'
export default {
    name: 'user',
    data() {
        return {
            innerVisible: true,
            value2: true,
            modal : {
                name : '',
                show : false,
                title : '',
                params : '',
            },
        }
    },
    components: {
        loginList,
        tableList,
        modalPassword,
        identifyModal,
        tableSave,
    },
    methods: {
        
        modalView(modal) {
                this.modal.show = false
                this.$nextTick(() => {
                    this.modal = {
                        show: true,
                        ...modal
                    }
                })
        },
            exit() {
            this.modal.show = false
        },
        callBack() {
        },
        edit(item) {
            this.modalView({ name: 'modalPassword',  title: '修改登录密码' })
        }
    }
}
</script>
<style lang="scss" scoped>
    .photo{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        background: #dedede;
        margin: .5rem 0 0 2rem;
    }
    .info{
        margin: 1rem 0 0 1rem;
    }
    .u-save-h{
        height: 2rem;
        &:hover {
            background: #f5f7fa;
        }
    }
</style>



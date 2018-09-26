<template>
    <div class="personCenter">
        <div class="l-flex c-line-xxl">
            <div class="l-flex-1 c-tr o-mr-l">币种:</div>
            <div class="l-flex-3">
                <el-select v-model="value" placeholder="请选择" style="width: 50%;">
                    <el-option 
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>

        <div class="l-flex c-line-xxl">
            <div class="l-flex-1 c-tr o-mr-l">备注标签:</div>
            <div class="l-flex-3">
                <el-input v-model="input" placeholder="请输入备注"  style="width: 50%;"></el-input>
            </div>
        </div>

        <div class="l-flex c-line-xxl">
            <div class="l-flex-1 c-tr o-mr-l">地址:</div>
            <div class="l-flex-3">
                <el-input type="textarea" style="width: 50%;"></el-input>
            </div>
        </div>

        <div class="l-flex c-line-xl">
            <div class="l-flex-1 c-tr o-mr-l"></div>
            <div class="l-flex-3 l-flex-v o-mt-m">
                    <el-checkbox  v-model="checked">添加到白名单</el-checkbox>
                <el-button type="primary" style="width: 50%;">添加</el-button>
            </div>
        </div>
          

        <!--提现地址管理-->
        <div class="o-mt-b">
                <el-tabs v-model="activeName">
                <el-tab-pane label="邀请记录" name="first">
                    <table-address></table-address>
                </el-tab-pane>
                <el-tab-pane label="返佣记录" name="second">
                     <table-address></table-address>>
                </el-tab-pane>
            </el-tabs>
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
import tableAddress from './table/table-address.vue'
export default {
    name: 'user',
    data() {
        return {
            activeName: 'first',
            checked: false,
            options: [{
				value: 'MTH - Monetha',
				label: 'MTH - Monetha'
				}, {
				value: 'MTL - Metal',
				label: 'MTL - Metal'
				}, {
				value: 'NANO - NANO',
				label: 'NANO - NANO'
				}, {
				value: 'NAS - Nebulas',
				label: 'NAS - Nebulas'
				}, {
				value: 'NEO - NEO',
				label: 'NEO - NEO'
				}],
            value: 'NEO - NEO',
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
        tableAddress,
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



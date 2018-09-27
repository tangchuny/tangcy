<template>
    <div class="invite">
      
       <div class="l-flex">
           <div class="l-flex-1 c-tc o-p-b u-border-r">
               <div class="c-text-9 o-pb-l">邀请人数</div>
               <span class="c-color-g-2 o-mr-l">邀请总人数</span>
               <span class="c-text-15 c-color-w">10</span>
           </div>
            
           <div class="l-flex-1 c-tc o-p-b">
               <div class="c-text-9 o-pb-l">获得返佣</div>
               <span class="c-color-g-2 o-mr-l">USDT</span>
               <span class="c-text-15 c-color-i">0.00000000</span>
           </div>
           
       </div>
        <div class="u-border-t o-p-l c-text-7 o-mt-l">
            <div class=" o-pb-m">专属邀请码<span class="myCode">wg6v3</span>  <el-button>复制邀请码</el-button></div>
            <span class="c-color-g-2 o-mr-l">
                专属注册链接
                <el-input placeholder="请输入内容"  v-model="input5" class="input-with-select o-mt-s">
                    <span slot="append" icon="el-icon-search">复制链接分享</span>
                </el-input>
                
            </span>
        </div>

        <!--提现地址管理-->
        <div class="o-mt-b">
                <el-tabs v-model="activeName">
                <el-tab-pane label="邀请记录" name="first">
                    <table-invite-list></table-invite-list>
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
import tableInviteList from './table/table-invite-list.vue'
import tableAddress from './table/table-address.vue'
export default {
    name: 'user',
    data() {
        return {
            input5: 'https://www.hbg.com/zh-cn/topic/invited/?invite_code=wg6v3',
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
        tableInviteList,
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
<style lang="scss" >
.invite{
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
    .myCode{
        border: solid 1px #dedede;
        background: #ffffff;
        display: inline-block;
        width: 200px;
        border-radius: 4px;
        vertical-align: middle;
        color: #333333;
        margin-left: 10px;
        padding: 10px;
        font-size: 14px;

    }
    .el-input-group__append{
        width: 90px;
    }
}
</style>



<template>
    <div>
        <div class="l-flex">
            <div class="l-flex-1 l-flex--v o-mt-b ">
                    <div class="l-flex u-border-b o-p-b u-save-h">
                        <div class="o-mt-s">
                            <i class="el-icon-setting c-text-11"></i>
                            <a class="c-text-9" >修改登陆密码</a>
                        </div>
                        <div class="l-flex-1 c-tr">
                              <el-button @click="edit">修改</el-button>
                        </div>
                        
                    </div>
                    <div class="l-flex u-border-b o-p-b u-save-h">
                        <div class="l-flex-1">
                            <a class="c-text-9">手机验证（138*****140）</a>
                            <div class="c-text-7 c-color-g-2">修改密码，及安全设置时用以收取验证短信</div>
                        </div>
                        <div class="l-flex-1 c-tr">
                              <el-button  @click="edit">关闭</el-button>
                        </div>
                    </div>
                    
            </div>

            <div class="l-flex-1 l-flex--v o-mt-b">
                 <div class="l-flex u-border-b o-p-b u-save-h">
                        <div class="">
                            <a class="c-text-9" >谷歌验证</a>
                            <div class="c-text-7 c-color-g-2">修改密码，及安全设置时用以验证谷歌二次验证</div>
                        </div>
                        <div class="l-flex-1 c-tr">
                              <el-button type="primary" @click="edit">开启</el-button>
                        </div>
                    </div>
                    <div class="l-flex u-border-b o-p-b u-save-h">
                        <div class="l-flex-4">
                            <a class="c-text-9">防钓鱼码</a>
                            <div class="c-text-7 c-color-g-2">通过验证您设置的防钓鱼码，可防范假冒币安的邮件和网站。</div>
                        </div>
                        <div class="l-flex-1 c-tr">
                              <el-button  @click="edit">设置</el-button>
                        </div>
                    </div>
            </div>
        </div>
        <!--密码修改-->
       
        <div class="l-flex u-border-b o-p-b  u-save-h">
            <div class="l-flex-3">
                <a class="c-text-9">API</a>
                <div class="c-text-7 c-color-g-2">创建API密钥可以让您借助第三方网站或移动应用使用行情查询，实时交易等服务。请参阅API文档了解如何使用您的API Keys。</div>
            </div>
            <div class="l-flex-1 c-tr">
                    <el-button>关闭</el-button>
            </div>
        </div>
        <!--密码修改-->
        <el-dialog
			:title="modal.title"
			:visible.sync="modal.show"
			width="30%">
			<component :is="modal.name" @exit="exit" @callBack="callBack" :show="modal.show" :params="modal.params"></component>
		</el-dialog>
    </div>
</template>
<script>
import modalPassword from '../modal/modal-password.vue'
export default {
    data() {
        return {
            innerVisible: true,
        }
    },
    components: {
        modalPassword,
    },
    methods: {
        edit() {
            this.modalView({ name: 'modalPassword',  title: '修改登录密码' })
        },
        handleSubmit2() {
            this.innerVisible = false
        },
    }
}
</script>
<style lang="scss" scoped>
    .u-save-h{
        height: 2rem;
        &:hover {
            background: #f5f7fa;
        }
    }
</style>
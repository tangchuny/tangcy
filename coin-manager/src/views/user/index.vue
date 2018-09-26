<template>
    <div class="personCenter">
        <div class="u-border-b o-pb-l">
        <el-breadcrumb separator="/" class="breadcrumb-inner">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <div class="o-mt-l l-flex u-border-b o-pb-l">
            <div class="l-flex-1 l-flex">
                <div class="photo">
                </div>
                <div class="info">
                    <div class="c-text-9 c-tb c-color-b-3">445344449@qq.com</div>
                    <p class="c-text-7 c-color-g-3 o-mt-s">最后登录时间: 2018-09-20 17:42:21    IP: 18.218.75.202</p>
                    <p class="o-mt-m"><span class="c-tab ">超级管理员</span></p>
                </div>
            </div>
            
        </div>
        <div class="l-flex l-flex o-mt-b o-mb-b">
                <div class="l-flex-1 c-tc">
                    <a class="c-text-9" @click="edit">修改登陆密码</a>
                    <span><i class="el-icon-arrow-right"></i></span>
                </div>
                <div class="l-flex-1" style="margin-left: 4rem;">
                    <a class="c-text-9" @click="edit">手机验证（138*****140</a>
                    <span><i class="el-icon-arrow-right"></i></span>
                    <div class="c-text-7 c-color-g-2">修改密码，及安全设置时用以收取验证短信</div>
                </div>
                    <div class="l-flex-1" style="margin-left: 4rem;">
                    <a class="c-text-9" @click="edit">谷歌验证</a>
                    <span><i class="el-icon-arrow-right"></i></span>
                    <div class="c-text-7 c-color-g-2">修改密码，及安全设置时用以验证谷歌二次验证</div>
                </div>
        </div>
        <div class="o-mt-b">
            <table-list></table-list>
        </div>
        <el-dialog
			:title="modal.title"
			:visible.sync="modal.show"
			width="30%">
			<component :is="modal.name" @exit="exit" @callBack="callBack" :show="modal.show" :params="modal.params"></component>
		</el-dialog>
    </div>
</template>
<script>
import tableList from './table-list.vue'
import modalPassword from './modal-password.vue'

export default {
    data() {
        return {
            modal : {
                name : '',
                show : false,
                title : '',
                params : '',
            },
        }
    },
    components: {
        tableList,
        modalPassword
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
        margin: 1rem 0 0 2rem;
    }
    .info{
        margin: 1rem 0 0 1rem;
    }
    
</style>



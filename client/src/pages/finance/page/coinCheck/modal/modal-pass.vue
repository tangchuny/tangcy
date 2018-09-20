<template>
      <el-dialog
        title="审核确认" :visible.sync="view"
        width="300" >
        <div class="u-border-t o-p-m">
            <div class="l-flex c-line-xl">
                    <span class="t-w">用户账号：</span>
                    <span class="o-ml-l">
                        ceshi21@qq.com
                    </span>
            </div>
            <div class="l-flex c-line-xl">
                    <span class="t-w">提币个数：</span>
                    <span class="o-ml-l">
                       2个
                    </span>
            </div>
            <div class="l-flex c-line-xl">
                    <span class="t-w">提币手续费：</span>
                    <span class="o-ml-l">
                       0.02个
                    </span>
            </div>
             <div class="l-flex c-line-xl">
                    <span class="t-w">实际到账个数：</span>
                    <span class="o-ml-l">
                       1.98个
                    </span>
            </div>
            <div class="l-flex c-line-xl">
                    <span class="t-w">提币地址：</span>
                    <span class="o-ml-l">
                      WRTERFDG234FDGDFHGFHSA
                    </span>
            </div>
            <div class="">
                
                <el-alert
                    :closable='false'
                    title="温馨提示：提币确认操作不可逆，请确认提币个数。"
                    type="warning">
                </el-alert>
            </div>
            <div class="l-flex c-line-xl o-mt-l">
                    <span class="t-w">谷歌验证码:</span>
                    <span class="o-ml-l">
                      <el-input v-model="input" placeholder="请输入谷歌验证码"></el-input>
                    </span>
            </div>
 
        </div>
         <span slot="footer" class="dialog-footer">
                <el-button @click="view = false">取 消</el-button>
                <el-button type="primary" @click="view = false">确 定</el-button>
            </span>
        </el-dialog>
</template>
<script>
export default {
    data(){
        return{
            view : false,
             value1: true,
            value2: true,
            radio: '1',
            desc: '请输入...',
            Params: {

            }
        }
    },
    props : ['value','title','form'],
    watch:{
        value(val){
            if(val){
                if(this.form){
                    this.$set(this.$data,'Params',this.Origin(this.form))
                }else{
                    this.$set(this.$data,'Params',this.$options.data().Params)
                }
                this.view = true
            }
        },
        view(val){
            if(val===false){
                this.$emit('input',false)             
            }
        },
    },
    methods: {
       
    },
    created(){        
        this.view  = this.value
    },
}
</script>
<style scoped>
.t-w {
    text-align: right;
    width: 175px;
}
.el-upload-dragger {
    width: 215px;
    height: 121px;
}

.el-upload-dragger .el-icon-upload {
    margin: 21px  0 16px;
    line-height: 30px;
}
</style>


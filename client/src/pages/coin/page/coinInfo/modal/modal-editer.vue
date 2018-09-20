<template>
      <el-dialog
        :title="title" :visible.sync="view"
        width="50%" >
        <div class="u-border-t o-p-b edit">
           <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
                <el-form-item label="币种名称" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="币种名称"></el-input>
                </el-form-item>
                <el-form-item label="发行个数" prop="region">
                     <el-input v-model="ruleForm.region" placeholder="请输入数字"></el-input>
                </el-form-item>
                <el-form-item label="发行单价" prop="region">
                    <el-input v-model="ruleForm.region" placeholder="请输入价格"></el-input>
                </el-form-item>
                <el-form-item label="发行方名称"  prop="delivery">
                    
                    <el-input v-model="ruleForm.delivery" placeholder="发行方名称"></el-input>
                </el-form-item>
                <el-form-item label="币种状态"  prop="resource">
                    <el-switch v-model="ruleForm.resource"></el-switch>
                </el-form-item>
                <el-form-item label="币种简介"  prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="简介..."></el-input>
                </el-form-item>
            </el-form>
        </div>
         <span slot="footer" class="dialog-footer">
                <el-button @click="view = false">取 消</el-button>
                <el-button type="primary" @click="view = false">立即创建</el-button>
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
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: '',
                type: [],
                resource: false,
                desc: ''
            },
            Params : {
            },
             rules: {
                name: [
                    { required: true, message: '请输入币种名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请输入发行价格', trigger: 'blur' }
                ],
                
                
                desc: [
                    { required: true, message: '请输入币种简介', trigger: 'blur' }
                ]
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
.edit .el-input__inner, .edit .el-textarea__inner{
    width: 300px;
}
</style>


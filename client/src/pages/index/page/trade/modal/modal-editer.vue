<template>
      <el-dialog
        :title="title" :visible.sync="view"
        width="50%" >
        <div class="u-border-t o-p-b edit">
           <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
                <el-form-item label="交易币种" prop="name">
                    <el-select v-model="ruleForm.name" placeholder="请选择交易币种">
                        <el-option label="USDTC" value="USDTC"></el-option>
                        <el-option label="BTC" value="BTC"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="定价币种" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择定价币种">
                        <el-option label="USDTC" value="USDTC"></el-option>
                        <el-option label="BTC" value="BTC"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="发行价格" prop="price">
                    <el-input style="width: 213px;" type="input" v-model="ruleForm.price" placeholder="请输入发行价格"></el-input>
                </el-form-item>
                <el-form-item label="定价类型" prop="types">
                    <el-radio-group v-model="form.types">
                        <el-radio label="虚拟货币"></el-radio>
                        <el-radio label="真实货币"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="开启/关闭交易"  prop="resource">
                    <el-switch v-model="ruleForm.resource"></el-switch>
                </el-form-item>
            </el-form>
        </div>
         <span slot="footer" class="dialog-footer">
                <el-button @click="view = false">取 消</el-button>
                <el-button type="primary" @click="view = false">确定</el-button>
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
                types: '',
                price: '',
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
                    { required: true, message: '请输入币种简介', trigger: 'blur' }
                ],
                types: [
                     { required: true, message: '请选择货币类型', trigger: 'change' }
                ],
                price: [
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


<template>
     <el-dialog
        width="30%"
        title="谷歌认证"
        :visible.sync="view"
        append-to-body>
            <div class="u-border-t  o-p-b">
                <el-alert
                    class="o-mb-l"
                    title="*不要透露密码、短信和谷歌验证码给任何人"
                    type="warning">
                </el-alert>
                <el-form  :model="params" status-icon :rules="rules2" ref="ruleForm">
                     <el-form-item label="谷歌验证码：" prop="google">
                         <el-input type="number" v-model.number="params.google" autocomplete="off"></el-input>
                    </el-form-item>
                <el-form-item>
                    <p class="o-mt-l c-tc">
                        <el-button type="primary" @click="handleSubmit('ruleForm')" :loading="logining">确 定</el-button>
                    </p>
                 </el-form-item>
               </el-form>
            </div>
        </el-dialog>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
            //    view: false,
               logining: false,
               params: {
                   google: '',
               },
                rules2: {
                    google: [
                        { required: true, message: '谷歌验证码不能为空', trigger: 'blur'},
                        { validator:  (rule, value, callback) => {   
                                     var Regex = /^[0-9]{6}$/; 
                                     if (!Regex.test(value)) { 
                                            callback(new Error('请输入6位谷歌验证码'))        
                                     } else {  
                                           callback();   
                                     }            
                               }, trigger: 'blur'               
                       }

                    ]
                }
            }
        },
        props: [ 'view'],
        watch: {
            view(val) {
                this.resetForm('ruleForm')
                if (val===false) {
                    this.$emit('exit', false)
                }
            }
        },
        methods: {
            resetForm(name) {
                this.$refs[name].resetFields();
            },
            handleSubmit(name) {
                this.logining = true
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.view = false
                        this.logining = false
                        this.$emit('callBack')
                    } else {
                        this.logining = false
                        return false
                    }
                });
            },
        },

        mounted: function () {
        },
        created(){        
            // this.visible  = this.visible
        },
       
    }
</script>

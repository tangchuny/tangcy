<template>
    <div class="u-border-t o-p-b">
        <el-alert
            class="o-mb-l"
            title="*不要透露密码、短信和谷歌验证码给任何人"
            type="warning">
        </el-alert>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="旧密码" prop="oldPass">
            <el-input type="password" v-model="ruleForm2.oldPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">确定修改</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
        </el-form>

        <el-dialog
        width="25%"
        title="谷歌认证"
        :visible.sync="innerVisible"
        append-to-body>
            <div class="u-border-t o-p-b">
                <el-alert
                    class="o-mb-l"
                    title="*不要透露密码、短信和谷歌验证码给任何人"
                    type="warning">
                </el-alert>
                谷歌认证码：<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
               <p class="o-mt-l c-tc">
                <el-button type="primary" @click="submitForm('ruleForm2')">确 定</el-button>
               </p>
            </div>
        </el-dialog>
</div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        innerVisible: false,
        ruleForm2: {
            oldPass: '',
          pass: '',
          checkPass: '',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
          this.innerVisible = true
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss" scoped>
.el-input{
    width: 80%!important;
}
</style>

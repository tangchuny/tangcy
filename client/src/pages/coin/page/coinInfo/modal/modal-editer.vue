<template>
      <el-dialog
        :title="title" :visible.sync="view"
        width="60%" >
        <div class="u-border-t o-p-b">
           似懂非懂
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
<style>
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


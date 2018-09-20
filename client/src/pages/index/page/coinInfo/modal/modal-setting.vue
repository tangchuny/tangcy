<template>
      <el-dialog
        :title="title" :visible.sync="view"
        width="60%" >
        <div class="u-border-t o-p-b">
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">币种名称：</span>
                    <span class="">CRR</span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">单次最小提币数量 (个)：</span>
                    <span ><el-input v-model="input"  placeholder="输入数字..."></el-input></span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">单次最小提币数量 (个)：</span>
                    <span class=""><el-input v-model="input" placeholder="输入数字..."></el-input></span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">用户单日最大提币数(个)：</span>
                    <span class=""><el-input v-model="input" placeholder="输入数字..."></el-input></span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">单日提币的最大数量 (个)：</span>
                    <span class=""><el-input v-model="input" placeholder="输入数字..."></el-input></span>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">平台单日最大提币：</span>
                    <span class=""><el-input v-model="input" placeholder="输入数字..."></el-input></span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">费率：</span>
                    <div class="l-flex-v">
                        <div>
                            <el-radio v-model="radio" label="1">固定比例</el-radio>
                            <el-radio v-model="radio" label="2">固定额度</el-radio> 
                        </div>
                        <div  style="margin-top: -20px;" v-show="radio==1">
                            <el-input class="o-mr-s" style="width: 180px;" v-model="input" placeholder="输入数字..."></el-input>%
                        </div>
                        <div  style="margin-top: -20px;" v-show="radio==2">
                            <el-input class="o-mr-s" style="width: 180px;" v-model="input" placeholder="输入数字..."></el-input>个
                        </div>
                    </div>
                </div>
                <div class="l-flex-1 l-flex">
                    <span class="t-w">币种简介：</span>
                    <span class="">
                           <el-input type="textarea" v-model="desc"></el-input>
                    </span>
                </div>
            </div>

            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">充币：</span>
                    <span class="">
                        <el-switch
                        v-model="value1"
                        active-color="#13ce66"
                        inactive-color="#dedede">
                        </el-switch>
                    </span>
                </div>
               <div class="l-flex-1 l-flex">
                    <span class="t-w">提币：</span>
                    <span class="">
                        <el-switch
                        v-model="value2"
                        active-color="#13ce66"
                        inactive-color="#dedede">
                        </el-switch>
                    </span>
                </div>
            </div>

            <div class="l-flex  c-line-xl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">币种图标： </span>
                    <span class="">
                        <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </span>
                </div>
               
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


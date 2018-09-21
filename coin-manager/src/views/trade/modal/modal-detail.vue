<template>
        <div class="u-border-t o-p-b">
            <div class="l-flex  c-line-xxl">
                <div class="l-flex-1 l-flex">
                    <span class="t-w">交易币种</span>
                        <span ><el-input v-model="input"  placeholder="输入数字..."></el-input></span>

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
              <div slot="footer" class="dialog-footer c-tr">
                <el-button @click="$emit('exit')">取 消</el-button>
                <el-button type="primary" @click="$emit('exit')">确 定</el-button>
              </div>
        </div>
       
</template>
<script>
export default {
    data() {
        return{
            value1: true,
            value2: true,
            radio: '1',
            desc: '请输入...',
            Params: {

            }
        }
    },
    props: ['params'],
    wathc: {
        params(val) {
        }
    },
    created() {
        this.Params = this.params
    }
}
</script>
<style lang="scss" scoped>
.t-w{
    width: 180px;
    text-align: right;
    margin-right: 20px;
}
</style>



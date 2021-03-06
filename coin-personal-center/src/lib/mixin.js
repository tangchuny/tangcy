import Vue from 'vue'
import Config from '../common/config.js'

import Big from 'big.js'
Big.prototype.toNumber = function(){
    return Number(this)
}
window.Big = Big

import Methods from '../common/methods';
import CRUD from '../common/crud';

Vue.mixin({
    data(){
        return {
            Page : 1,
            Filter : {
                key : null,
            },
            Params : {},
            Editer : {
                view : false,
                title : null,
                Params : null,
            },
            Config,
            modal : {
                name : '',
                show : false,
                title : '',
                params : '',
            },
        }
    },
    computed: {
       
        main(){
            if(this.model){
                let store = this.model.split("/")[0]
                let model = this.model.split("/")[1]
                if(store && model){
                    return this.$store.state[store][model]
                }
            }
        },
        User(){
            return this.$store.state.base.sign.info || {}
        },
    },
    methods : {
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

        Big(opt){
            // 加-add  减-sub  乘-mul  除-div  四舍五入-round(位数，模式)
            return new Big(opt)
        },
       
        ...Methods,
        ...CRUD,
    },
})
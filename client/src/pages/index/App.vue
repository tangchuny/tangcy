<style lang="scss">
    @import "../../common/style/config.scss";
    body,html,#sm {width:100%; height:100%;}
    header {
        width:100%; height:3.4rem; z-index:10;
        h2,h3,h4,h5 {line-height:3.4rem; color:#666;}
    }
    .main{
        background: #f5f7f9;
    }
    
    .worker {
        background-color : #f5f5f5;
        height: 100vh;
        width: 80%;
        max-width: 1600px;
        min-width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
</style>
<template>
    <div id="app">
        <div class="main l-flex-v">
            <div>
                <header-components></header-components>
            </div>
            <div class="l-flex c-overflow-a worker">
                <div class="worker">
                    <transition name="page-fade" mode="out-in">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import menuComponents from './other/menu.vue'
import headerComponents from './other/header.vue'
export default {
    name : 'app',
    data (){
        return {
            firstloading : true,
            serverError : false,
        }
    },
    components: {
        menuComponents,
        headerComponents
    },
    computed: {
       
       
    },
    methods : {
       
    },
    
}
</script>

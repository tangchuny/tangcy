<style lang="scss">
    @import "../../../common/style/config.scss";
    .nav {
        background: #242429;
        width:11rem; height:100vh;
    }
</style>

<template>
    <div class="Menu">
            <el-menu
            default-active="2"
            class="nav el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-for="(pack,unit) in dir" v-if="!pack.hidden">
            <el-submenu  v-if="pack.children" class="o-mt-l"  :index="unit" :collapse="true" :key="unit">
                    <template slot="title"><i class="el-icon-setting"></i><span>{{pack.title}}</span></template>
                    <el-menu-item  v-for="(item,index) in pack.children" :index="unit +'-'+index" :key="index"  @click="$router.push({name:item.name})">
                        <i :class="'icon-'+item.icon"></i>
                        <span>{{item.meta.title}}</span>
                    </el-menu-item>
             </el-submenu>
             <el-menu-item  :index="unit" :key="unit" v-else @click="$router.push({name:pack.name})">
                <i class="el-icon-menu"></i>
                <span slot="title">{{pack.title}}</span>
             </el-menu-item>
           </template>
        </el-menu>
         
    </div>
</template>

<script>

export default {
    name : 'Menu',
    data (){
        return {

        }
    },
    computed: {
        dir(){
            return this.$router.options.routes
        },
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
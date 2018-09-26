<template>
	<el-row class="container">
		<div  class="header l-flex">
			<div class="logo-width">
				<span class="logo" >{{collapsed?'':sysName}}</span>
				<span class="c-text-7">2018-09-25 15:06:04</span>
			</div >

			<div class="l-flex center">
				<div class="l-flex-v c-text-6 o-mt-s c-line-ls">
					<span class="c-color-g-2">最新价</span>
					<div class="">
						<span class="c-color-b">6,444.09</span><span class="o-ml-s c-color-w">¥44,179.97</span>
					</div>
				</div>

				<div class="l-flex-v c-text-6 o-mt-s  o-ml-b c-line-ls">
					<span class="c-color-g-2">24h涨跌</span>
					<div class="">
						<span class="c-color-e">-239.69 </span><span class="o-ml-s c-color-e">-236.33 </span>
					</div>
				</div>

				<div class="l-flex-v c-text-6 o-mt-s  o-ml-b c-line-ls">
					<span class="c-color-g-2">24h最高价</span>
					<div class="">
						<span class="c-color-b">6,682.90</span>
					</div>
				</div>

				<div class="l-flex-v c-text-6 o-mt-s  o-ml-b c-line-ls">
					<span class="c-color-g-2">24h最低价</span>
					<div class="">
						<span class="c-color-b">6,403.00</span>
					</div>
				</div>

				<div class="l-flex-v c-text-6 o-mt-s  o-ml-b c-line-ls">
					<span class="c-color-g-2">24h成交量</span>
					<div class="m-t-s">
						<span class="c-color-b">265,212,046.51 USDT</span>
					</div>
				</div>

			</div>
			<div class="l-flex-1  c-text-7 l-hover" style="line-height: 45px;">
				<div class="type rel">
					<a>
						<span class="c-color-f">BTC / USDT</span>
						<span class="el-icon-caret-bottom"></span>
					</a>
					<div class="pair-panel">
						asdf
					</div>
				</div>
			</div>
			<div class="c-text-7 userinfo">
				<!-- <div class=""> 登录 | 注册 </div> -->
				<div class="">334567644@qq.com</div>
			</div>
			<div class=" c-text-7 " style="line-height: 45px;">
				<a class="type">
					<span class="c-color-f">简体中文</span>
					<span class="el-icon-caret-bottom"></span>
				</a>
				
			</div>
		</div>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
				
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<!-- <strong class="title">{{$route.name}}</strong> -->
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
		<!-- <div class="mask">
	</div> -->
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				sysName:'交易中心',
				collapsed:false,
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});


			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';
	
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 45px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 60%;
				width: 60%;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:45px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:45px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 45px;
				width: 45px;
			}
			.menu-expanded{
				flex:0 0 60%;
				width: 60%;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
<template>
	<div class="Home">
		<div class="l-flex header">
			<h3 class="l-flex-1 o-pl-l o-mr-b">{{sysName}}</h3>
			<div class="menu l-flex-3 c-tr o-ml-b">
				<el-menu
					:default-active="activeIndex2"
					class="el-menu-demo"
					mode="horizontal"
					unique-opened router
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b">
					<template  v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf" :key="index">
							<template slot="title">{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" :key="index">{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
			</div>
			<div class="o-mr-l c-tr">
				<div class=" l-flex ">
						<a class="o-pr-l c-text-7 t-link-d">帮助中心</a>
					<div>
						<el-dropdown>
							<span class="el-dropdown-link">
								<span class="circle">
									TT
								</span>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item @click.native="$router.push({ path: 'user'})">用户中心</el-dropdown-item>
								<el-dropdown-item  divided @click.native="logout">退出登陆</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
							
						</div>
				</div>
			</div>
		</div>
		<!-- <div class="main">
			<el-breadcrumb separator="/" class="breadcrumb-inner">
				<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
					{{ item.name }}
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div> -->
		<div class="main c-bg-f t-shadow o-p-l c-radius-s">
			
			<transition name="fade"
						mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sysName:'币种信息管理后台',
				activeIndex2: '1',
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
	.header{
		height: 3rem;
		line-height: 3rem;
		background: #545c64;
		color: #ffffff;
		.menu2{
			li{
				padding: 0 12px;
				height: 3rem;
				line-height: 3rem;
				text-align: center;
				.active{
					background: #545c64;
					color: #ffffff;	
				}
				&:hover{ 
					cursor: pointer;
					background: #3a588d;
					color: #e8b342;
				}
			}
		}
		
	}
	.circle{
		width: 40px;
		height: 40px;
		background: #dddddd;
		margin: 8px 0 0 8px;
		text-align: center;
		color: #000000;
		font-size: 0.8rem;
		border-radius: 100%;
		padding: 12px;
	}
	.Home {
		// background: #324057;
		// position: absolute;
		// top: 0;
		// bottom: 0px;
		// overflow: hidden;
		width: 100%;
	}
	.main{
		width: 1200px;
		margin: 1rem auto;
		
	}
</style>
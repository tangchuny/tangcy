<template>
	<div class="Home">
		<div class="l-flex header">
			<h3 class=" o-pl-l o-mr-b">{{sysName}}</h3>
			<div class="menu l-flex-1 c-tl o-ml-b">
				<div class="">
					<ul class="l-flex menu2" >
						<template  v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
							<li @click="$router.push({path:item.name})"  :key="index" v-if="!item.leaf">
								<span>{{item.name}}</span>
							</li>
							<li v-if="item.leaf && item.children.length>0" :key="index" @click="$router.push({path: item.children[0].path})">
								{{item.children[0].name}}
							</li>
						</template>
						</ul>
				</div>

			</div>
			<div class="o-mr-l c-tr">
				<div class=" l-flex ">
					<ul class="l-flex menu2 c-text-7">
						<li @click="$router.push({path: 'asset'})"><span>资产管理</span></li>
						<li @click="$router.push({path: 'entrust'})"><span>委托管理</span></li>
						<li @click="$router.push({path: 'asset'})"><span>加入我们</span></li>
						<li @click="$router.push({path: 'asset'})"><span>帮助中心</span></li>
					</ul>
					<div>
						<el-dropdown>
							<span class="el-dropdown-link">
								<span class="circle">
									TT
								</span>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item @click.native="$router.push({ path: 'user'})">用户中心</el-dropdown-item>
								<el-dropdown-item @click.native="$router.push({ path: 'invite'})">我的邀请码</el-dropdown-item>
								<el-dropdown-item  divided @click.native="logout">退出登陆</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
							
						</div>
				</div>
			</div>
		</div>
		<div class="breadcrumb">
			<el-breadcrumb separator="/" class="breadcrumb-inner">
				<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
					{{ item.name }}
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="main c-bg-f t-shadow o-p-l">
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
				sysName:'个人中心',
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
		background: #214478;
		color: #ffffff;
		.menu2{
			li{
				padding: 0 12px;
				height: 3rem;
				line-height: 3rem;
				text-align: center;
				.active{
					background: #214478;
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
	.breadcrumb{
		width: 1200px;
		margin: 1rem auto 0 auto;
	}
	.main{
		width: 1200px;
		margin: 1rem auto;
		background: #ffffff;
	}
</style>
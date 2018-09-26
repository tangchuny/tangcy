<template>
	<section class="asset">
		<!--工具条-->
		<div class="o-mb-m">
						<el-alert
				title="安全建议：检查访问网址、开启二次验证、不要给声称为工作人员转账和透露密码信息等。请务必注意安全防范，加强自我保护。"
				type="warning">
			</el-alert>
		</div>
		<div class="l-flex o-mb-s">
			<div class="">
				 <el-input size="mini" placeholder="请输入内容" v-model="input3"></el-input>
			</div>
			<div class="o-ml-l">
				<el-tooltip placement="top">
				<div slot="content">估值小于0.001BTC的资产</div>
				<el-button size="mini">小额资产 <i class="el-icon-question"></i></el-button>
				</el-tooltip>
				<el-checkbox class="o-ml-s" v-model="checked">隐藏</el-checkbox>
				<!-- <el-button size="mini">小额资产 <i class="el-icon-question"></i></el-button> -->
			</div>
			<div class="l-flex-1 c-tr l-flex-v">
				<span>总当前估值： 0.00000000 <b>BTC</b> / ￥0.00</span>
				<span class="c-text-6 ">24h提现额度：2BTC 已用：0BTC</span>
			</div>
		</div>
		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column prop="tradeCoin" label="币种" sortable>
			</el-table-column>
			<el-table-column prop="firstName" label="全称" sortable>
			</el-table-column>
			<el-table-column prop="price" label="总额" sortable>
			</el-table-column>
			<el-table-column prop="price" label="可用余额"  sortable>
			</el-table-column>
			<el-table-column prop="price" label="下单冻结" sortable>
			</el-table-column>
			<el-table-column prop="price" label="BTC估值" sortable>
			</el-table-column>
			
			<el-table-column label="" align="center" width="250">
					<template slot-scope="scope">
						<el-button round size="mini" type="primary">充值</el-button>
						<el-button round size="mini">提现</el-button>
						<el-button round size="mini">交易</el-button>
				</template>
			</el-table-column>
		</el-table>

	</section>
</template>

<script>
	import util from '../../../common/js/util'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../../api/api';

	export default {
		data() {
			return {
				input3: '',
				filters: {
					name: ''
				},
				users: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}

			}
		},
		methods: {
			
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
			},
			//获取用户列表
			getUsers() {
				let para = {
					page: this.page,
					name: this.filters.name
				};
				this.listLoading = true;
				//NProgress.start();
				getUserListPage(para).then((res) => {
					this.total = res.data.total;
					this.users = res.data.users;
					console.log(this.users)
					this.listLoading = false;
					//NProgress.done();
				});
			},
		
			selsChange: function (sels) {
				this.sels = sels;
			},
		},
		mounted() {
			this.getUsers();
		}
	}

</script>
<style lang="scss" >
.asset{
	.el-checkbox__label{
		padding-left: 4px;
	}
}
</style>


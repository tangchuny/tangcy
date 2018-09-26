<template>
	<section class="asset">
		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column prop="time" label="时间" align="center" sortable>
			</el-table-column>
			<el-table-column prop="tradeCoin" label="市场" align="center" sortable>
			</el-table-column>
			<el-table-column prop="price" label="类型" align="center" sortable>
			</el-table-column>
			<el-table-column prop="direction" label="方向" align="center" sortable>
			</el-table-column>
			<el-table-column prop="price" label="价格" align="center" sortable>
			</el-table-column>
			<el-table-column prop="number" label="数量" align="center" sortable>
			</el-table-column>
			<el-table-column prop="price" label="成交率%" align="center" sortable>
			</el-table-column>
			<el-table-column prop="price" label="金额" align="center" sortable>
			</el-table-column>
			<el-table-column prop="price" label="触发条件" align="center" sortable>
			</el-table-column>
			<el-table-column label="操作" align="center" width="250">
					<template slot-scope="scope">
						<el-button round size="mini">撤销</el-button>
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


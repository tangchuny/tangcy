<template>
	<section>
		<!--工具条-->
		<el-col :span="12" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="委托人"></el-input>
				</el-form-item>
			</el-form>
		</el-col>
		<el-col :span="12" style="padding-bottom: 0px;" class="c-tr">
			 	<el-button type="primary" plain>批量通过</el-button>
				<el-button type="warning" plain>批量驳回</el-button>
				<el-button type="info" plain>刷新</el-button>
		</el-col>
		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="email" label="用户账号" width="200" sortable>
			</el-table-column>
			<el-table-column prop="id" label="委托单号" min-width="120" sortable>
			</el-table-column>
			<el-table-column prop="firstName" label="姓氏" width="100" sortable>
			</el-table-column>
			<el-table-column prop="lastName" label="名字" width="100" sortable>
			</el-table-column>
			<el-table-column prop="tradeCoin" label="币种名称" width="150" sortable>
			</el-table-column>
			<el-table-column prop="walletAddr" label="提币钱包地址" min-width="250" sortable>
			</el-table-column>
			<el-table-column prop="time" label="操作时间" min-width="150" sortable>
			</el-table-column>
			<el-table-column prop="number" label="提币数量" min-width="120">
			</el-table-column>
			<el-table-column prop="price" label="手续费" min-width="120" sortable>
			</el-table-column>
			<el-table-column prop="number" label="实际到账数" min-width="150" sortable>
			</el-table-column>
			<el-table-column prop="id" label="交易订单号" min-width="150" sortable>
			</el-table-column>
			<el-table-column prop="remark" label="备注" min-width="120" sortable>
			</el-table-column>
			<el-table-column label="操作" align="center" width="250">
					<template slot-scope="scope">
						<el-button size="small" @click="detail(scope.row)">查看</el-button>
						<el-button type="success" size="small" @click="pass(scope.row)">通过</el-button>
						<el-button type="warning" size="small" @click="refuse(scope.row)">驳回</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">
					{{ this.sels.length > 1 ? '批量删除' : '删除'}}
				</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="8" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

		
		<el-dialog
			:title="modal.title"
			:visible.sync="modal.show"
			:width="modal.width">
			<component :is="modal.name" @exit="exit" @callBack="callBack" :show="modal.show" :params="modal.params"></component>
		</el-dialog>
		
	</section>
</template>

<script>
	import util from '../../../common/js/util'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../../api/api';

	import modalEdit from '../modal/modal-edit.vue'
	import modalDetail from '../modal/modal-detail.vue'
	import modalGoogle from '../modal/modal-google.vue'
	import modalRefuse from '../modal/modal-refuse.vue'

	export default {
		components: {
			modalEdit,
			modalDetail,
			modalGoogle,
			modalRefuse,
		},
		data() {
			return {
				modal : {
					name : '',
					show : false,
					title : '',
					params : '',
					width: '30%',
				},

				value1: '',
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
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
			},
			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
			//新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.addForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							addUser(para).then((res) => {
								this.addLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
			selsChange: function (sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
			detail(item) {
				this.modalView({ name: 'modalDetail',  title: "详情", params: item })
			},
			pass(item) {
				this.modalView({ name: 'modalGoogle', width: '20%',  title: "请输入谷歌验证码", params: item })
			},
			refuse(item) {
				this.modalView({ name: 'modalRefuse', width: '20%',  title: "驳回理由", params: item })
			}
		},
		mounted() {
			this.getUsers();
		}
	}

</script>


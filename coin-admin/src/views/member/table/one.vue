<template>
	<section>
		<!--工具条-->
		<el-col :span="24" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="会员账号"></el-input>
				</el-form-item>
				<el-form-item>
					<el-date-picker
					v-model="value1"
					type="date"
					placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
			</el-form>
		</el-col>
		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="email" label="会员账号" width="200" sortable>
			</el-table-column>
			<!-- <el-table-column prop="firstName" label="姓氏" width="100" sortable>
			</el-table-column>
			<el-table-column prop="lastName" label="名字" width="100" sortable>
			</el-table-column> -->
			<el-table-column prop="cid" label="证件类型" width="120" sortable>
			</el-table-column>
			<el-table-column prop="tel" label="绑定手机" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="time" label="注册时间" min-width="180" sortable>
			</el-table-column>
			<!-- <el-table-column prop="google" label="是否开启谷歌认证" min-width="180">
				 <template slot-scope="scope">
						<el-switch
						v-model="scope.row.google"
						active-color="#13ce66"
						inactive-color="#dedede">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column prop="addr" label="是否开启手机认证" min-width="180">
				<template slot-scope="scope">
						<el-switch
						v-model="scope.row.telCertification"
						active-color="#13ce66"
						inactive-color="#dedede">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column prop="certification" label="是否实名" min-width="100">
			</el-table-column>
			<el-table-column prop="addr" label="是否禁用" min-width="180">
				<template slot-scope="scope">
						<el-switch
						v-model="scope.row.useable"
						active-color="#13ce66"
						inactive-color="#dedede">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column prop="addr" label="是否开启交易" min-width="180">
				<template slot-scope="scope">
						<el-switch
						v-model="scope.row.isTradeable"
						active-color="#13ce66"
						inactive-color="#dedede">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column prop="addr" label="是否激活" min-width="180">
				<template slot-scope="scope">
						<el-switch
						v-model="scope.row.isActive"
						active-color="#13ce66"
						inactive-color="#dedede">
					</el-switch>
				</template>
			</el-table-column> -->
			<el-table-column prop="url" label="照片地址" min-width="180" sortable>
			</el-table-column>
			<el-table-column label="操作" align="center" width="200">
					<template slot-scope="scope">
						<el-button round @click="edit(scope.row)">编辑</el-button>
						<el-button round @click="detail(scope.row)">查看</el-button>
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
			width="30%">
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

	export default {
		components: {
			modalEdit,
			modalDetail,
		},
		data() {
			return {
				modal : {
					name : '',
					show : false,
					title : '',
					params : '',
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
			edit(item) {
				this.modalView({ name: 'modalEdit',  title: "编辑", params: item })
			}
		},
		mounted() {
			this.getUsers();
		}
	}

</script>


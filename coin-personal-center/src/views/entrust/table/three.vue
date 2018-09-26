<template>
	<section class="entrust-history">
		<!--工具条-->
		<div class="l-flex">
			<div>
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="时间">
						<el-col :span="11">
						<el-date-picker size="mini" type="date" placeholder="选择日期"  style="width: 130px;"></el-date-picker>
						</el-col>
						<el-col class="line" :span="2">-</el-col>
						<el-col :span="11">
						<el-date-picker size="mini" type="date" placeholder="选择日期"  style="width: 130px;"></el-date-picker>
						</el-col>
					</el-form-item>

					<el-form-item label="市场">
						<el-input size="mini" style="width:100px;" placeholder="请输入内容" v-model="input3"></el-input>
					</el-form-item>
					<el-form-item label="/">
						<el-select size="mini" v-model="value" style="width: 100px;" placeholder="请选择">
							<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="类型">
						<el-select size="mini" v-model="valueD" style="width: 100px;" placeholder="请选择">
							<el-option
							v-for="item in optionsD"
							:key="item.value"
							:label="item.label"
							:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="">
						<el-button size="mini" type="primary">搜索</el-button>
						<el-button size="mini">重置</el-button>
					</el-form-item>
				
				</el-form>
			</div>
			<div class="c-tr l-flex-1 c-line-20">
					<a class="o-pl-s  o-pr-s t-link-blue c-text-7">导出历史成交记录 </a>
			</div>
		</div>
		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column prop="time" label="时间" align="center" sortable>
			</el-table-column>
			<el-table-column prop="tradeCoin" label="市场"  sortable>
			</el-table-column>
			<el-table-column prop="price" label="类型"  sortable>
			</el-table-column>
			<el-table-column prop="direction" label="方向" sortable>
			</el-table-column>
			<el-table-column prop="price" label="价格" sortable>
			</el-table-column>
			<el-table-column prop="number" label="数量"  sortable>
			</el-table-column>
			<el-table-column prop="price" label="成交率%" sortable>
			</el-table-column>
			<el-table-column prop="price" label="金额"  sortable>
			</el-table-column>
			<el-table-column prop="price" label="触发条件" align="center" sortable>
			</el-table-column>
			<el-table-column prop="types" label="状态" align="center" sortable>
			</el-table-column>
			<!-- <el-table-column label="操作" align="center" width="250">
					<template slot-scope="scope">
						<el-button round size="mini">撤销</el-button>
				</template>
			</el-table-column> -->
		</el-table>

	</section>
</template>

<script>
	import util from '../../../common/js/util'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../../api/api';

	export default {
		name: 'entrust-history',
		data() {
			return {
				options: [{
					value: '选项1',
					label: '选项1'
				}],
				value: '',
				optionsD: [{
					value: '全部',
					label: '全部'
				},{
					value: '买',
					label: '买'
				},{
					value: '卖',
					label: '卖'
				}],
				valueD: '',

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
.entrust-history{
	.el-checkbox__label{
		padding-left: 4px;
	}
	.el-form-item{
		margin-bottom: 10px;
	}
	.line{
		width: 20px;
    text-align: center;
	}
}
</style>


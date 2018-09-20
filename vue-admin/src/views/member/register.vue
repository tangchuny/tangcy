<template>
	<div class="register-user">
		<el-tabs v-model="activeName">
		<el-tab-pane label="会员信息管理" name="first">
			<one></one>
		</el-tab-pane>
		<el-tab-pane label="资金账户管理" name="second">
			<two></two>
		</el-tab-pane>
		<el-tab-pane label="个人交易手续费管理" name="third">
			<three></three>
		</el-tab-pane>
	</el-tabs>
	</div>
</template>

<script>
import one from './table/one.vue'
import two from './table/two.vue'
import three from './table/three.vue'
	export default {
		data() {
			return {
				activeName: 'second'
			}
		},
		components: {
			one, two, three,
		},
		methods: {
			
		}
	}

</script>
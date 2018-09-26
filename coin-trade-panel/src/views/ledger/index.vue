<template>
	<div class="register-user">
		<el-tabs v-model="activeName">
		<el-tab-pane label="归集币种冷账户明细" name="first">
			<one></one>
		</el-tab-pane>
		<el-tab-pane label="归集币种冷账户" name="second">
			<two></two>
		</el-tab-pane>
		<el-tab-pane label="代币资产信息" name="third">
			<three></three>
		</el-tab-pane>
		<el-tab-pane label="交易手续费查询" name="four">
			<four></four>
		</el-tab-pane>
	</el-tabs>
	</div>
</template>

<script>
import one from './table/one.vue'
import two from './table/two.vue'
import three from './table/three.vue'
import four from './table/four.vue'
	export default {
		data() {
			return {
				activeName: 'first'
			}
		},
		components: {
			one, two, three, four,
		},
		methods: {
			
		}
	}

</script>
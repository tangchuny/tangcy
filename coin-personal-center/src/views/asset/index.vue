<template>
	<div class="register-user">
		<el-tabs v-model="activeName">
		<el-tab-pane label="我的资产" name="first">
			<one></one>
		</el-tab-pane>
		<el-tab-pane label="充值" name="second">
			<two></two>
		</el-tab-pane>
		<el-tab-pane label="提现" name="third">
			<three></three>
		</el-tab-pane>
		<el-tab-pane label="充币记录" name="four">
			<four></four>
		</el-tab-pane>
		<el-tab-pane label="提币记录" name="five">
			<five></five>
		</el-tab-pane>
	</el-tabs>
	</div>
</template>

<script>
import one from './table/one.vue'
import two from './table/two.vue'
import three from './table/three.vue'
import four from './table/four.vue'
import five from './table/five.vue'
	export default {
		data() {
			return {
				activeName: 'first'
			}
		},
		components: {
			one, two, three, four, five
		},
		methods: {
			
		}
	}

</script>
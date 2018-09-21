<template>
	<div class="register-user">
		<el-tabs v-model="activeName">
		<el-tab-pane label="推荐派发管理" name="first">
			<one></one>
		</el-tab-pane>
		<el-tab-pane label="推荐人管理" name="second">
			<two></two>
		</el-tab-pane>
		<el-tab-pane label="推荐佣金配置" name="third">
			<three></three>
		</el-tab-pane>
		<el-tab-pane label="推荐明细返佣" name="four">
			<four></four>
		</el-tab-pane>
	</el-tabs>
	</div>
</template>

<script>
import one from './table-recomm/one.vue'
import two from './table-recomm/two.vue'
import three from './table-recomm/three.vue'
import four from './table-recomm/four.vue'
	export default {
		data() {
			return {
				activeName: 'second'
			}
		},
		components: {
			one, two, three, four,
		},
		methods: {
			
		}
	}

</script>
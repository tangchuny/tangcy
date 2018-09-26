<template>
	<div class="register-user">
		<el-tabs v-model="activeName">
		<el-tab-pane label="提币成功查询" name="first">
			<one></one>
		</el-tab-pane>
		<el-tab-pane label="提币成功查询" name="second">
			<two></two>
		</el-tab-pane>
		<el-tab-pane label="充币成功查询" name="third">
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
				activeName: 'first'
			}
		},
		components: {
			one, two, three,
		},
		methods: {
			
		}
	}

</script>
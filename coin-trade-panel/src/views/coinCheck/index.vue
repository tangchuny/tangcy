<template>
	<div class="register-user">
		<el-tabs v-model="activeName">
		<el-tab-pane label="审核列表" name="first">
			<one></one>
		</el-tab-pane>
		
	</el-tabs>
	</div>
</template>

<script>
import one from './table/one.vue'
	export default {
		data() {
			return {
				activeName: 'first'
			}
		},
		components: {
			one,
		},
		methods: {
			
		}
	}

</script>
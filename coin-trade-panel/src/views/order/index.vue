<template>
	<div class="register-user">
		<el-tabs v-model="activeName">
		<el-tab-pane label="当前委托" name="first">
			<one></one>
		</el-tab-pane>
		<el-tab-pane label="成交记录查询" name="second">
			<two></two>
		</el-tab-pane>
		<el-tab-pane label="历史委托" name="third">
			<three></three>
		</el-tab-pane>
		<el-tab-pane label="全部待成交委托" name="four">
			<four></four>
		</el-tab-pane>
		<el-tab-pane label="部分成交委托" name="five">
			<four></four>
		</el-tab-pane>
		<el-tab-pane label="部分成交已撤交委托" name="six">
			<four></four>
		</el-tab-pane>
		<el-tab-pane label="部分成交委托" name="seven">
			<four></four>
		</el-tab-pane>
		<el-tab-pane label="全部撤交委托" name="eight">
			<four></four>
		</el-tab-pane>
	</el-tabs>
	
	</div>
</template>

<script>
import one from './table/one.vue'
import two from './table/two.vue'
import three from './table/three.vue'
// import four from './table/four.vue'
// import five from './table/five.vue' 
// import six from './table/six.vue'
// import seven from './table/seven.vue'
// import eight from './table/eight.vue'
	export default {
		data() {
			return {
				activeName: 'first'
			}
		},
		components: {
			one, two, three,
			//  four,five,six,seven,eight,
		},
		methods: {
			
		}
	}

</script>
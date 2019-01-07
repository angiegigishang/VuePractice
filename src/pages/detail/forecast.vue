<template>
	<div class="sales-board">
		<div class="sales-board-intro">
			<h2>数据预测</h2>
			<p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
		</div>
		<div class="sales-board-form">
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					购买数量：
				</div>
				<div class="sales-board-line-right">
					<v-counter :max="100" :min="20"></v-counter>
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					媒介：
				</div>
				<div class="sales-board-line-right">
					<v-mul-chooser :selections="versionList"></v-mul-chooser>
				</div>
			</div>
			<div class="sales-board-line"></div>
			<div class="sales-board-line"></div>
			<div class="sales-board-line"></div>
		</div>
	</div>
</template>

<script>
import VCounter from '../../components/base/counter'
import VMulChooser from '../../components/base/multiplyChooser'
export default {
	components: {
		VCounter,
		VMulChooser
	},
	data () {
		return {
			versionList:  [
		        {
		          label: '纸质报告',
		          value: 0
		        },
		        {
		          label: 'pdf',
		          value: 1
		        },
		        {
		          label: '页面报告',
		          value: 2
		        },
		        {
		          label: '邮件',
		          value: 3
		        }
		    ]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.sales-board
		background: #fff
	.sales-board-intro h2
		font-size: 20px
		padding: 20px
	.sales-board-intro p
		background: #f7fcff
		padding: 10px 20px
		color: #999
		line-height: 1.8
	.sales-board-form
		padding: 30px 20px
		font-size: 14px
	.sales-board-line
		clear: both
		padding-bottom: 20px
	.sales-board-line-left
		display: inline-block
		width: 100px
	.sales-board-line-right
		display: inline-block
		width: 75%
</style>
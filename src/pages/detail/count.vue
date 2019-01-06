<template>
	<div class="sales-board">
		<div class="sales-board-intro">
			<h2>数据统计</h2>
			<p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
		</div>
		<div class="sales-board-form">
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					产品类型:
				</div>
				<div class="sales-board-line-right">
					<v-chooser :selections="buyTypes"></v-chooser>
				</div>
			</div>
			<div class="sales-board-line"></div>
			<div class="sales-board-line"></div>
			<div class="sales-board-line"></div>
		</div>
		<div class="sales-board-des"></div>
	</div>
</template>

<script>
import VChooser from '../../components/base/chooser'
export default {
	components: {
		VChooser,
	},
	data () {
		return {
			buyTypes: [{
				label: '红色版',
          		value: 0
			}, {
				label: '绿色版',
          		value: 1
			}, {
				label: '紫色版',
          		value: 2
			}]
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
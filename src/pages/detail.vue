<template>
	<div class="detail-wrap">
		<div class="detail-left">
			<div class="product-board">
				<img :src="productIcon">
				<ul>
					<router-link v-for="(item, index) in products"
								 :key="item.id"
					             :to="{path: item.path}"
					             tag="li"
					             active-class="active">
					             {{item.name}}
					</router-link>
				</ul>
			</div>
		</div>
		<div class="detail-right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
export default {
	data () {
	  return {
	  	products: [
	        {
	          name: '数据统计',
	          id:'1',
	          path: '/detail/count',
	          // icon: require('../assets/images/1.png'),
	          active: false
	        },
	        {
	          name: '数据预测',
	          id:'2',
	          path: '/detail/forecast',
	          active: false
	        },
	        {
	          name: '流量分析',
	          id:'3',
	          path: '/detail/analysis',
	          active: false,
	        },
	        {
	          name: '广告发布',
	          id:'4',
	          path: '/detail/publish',
	          active: false
	        }
	      ],
	      imgMap: {
	        '/detail/count': require("../assets/images/1.png"),
	        '/detail/forecast': require("../assets/images/2.png"),
	        '/detail/analysis': require("../assets/images/3.png"),
	        '/detail/publish': require("../assets/images/4.png")
	      }		
	   }    
	},
	computed: {
    productIcon () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>

<style lang="stylus" scoped>
	.detail-wrap
		width: 1200px
		margin: 0 auto
		overflow: hidden
		padding-top: 20px
	.detail-left
		float: left
		width: 200px
		text-align: center
	.detail-right
		float: left
		width: 980px
		margin-left: 20px
	.product-board
		background: #fff
		padding: 20px 0
	.product-board ul
		margin-top: 20px
	.procut-board li 
		text-align: left
		padding: 10px 15px
		cursor: pointer
	.product-board li.active,
	.product-board li:hover 
		background: #4fc08d
		color: #fff
	.product-board li a
		display: block	
</style>


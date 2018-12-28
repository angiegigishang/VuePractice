<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>

				<template v-for="product in productList">
					<h3>{{product.title}}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{item.name}}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<!-- <ul>
					<li v-for="item in newsList">
						<a :href="item.url"></a>
					</li>
				</ul> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		productList: {
	        pc: {
	          title: 'PC产品',
	          list: [
	            {
	              name: '数据统计',
	              url: 'http://starcraft.com'
	            },
	            {
	              name: '数据预测',
	              url: 'http://warcraft.com'
	            },
	            {
	              name: '流量分析',
	              url: 'http://overwatch.com',
	              hot: true
	            },
	            {
	              name: '广告发布',
	              url: 'http://hearstone.com'
	            }
	          ]
	        },
	        app: {
	          title: '手机应用类',
	          last: true,
	          list: [
	            {
	              name: '91助手',
	              url: 'http://weixin.com'
	            },
	            {
	              name: '产品助手',
	              url: 'http://twitter.com',
	              hot: true
	            },
	            {
	              name: '智能地图',
	              url: 'http://maps.com'
	            },
	            {
	              name: '团队语音',
	              url: 'http://phone.com'
	            }
	          ]
	        }
	      }	
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>
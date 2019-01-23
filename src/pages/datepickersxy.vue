<template>
	<div class="datetime-picker">
		datepicker
		<div class="picker-wrap">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="4">
							<span class="btn-prev">&lt;</span>
							<span class="show-year">2019</span>
							<span class="btn-next">&gt;</span>
						</th>
						<th colspan="3">
							<span class="btn-prev">&lt;</span>
							<span class="show-month">1</span>
							<span class="btn-next">&gt;</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="date[i * 7 + j] && date[i * 7 + j].status"
						    :date="date[i * 7 + j] && date[i * 7 + j].date"
						    >
						    <!-- {{i}} -->
							{{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].text}}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>


<script>
export default {
	props: {
		width: { type: String, default: '238px' },
        readonly: { type: Boolean, default: false },
        value: { type: String, default: '' },
        format: { type: String, default: 'YYYY-MM-DD' },
        styleObj: {type: Object, default: null}
	},
	data () {
		return {
			days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			date: [],
			now: new Date() //Wed Jan 23 2019 15:43:33 GMT+0800 (中国标准时间)
		}
	},
	watch: {
		now () {
			this.update()
		}
	},
	mounted () {
		this.update();
		console.log(this.date)
	},
	methods: {
		update () {
			var arr = []
			var time = new Date(this.now) //Wed Jan 23 2019 15:43:33 GMT+0800 (中国标准时间)
			//time.getMonth() 当月
			time.setMonth(time.getMonth(), 1)  //the first day:Tue Jan 01 2019 15:43:33 GMT+0800 (中国标准时间)
			var curFirstDay = time.getDay() //星期三
			curFirstDay === 0 && (curFirstDay = 7) //将最后一天的0变为7

			time.setDate(0) //上一年最后一天：Mon Dec 31 2018 15:43:33 GMT+0800 (中国标准时间)

			var lastDayCount = time.getDate() //31 上一年最后一天的日期

			for (let i = curFirstDay; i > 0; i--) {
				arr.push({
					text: lastDayCount - i + 1,
					time: new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1),
					status: 'date-pass'
				});
			}

			time.setMonth(time.getMonth() + 2, 0);  //Thu Jan 31 2019 17:30:40 GMT+0800 (中国标准时间)
			var curDayCount = time.getDate(); //31
			time.setDate(1) //Tue Jan 01 2019 17:30:40 GMT+0800 (中国标准时间)
			var value = this.value || this.stringify(new Date());
			for (let i = 0; i < curDayCount; i++) {
				let tmpTime = new Date(time.getFullYear(), time.getMonth(), i + 1)
				let status = ''
				this.stringify(tmpTime) === value && (status = 'date-active')
				arr.push({
					text: i + 1,
					time: tmpTime,
					status: status
				})
			}

			var j = 1;
			while (arr.length < 42) {
				arr.push({
					text: j,
					time: new Date(time.getFullYear(), time.getMonth() + 1, j),
					status: 'date-future'
				});
				j++;
			}
			this.date = arr;
		},
		stringify (time = this.now, format = this.format) {
			var year = time.getFullYear();
			var month = time.getMonth() + 1;
			var date = time.getDate();
			var monthName = this.months[time.getMonth()]; 

			var map = {
				YYYY: year,
				MMM: monthName,
				MM: ('0' + month).slice(-2),
				M: month,
				DD: ('0' + date).slice(-2),
				D: date
			};
			return format.replace(/Y+|M+|D+/g, function (str) {
				return map[str]
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
	.datetime-picker 
		position relative
		display inline-block
		color #333
	.datetime-picker *
		box-sizing: border-box
	.datetime-picker .picker-wrap
		position absolute
		z-index 1000
		width 238px
		height 280px
		margin-top 5px
		background-color #fff
		box-shadow 0 0 6px #ccc
	.datetime-picker table
		width 100%
		border-collapse collapse
		border-spacing 0
		text-align center
		font-size 13px
	.datetime-picker tr
		height 34px
		border 0 none
	.datetime-picker th, .datetime-picker td 
		user-selet none
		width 34px
		height 34px
		padding 0
		border 0 none
		line-height 34px
		text-align center
	.datetime-picker td 
		cursor pointer
	.datetime-picker td:hover
		background-color: #f0f0f0
	.datetime-picker td.date-pass, .datetime-picker td.date-future
		color: #aaa
	.datetime-picker td.date-active
		background-color: #ececec
		color: #3bb4f2
	
</style>
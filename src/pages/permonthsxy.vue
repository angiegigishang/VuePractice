<template>
	<div class="datetime-picker">
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[0]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr[(i - 1) * 7 + (j - 1)] && ddatearr[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr[i * 7 + j] && ddatearr[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr[(i - 1) * 7 + (j - 1)] && ddatearr[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[1]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr1[(i - 1) * 7 + (j - 1)] && ddatearr1[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr1[i * 7 + j] && ddatearr1[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr1[(i - 1) * 7 + (j - 1)] && ddatearr1[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[2]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr2[(i - 1) * 7 + (j - 1)] && ddatearr2[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr2[i * 7 + j] && ddatearr2[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr2[(i - 1) * 7 + (j - 1)] && ddatearr2[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[3]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr3[(i - 1) * 7 + (j - 1)] && ddatearr3[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr3[i * 7 + j] && ddatearr3[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr3[(i - 1) * 7 + (j - 1)] && ddatearr3[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[4]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr4[(i - 1) * 7 + (j - 1)] && ddatearr4[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr4[i * 7 + j] && ddatearr4[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr4[(i - 1) * 7 + (j - 1)] && ddatearr4[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[5]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr5[(i - 1) * 7 + (j - 1)] && ddatearr5[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr5[i * 7 + j] && ddatearr5[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr5[(i - 1) * 7 + (j - 1)] && ddatearr5[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[6]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr6[(i - 1) * 7 + (j - 1)] && ddatearr6[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr6[i * 7 + j] && ddatearr6[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr6[(i - 1) * 7 + (j - 1)] && ddatearr6[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[7]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr7[(i - 1) * 7 + (j - 1)] && ddatearr7[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr7[i * 7 + j] && ddatearr7[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr7[(i - 1) * 7 + (j - 1)] && ddatearr7[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[8]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr8[(i - 1) * 7 + (j - 1)] && ddatearr8[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr8[i * 7 + j] && ddatearr8[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr8[(i - 1) * 7 + (j - 1)] && ddatearr8[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[9]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr9[(i - 1) * 7 + (j - 1)] && ddatearr9[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr9[i * 7 + j] && ddatearr9[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr9[(i - 1) * 7 + (j - 1)] && ddatearr9[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[10]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr10[(i - 1) * 7 + (j - 1)] && ddatearr10[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr10[i * 7 + j] && ddatearr10[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr10[(i - 1) * 7 + (j - 1)] && ddatearr10[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="picker-wrap2">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="7">
							<span class="show-month">{{months[11]}}</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for="j in 7"
						    :class="[ddatearr11[(i - 1) * 7 + (j - 1)] && ddatearr11[(i - 1) * 7 + (j - 1)].status]"
						    :date="ddatearr11[i * 7 + j] && ddatearr11[i * 7 + j].date"
						    @click="highlight"
						    >
							{{ddatearr11[(i - 1) * 7 + (j - 1)] && ddatearr11[(i - 1) * 7 + (j - 1)].text}}
							<!-- {{date[(i - 1) * 7 + (j - 1)] && date[(i - 1) * 7 + (j - 1)].index}} -->
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<transition name="drop">
			<div class="alertbox" v-show="show">
						<div class="alertbox-title">节日</div>
						<input class="alertbox-mark" v-model="val"/>
						<button class="alertbox-confirm"  @click="confirmbtn()">确认</button>
						{{val}}
			</div>
		</transition>
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
			mark: '',
			val: '',
			tabval: '',
			show: false,
			days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			date: [],
			datearr: [],
			arr: [],
			ddatearr: [],
			ddatearr1: [],
			ddatearr2: [],
			ddatearr3: [],
			ddatearr4: [],
			ddatearr5: [],
			ddatearr6: [],
			ddatearr7: [],
			ddatearr8: [],
			ddatearr9: [],
			ddatearr10: [],
			ddatearr11: [],
			now: new Date() //Wed Jan 23 2019 15:43:33 GMT+0800 (中国标准时间)
		}
	},
	watch: {
		now () {
			this.arr = []
			this.update()
		}
	},
	mounted () {
		//this.update();
		this.basedata () 
		//console.log(this.date)
		
	},
	methods: {
		highlight (event) {
			var that = this
			var el = parseInt(event.currentTarget.innerText)
			//console.log(this.arr)
			//console.log(event.target)
			
			//event.currentTarget.innerText += '节'
			//event.currentTarget.innerText += this.tabval
			this.val = ''
			//this.tabval = ''
			this.show = !this.show
			//console.log(that.tabval)
			for(var i=0; i<36; i++) {
				//console.log(that.ddatearr[i].text, el, that.tabval)
				if(that.ddatearr[i].text === el) {
					//console.log( that.ddatearr[i])
                    //that.ddatearr[i].text += 'guo'
                    that.ddatearr[i].text += that.tabval        
                    console.log( that.ddatearr[i].text)
				}
			}
			//console.log(event.currentTarget.innerText)
		},
		confirmbtn () {
			this.show = !this.show
			this.tabval = this.val	
		},
		update (data, monthindex) {
			var time = new Date(data) //Wed Jan 23 2019 15:43:33 GMT+0800 (中国标准时间)
			//time.getMonth() 当月
			time.setMonth(time.getMonth(), 1)  //the first day:Tue Jan 01 2019 15:43:33 GMT+0800 (中国标准时间)
			var curFirstDay = time.getDay() //星期三
			curFirstDay === 0 && (curFirstDay = 7) //将最后一天的0变为7

			time.setDate(0) //上一年最后一天：Mon Dec 31 2018 15:43:33 GMT+0800 (中国标准时间)

			var lastDayCount = time.getDate() //31 上一年最后一天的日期

			for (let i = curFirstDay; i > 0; i--) {
				this.arr.push({
					text: '',
					time: new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1),
					status: 'date-pass',
					index: curFirstDay - i
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
				this.arr.push({
					text: i + 1,
					time: tmpTime,
					status: status,
					index: i + curFirstDay
				})
			}

			var j = 1;
			while (this.arr.length < 42) {
				this.arr.push({
					text: '',
					time: new Date(time.getFullYear(), time.getMonth() + 1, j),
					status: 'date-future',
					index: curDayCount + j + 1
				});
				j++;
			}
			//console.log('arr11', this.arr)
			this.datearr.push(this.arr)
			this.arr = []
			//console.log('datearr', this.datearr)
			//console.log('monthindex', monthindex)
			//console.log('0', this.datearr[0])
			this.ddatearr = this.datearr[0]
			this.ddatearr1 = this.datearr[1]
			this.ddatearr2 = this.datearr[2]
			this.ddatearr3 = this.datearr[3]
			this.ddatearr4 = this.datearr[4]
			this.ddatearr5 = this.datearr[5]
			this.ddatearr6 = this.datearr[6]
			this.ddatearr7 = this.datearr[7]
			this.ddatearr8 = this.datearr[8]
			this.ddatearr9 = this.datearr[9]
			this.ddatearr10 = this.datearr[10]
			this.ddatearr11 = this.datearr[11]
			//console.log('测试', monthindex, this.ddatearr)
			//console.log(this.ddatearr[20].text)
		},
		basedata () {
			for (var i=0; i<12; i++){
				this.update(this.now.setMonth(i), i)
			}
            //this.update(this.now,0)
            //this.update(this.now.setMonth(1), 1)
            //this.update(this.now.setMonth(2), 2)
		},
		yearClick (flag) {
			this.now.setFullYear(this.now.getFullYear() + flag);
			this.now = new Date(this.now)
		},
		monthClick (flag) {
			this.now.setMonth(this.now.getMonth() + flag);
			this.now = new Date(this.now)
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

<style lang="stylus">
	.datetime-picker 
		position relative
		display inline-block
		color #333
	.datetime-picker *
		box-sizing: border-box
	.datetime-picker .picker-wrap2
		float left
		margin 10px
		//position absolute
		// z-index 10
		// width 238px
		// height 280px
		// margin-top 5px
		// background-color #fff
		// box-shadow 0 0 6px #ccc
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
	.date-future, .date-pass
		color: #aaa
	.datetime-picker td.date-active
		background-color: #ececec
		color: #3bb4f2
	.datetime-picker .date-head
		background-color: #3bb4f2
		text-align: center
		color: #fff
		font-size: 14px
	.datetime-picker .date-days 
		color: #3bb4f2
		font-size: 14px
	.datetime-picker .show-year
		display: inline-block	
		min-width: 62px
		vertical-align: middle
	.datetime-picker .show-month
		display: inline-block
		min-width: 28px
		vertical-align: middle
    .datetime-picker .btn-prev,
	.datetime-picker .btn-next {
	    cursor: pointer;
	    display: inline-block;
	    padding: 0 10px;
	    vertical-align: middle;
	}

	.datetime-picker .btn-prev:hover,
	.datetime-picker .btn-next:hover {
	    background: rgba(16, 160, 234, 0.5);
	}
	.alertbox
		position absolute
		left 50%
		top 50%
		margin-left -100px
		margin-top -100px
		width 200px
		height 200px
		background pink
		z-index 20
	.drop-enter-active 
		transition: all .5s ease
	.drop-leave-active 
		transition: all .3s ease
	.drop-enter
		transform: translateY(-90px)
	.drop-leave-active
		transform: translateY(-90px)
	.alertbox-mark
		position absolute
		width 80%
		margin-top 8px
		margin-left 10px
		outline none
	.alertbox-confirm
		margin-top 53px
		margin-left 40px
	.alertbox-title
		margin-top 2px
		margin-left 2px
	.festival
		font-size: 2px
	.markdown
		background-color: red
</style>
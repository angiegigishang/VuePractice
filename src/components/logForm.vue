<template>
	<div class="login-form">
		<div class="g-form">
			<div class="g-form-line">
				<span class="g-form-label">用户名：</span>
				<div class="g-form-input">
					<input type="text"
					       v-model="usernameModel"
					       placeholder="请输入用户名">
				</div>
				<span class="g-form-error">{{ userErrors.errorText }}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">密码:</span>
				<div class="g-form-input">
					<input type="password"
					       v-model="passwordModel"
					       placeholder="请输入密码">
				</div>
				<span class="g-form-error">{{passwordErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<div class="g-form-btn">
					<a class="button-log" @click="onLogin">登陆</a>
				</div>
			</div>
			<p>{{ errorText }}</p>
		</div>
	</div>
</template>

<script>
import {baseUrl} from '../assets/ljs/env'
export default {
	data () {
		return {
			usernameModel: '',
			passwordModel: '',
			errorText: ''
		}
	},
	computed: {
		userErrors () {
			let errorText, status
			if (!/@/g.test(this.usernameModel)) {
				status = false
				errorText = '不包含@'
			}
			else {
				status = true
				errorText = ''
			}
			if (!this.userFlag) {
				errorText = ''
				this.userFlag = true
			}
			return {
				status,
				errorText
			}
		},
		passwordErrors () {
			let errorText, status
			if(!/^\w{1,6}$/g.test(this.passwordModel)) {
				status = false
				errorText = '密码不是1-6位'
			}
			else {
				status = true
				errorText = ''
			}
			if(!this.passwordFlag) {
				errorText = ''
				this.passwordFlag = true
			}
			return {
				status,
				errorText
			}
		}
	},
	methods: {
		onLogin () {
			if(!this.userErrors.status || !this.passwordErrors.status) {
				this.errorText = '部分选项未通过'
			}
			else {
				this.errorText = ''
				this.$http.get(baseUrl + '/login')
				.then((res) => {
					console.log(res.data)
					this.$emit('has-log', res.data)
				}, (error) => {
					console.log(error)
				})
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.g-form-btn
	width: 100%
.button-log
	width: 120px
	height: 18px
	border-radius: 4px
	box-shadow: 6px 6px 5px #888888
	background: #4fc08d
	color: #fff
	display: inline-block
	padding: 10px 20px
	cursor: pointer
.button-log:hover
	background: #84e0b6	
	box-shadow: 6px 6px 5px #e4d9d9
</style>
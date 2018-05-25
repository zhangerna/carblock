<template>
	<div class="percenter">
		<HeaderMain></HeaderMain>
		<div class="container center content" v-show="data">
			<div class="row">
	            <div class="col-sm-4 col-md-4 col-xs-12">
	                <div class="text-center center-module">
	                    <h3>{{ $t('m.percenter_mount1') }}</h3>
	                    <p><span class="hot">{{ data ? data.summary.mining : null }}</span>&nbsp;CAR Tokens</p>
	                </div>
	            </div>
	            <div class="col-sm-4 col-md-4 col-xs-12">
	                <div class="text-center center-module">
	                    <h3>{{ $t('m.percenter_mount2') }}</h3>
	                    <p><span class="hot">{{ data ? data.summary.reward : null }}</span>&nbsp;CAR Tokens</p>
	                </div>
	            </div>
	            <div class="col-sm-4 col-md-4 col-xs-12">
	                <div class="text-center center-module">
	                    <h3>{{ $t('m.percenter_mount3') }}</h3>
	                    <p><span class="hot">{{ data ? data.summary.addition : null }}</span>&nbsp;%</p>
	                </div>
	            </div>
	        </div>
	        <p class="text-center mar-top">* {{ $t('m.percenter_title_desc') }}【<a href="http://www.carblock.io/mycarblock/rules">{{ $t('m.reade_more') }}</a>】</p>
	        <div class="table-block" v-for="item in (data && data.order ? data.order : null)">
        		<TableBlock :data="item" ></TableBlock>
            </div>
		</div>
		<div class="email-tip" v-show="!data">
			<div class="email-content">
				<h2>{{ $t('m.percenter_tip_title') }}</h2>
				<div class="login">
					<input id="login_email" type="email" v-model="email" :placeholder="$t('m.percenter_tip_holder')">
					<button class="login_button" id="login" type="submit" @click="login()">{{ $t('m.percenter_tip_login') }}</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.percenter {
		background-color:#f2f2f2;
	}
	.center {
		padding: 120px 0;
	}
	.mar-top {
		margin-top: 30px;
	}
	.center-module{
        background: #0ea2a5;
        border-radius: 20px;
        color: white;
        margin: 10px 10px;
        height: 100%;
        padding-top: 1px;
    }
	.email-tip {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #f2f2f2;
	}
	.email-content {
		background: #fff;
		border-radius: 20px;
		padding: 20px;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.login {
			margin: 0 20%;
		}
		input {
			padding-left: 8px;
			width: 100%;
			background: #eee;
			border-radius: 20px;
			border: 1px solid #eee;
			height: 30px;
		}
		button {
			margin-top: 20px;
			border: 1px solid #0ea2a5;
			color: #0ea2a5;
			padding: 4px 40px;
			border-radius: 20px;
			background: transparent;
		}
	}
</style>
<script>
	import HeaderMain from '../components/nav';
	import TableBlock from './components/table_block';
	export default {
		data(){
			return {
				data: null,
				email: ""
			}
		},
		mounted(){
			// this.$http.post('/api/summary/',{
			// 	email:'xxx'
			// },{responseType:'json'}).then(function(res){
			// })
		},
		components:{
			HeaderMain,
			TableBlock
		},
		methods: {
			login:function(){
				console.log("......");
				console.log(this.email);
				if (this.email) {
					var self = this;
					this.$http.get('/api/summary/' + this.email).then(function(response){
						console.log(response);
						if (response.status == 200){
							self.data = response.data;
						}
					});
				}
			}
		}
	}
</script>
<template>
	<div>
		<nav class="navbar navbar-default navbar-fixed-top">
		    <div class="container-fluid">
		        <div class="navbar-header">
			        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
			            <span class="sr-only">Toggle navigation</span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
			        </button>
			        <a class="navbar-brand" href="/" data-hash="top"><img class="nav-logo" src="../assets/img/logo.png" /></a>
		        </div>
		    
		        <div class="collapse navbar-collapse" id="navbar-collapse-1">
		        <ul class="nav navbar-nav">
		        	<li v-for="item in nav_list" @click="linkTO(item.link)">
		        		<a href="javascript:void(0)">{{ $t(item.name) }}</a>
		        	</li>
		        </ul>
		        <ul class="nav navbar-nav navbar-right">
		            <li><p class="navbar-text langs">
		                <span class="link" data-lang="en" @click="change('en')">English</span> | 
		                <span class="link" data-lang="cn" @click="change('zh')">中文</span>
		            </p></li>
		        </ul>
		        </div>
		    </div>
		</nav>
	</div>
</template>

<style lang="less" scoped>
	@import "../assets/css/component/nav.less";
	.navbar .navbar-nav{
		a:hover {color:#777;}
	}
</style>

<script>
	export default {
		data(){
			return {
				nav_list: [
					{link:"/", name: 'm.about_us'},
					{link:"/percenter", name: 'm.percenter'}
				]
			}
		},
		methods: {
			linkTO:function(link){
				this.$router.push({path: link})
			},
			change: function(type){
				console.log("......")
				console.log(type)
				localStorage.lang = type
				this.$i18n.locale = type;
			}
		}

	}
</script>
<template>
	<div>
		<header-main></header-main>
	  	<div class="main">
	  		<carblock-sale></carblock-sale>
	    </div>
	</div>
</template>

<style scoped>
	@import "../assets/css/index.less";
</style>


<script>
	import HeaderMain from '../components/nav';
	import CarblockSale from './components/carblock_sale';
	export default {
		data(){
			return {
				msg: 'index page'
			};
		},
		components: {
			HeaderMain,
			CarblockSale
		},
		methods: {

		}
	};
</script>
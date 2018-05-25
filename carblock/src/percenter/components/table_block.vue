<template>
	<div class="table-block">
        <p>{{ $t("m.percenter_order") }} {{ data.wallet_address ? data.wallet_address : $t("m.no_wallet_adress") }}</p>
        <table class="table">
            <tr v-show="data.eth">
                <td width="50%">{{ $t("m.percenter_eth") }}</td>
                <td width="50%"><span class="num-bold">{{ data.eth }}</span>&nbsp;ETH</td>
            </tr>
            <tr v-show="data.mining">
                <td width="50%">{{ $t("m.percenter_mining") }}</td>
                <td width="50%"><span class="num-bold">{{ data.mining }}</span>&nbsp;CAR Tokens</td>
            </tr>
            <tr v-show="data.alpha && Number(data.alpha) > 0">
                <td width="50%">{{ $t("m.percenter_alpha") }}</td>
                <td width="50%"><span class="num-bold">{{ data.alpha }}</span>&nbsp;CAR Tokens</td>
            </tr>
            <tr v-show="data.referred && Number(data.referred) > 0">
                <td width="50%">{{ $t("m.percenter_referred") }}</td>
                <td width="50%"><span class="num-bold">{{ data.alpha }}</span>&nbsp;CAR Tokens</td>
            </tr>
            <tr v-show="data.beta && Number(data.beta) > 0">
                <td width="50%">{{ $t("m.percenter_beta") }}</td>
                <td width="50%"><span class="num-bold">{{ data.beta }}</span>&nbsp;CAR Tokens</td>
            </tr>
            <tr v-show="data.addition">
                <td width="50%">{{ $t("m.percenter_addition") }}</td>
                <td width="50%"><span class="num-bold">{{ data.addition }}</span>&nbsp;%</td>
            </tr>
        </table>
    </div>
</template>
<style lang="less" scoped>
	.text-center {
		text-align: center;
	}
	.mar-top {
		margin-top: 30px;
	}
	.table {
		margin-bottom: 0px;
	}

	.num-bold {
		font-size: 26px;
		font-weight: bold;
	}
	.hot {
		font-size: 26px;
		font-weight: bold;
	}
	.table>tbody>tr>td {
		vertical-align: middle;
	}

	.table-block {
		background: #fff;
		padding: 20px;
    	border-radius: 10px;
    	margin-top: 20px;
    	p {
    		background: #f2f2f2;
    		padding: 10px 10px 6px 10px;
    	}
	}
</style>

<script>
	export default {
		props: ["data"],
		data(){
			return {
				
			}
		}
	}
</script>
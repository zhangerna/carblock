<template>
	<div class="block-1 block gradient-1 carblock-sale">
        <div class="container">
            <div class="countdown">
                <div class="text-center">
                    <h2>CarBlock<sup>TM</sup>{{ $t('m.about_title')}}</h2>
                    <img src="../../assets/img/schedule5_img_cn.png" width="100%">  
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <img src="../../assets/img/imo_carblock_pdt.png" width="100%">
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12" style="postion:relative">
                    <div class="carblock-content">
                        <h2>CarBlock<sup>™</sup> {{ $t('m.about_pro_title') }}</h2>
                        <p>{{ $t('m.about_pro_des') }}</p>
                        <div class="imo_table">
                            <ul>
                                <li><img src="../../assets/img/imo_icon_1.png">{{ $t('m.about_pro_li1') }}</li>
                                <li><img src="../../assets/img/imo_icon_2.png">{{ $t('m.about_pro_li2') }}</li>
                            </ul>
                            <ul>
                                <li><img src="../../assets/img/imo_icon_3.png">{{ $t('m.about_pro_li3')  }}</li>
                                <li><img src="../../assets/img/imo_icon_4.png">{{ $t('m.about_pro_li4')  }}</li>
                            </ul>
                        </div>
                        <div class="buy button">
                            立即预约
                        </div>
                        <p>1ETH = 首周15,000CAR Tokens收益</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.carblock-sale {color: #ffffff;padding: 6% 0;height:100vw;}
.text-center img {margin-top: 6%;}
.carblock-content {
    h2 {font-size:40px}
    .buy {font-size: 30px;background-color: #fff;color: #0c8e94;border-radius:10px;text-align:center;width:80%;padding:10px 0;margin:6% 0;}
    p {font-size:20px}
}
.row {margin-top:6%}
ul {padding: 0px}
.imo_table li{
    display: inline-block;list-style-type: none;
    margin-right:4%;
    img {
        margin-right:4px;
    }
}
</style>

<script>
    
</script>
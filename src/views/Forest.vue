<template>
	<div style="text-align: center;">
			<van-swipe :autoplay="3000">
			  <van-swipe-item v-for="(item, index) in dat.data.goods_info[0].gallery_v3" :key="index">
				<img :src="item.img_url"  width="100%"/>
			  </van-swipe-item>
			</van-swipe>
			<van-icon @click="$router.go(-1)" name="arrow-left" size=30 style="position: fixed;left: 20px;top: 1.25rem; "></van-icon>
			<div class="pp1">
				<div>预支付￥100</div>
				<span>
					<van-count-down
					  :time="time"
					format="剩余 DD 天 HH 时 mm 分 ss 秒"
					/>
				</span>
			</div>
			<div  class="t2">
				<div>	
					<p>{{dat.data.seo.title}}</p>
				</div>
			</div>
			
			<div>
				<van-cell is-link @click="showPopup">商品规则</van-cell>
				
				<van-popup v-model="show"     position="bottom"   :style="{ height: '80%' }" class="cat">
					<p>1.预售预付款下单后，请在30分钟内付款。若超时，该订单将自动被取消</p>
					<p>2.预付款付款后，可以申请退款，退款将在财务审核后陆续退回给用户</p>
					<p>3.预售结束后，请至小米商城“我的订单”中查找所要支付尾款的订单</p>
					<p>4.尾款开始支付后，请在规定的时间内支付尾款。若超时将自动取消订单，预付款退还。请注意预售的结束时间，并及时支付尾款</p>
					<p>5.如果提供赠品，赠品赠送顺序按照预付款付款成功时间来计算，而不是预付款下单时间。订单若取消，如有赠品，则赠品不予赠送</p>
					<p>6.每个用户限购一件；（同一个用户ID或者不同用户ID，但具有相同的收货地址、支付账号将视为同一个用户；）</p>
					<p>7.为了保障普通用户的购买需求，避免黄牛囤积货物抬价转售，将对此类异常订单采取必要的措施</p>
				</van-popup>
			</div>
			<div>
				
				
			</div>
			
			
			<van-goods-action>	
			  <van-goods-action-icon icon="wap-home-o" text="首页" />
			  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
			  <span class="t1">
				    <van-goods-action-button type="danger" text="敬请期待" />
			  </span>
		</van-goods-action>
	</div>		
</template>
			
<script>
import {data7} from '../data.js'		
export default{		
		data(){	
			return{	
				dat:data7,
				time: 30 * 60 * 60 * 1000,
				show: false
			}
		},
		methods: {
		    showPopup() {
		      this.show = true;
		    },
			onBuyClicked(){
				
			},
			onAddCartClicked(){
				
			}
		  }
		
}	
</script>

<style>
.t1{
	width: 150px;
	position: relative;
	left: 100px;
}
.t2{
	text-align: center;
}

.pp1{
	width: 100%;
	height: 60px;
	background-color: orangered;
	margin-top: -4px;
}
.pp1 div{
	float: left;
	margin-top: 20px;
	font-size: 16px;
	margin-left: 20px;	
	color: white;
}
.pp1 span{
	float: right;
	margin-top: 2px;
	color: white;
}
.cat p{
	font-size: 13px;
	margin-left: 2px;
}
</style>	
	
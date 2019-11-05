<template>
	
	<div style="text-align: center;">
		<h1 >详情页</h1>
		<p>{{this.$route.params.id}}</p>
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(item, index) in pro.data.goods_info[0].gallery_v3" :key="index">
		    <img :src="item.img_url"  width="100%"/>
		  </van-swipe-item>
		</van-swipe>
		
		<van-cell is-link @click="showPopup" >手机配置</van-cell>

		<van-popup v-model="show" position="bottom"   :style="{ height: '60%' }"></van-popup>
	
		<van-goods-action>
		  <van-goods-action-icon icon="wap-home-o" text="首页" />
		  <van-goods-action-icon icon="cart-o" text="购物车" info="10" />
		  <van-goods-action-button type="danger" text="立即预约" />
		</van-goods-action>
	</div>
</template>

<script>
import {product} from '../data.js'
export default{
	data(){
		return{
			pro:product,
			show:false
		}
	},
	 methods: {
	    showPopup() {
	      this.show = true;
	    }
	  }
	
}
</script>

<style>
</style>

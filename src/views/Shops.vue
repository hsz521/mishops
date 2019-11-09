<template>
	<div class="shops" >
		<div class="acrtss" v-show="this.$store.getters.getlog">
			<table cellpadding="" cellspacing="" border="">
				<tr><th>商品名</th><th>价格</th><th>数量</th></tr>
				<tr v-for="item in $store.state.goods">	
					<td>{{item.title}}</td>
					<td>{{item.price}}</td>
					<td>
						<button @click="reduce">-</button>
						<span>{{item.num}}</span>
						<button @click="add">+</button>
					</td>
				</tr>
			</table>	
			
		</div>
		<div v-show="!this.$store.getters.getlog">
			<div class="sky1">
				<van-nav-bar title="购物车" left-text="返回" left-arrow   @click-left="onClickLeft" @click-right="onClickRight">
				  <van-icon  name="search" slot="right" />
				</van-nav-bar>
			</div>
			<div class="sky2">
				<div class="sky21">
					<span>登陆后享受更多优惠</span>
				</div>
				<div class="sky22">
					<span @click="dd">去登录></span>		
				</div>	
			</div>
			<van-image
			  width="100%"	
			  height="60"
			  src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
			/>
			<div class="sky3">
				<van-row>	
				  <van-col span="8" class="sky31">
					  <img :src="da.recom_list[0].image_url" alt="" @click="onto1">
					  <span>{{da.recom_list[0].name}}</span>
					  <h4>{{da.recom_list[0].price}}</h4>
				  </van-col>
				<van-col span="8" class="sky32">
					  <img :src="da.recom_list[1].image_url" alt="" @click="onto1">
					  <span>{{da.recom_list[0].name}}</span>
					  <h4>{{da.recom_list[1].price}}</h4>
				  </van-col>
				</van-row>	
			</div>
			<div class="sky3">
				<van-row>	
				  <van-col span="8" class="sky31">
					  <img :src="da.recom_list[2].image_url" alt=""  @click="onto1">
					  <span>{{da.recom_list[2].name}}</span>
					  <h4>{{da.recom_list[2].price}}</h4>
				  </van-col>
				<van-col span="8" class="sky32">	
					  <img :src="da.recom_list[3].image_url" alt=""  @click="onto1">
					  <span>{{da.recom_list[3].name}}</span>
					  <h4>{{da.recom_list[3].price}}</h4>
				  </van-col>
				</van-row>
			</div>	
			<div class="sky3">
				<van-row>	
				  <van-col span="8" class="sky31">
					  <img :src="da.recom_list[4].image_url" alt=""  @click="onto1">
					  <span>{{da.recom_list[4].name}}</span>
					  <h4>{{da.recom_list[4].price}}</h4>
				  </van-col>
				<van-col span="8" class="sky32">	
					  <img :src="da.recom_list[5].image_url" alt=""  @click="onto1">
					  <span>{{da.recom_list[5].name}}</span>
					  <h4>{{da.recom_list[5].price}}</h4>
				  </van-col>
				</van-row>
			</div>
			<div class="sky3">
				<van-row>	
				  <van-col span="8" class="sky31">
					  <img :src="da.recom_list[6].image_url" alt=""  @click="onto1">
					  <span>{{da.recom_list[6].name}}</span>	
					  <h4>{{da.recom_list[6].price}}</h4>
				  </van-col>
				<van-col span="8" class="sky32">	
					  <img :src="da.recom_list[7].image_url" alt=""  @click="onto1">
					  <span>{{da.recom_list[7].name}}</span>
					  <h4>{{da.recom_list[7].price}}</h4>
				  </van-col>
				</van-row>
			</div>
			<div class="sky3">
				<van-row>	
				  <van-col span="8" class="sky31">
					  <img :src="da.recom_list[8].image_url" alt=""  @click="onto1">
					  <span>{{da.recom_list[8].name}}</span>
					  <h4>{{da.recom_list[8].price}}</h4>
				  </van-col>
				<van-col span="8" class="sky32">	
					  <img :src="da.recom_list[9].image_url" alt=""  @click="onto1">
					  <span>{{da.recom_list[9].name}}</span>
					  <h4>{{da.recom_list[9].price}}</h4>
				  </van-col>
				</van-row>
			</div>
			<div class="sky3">
				<van-row>	
					<van-col span="8" class="sky31">
						<img :src="da.recom_list[10].image_url" alt=""  @click="onto1">
						<span>{{da.recom_list[10].name}}</span>
						<h4>{{da.recom_list[10].price}}</h4>
					</van-col>
				<van-col span="8" class="sky32">	
						<img :src="da.recom_list[11].image_url" alt=""  @click="onto1">
						<span>{{da.recom_list[11].name}}</span>
						<h4>{{da.recom_list[11].price}}</h4>
				</van-col>
				</van-row>
			</div>	
			<div class="sky3">
				<van-row>	
					<van-col span="8" class="sky31">
						<img :src="da.recom_list[12].image_url" alt=""  @click="onto1">
						<span>{{da.recom_list[12].name}}</span>
						<h4>{{da.recom_list[12].price}}</h4>
					</van-col>
				<van-col span="8" class="sky32">	
						<img :src="da.recom_list[13].image_url" alt=""  @click="onto1">
						<span>{{da.recom_list[13].name}}</span>
						<h4>{{da.recom_list[13].price}}</h4>
				</van-col>
				</van-row>
			</div>		
		</div>
		
	</div>	
</template>

<script>
import {data6} from '../data.js'
export default {
	data(){
		return{
				da:data6.data,
				num:''
			}
	},
  methods: {
    onClickLeft() {	
     this.$router.go(-1);		
    },
    onClickRight() {
      this.$router.push('/')
    },
	onto1(){
		this.$router.push('/forest/1011')
	},
	dd(){
		this.$router.push('/login')
	},
	reduce(){
		this.good.num--;
	},
	add(){
		this.item.num++;
	}
  }
}
</script>
	
<style scoped="scoped" lang="less">
.acrtss{
		display: flex;
		justify-content: center;
}
.shops{
	width: 100%;
}
.sky1{
	width: 100%;
	background-color: #f2f2f2;
}
.sky2{
	width: 100%;
	background-color: #f2f2f2;
	height: 50px;
	.sky21{
		height: 50px;
		width: 50%;
		float: left;
	}
	.sky22{	
		height: 50px;
		width: 50%;
		float: left;
	}
}
.sky21 span{
	position: relative;
	top: 10px;
	left: 10px;	
	font-size: 17px;
}	
.sky22 span{
	font-size:14px;
	position: relative;
	left: 120px;
	top: 10px;	
}
.sky3{
	width: 100%;		
	.sky31{			
		width: 49%;	
		text-align: center;
		float: left;
		margin-right: 3px;
		img{
			width: 100%;
		}
		span{
			// margin-left: 10px;
			font-size: 10px;
		}
		h4{
			// margin-left: 10px;
			color: #ff6700;
			margin-top: 5px;
		}	
	}
	.sky32{
		width: 49%;
			text-align: center;
			float:right;	
			img{
				width: 100%;
			}
			span{
				// margin-left: 10px;
				font-size: 10px;
			}
			h4{
				// margin-left: 10px;
				color: #ff6700;
				margin-top: 5px;
			}	
		
	}
}
</style>	

<template>
		
  <div class="home" v-if="data.data">
	  
	  <div>
		  <img class="toto1" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1573045551&di=5f6346efa2e20cd72cd534b1d12890d7&src=http://www.ofweek.com/Upload/plainimages/tinxu/6/11.jpg" alt="">
		  
		  <div style="width: 80%;margin: 0 auto;">
			<van-search placeholder="搜索商品名称" v-model="value" />
		  </div>
			<!-- <van-icon style="margin-left: 90%;margin-top: 5%;" name="manager-o"/>	 -->
	  </div>	
		
	<van-tabs v-model="active">
	  <van-tab v-for="item in data.data.tabs" style="text-align: center;" :title="item.name">{{item.name}}</van-tab>
	</van-tabs>

	<div v-show="active==0">	
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(image, index) in data.data.data.sections[0].body.items" :key="index">
		    <img class="full" :src="image.img_url_webp"/>
		  </van-swipe-item>
		</van-swipe>	
			
		<van-grid :column-num="5"  icon-size="72px">
		  <van-grid-item
		    v-for="item in data.data.data.sections[1].body.items"
		    :key="item.value"
		    :icon="item.img_url_webp"
		  />
		</van-grid>
		<van-grid :column-num="5" icon-size="72px">	
		  <van-grid-item
		    v-for="item in data.data.data.sections[2].body.items"
		    :key="item.value"
		    :icon="item.img_url_webp"
		  />
		</van-grid>
		<div class="splict"></div>
		<div class="span4">
			<span class="span1">
				<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/32b5d24417b673008f386592c4d17046.jpg?f=webp&w=537&h=762&bg=C1DDE9" alt="">
			</span>
			<span class="span2">
				<img class="img1" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1480d862e1f5a41e5adae8c030eef511.jpg?f=webp&w=537&h=378&bg=F4FCFF" alt="">
				<img class="img2" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b1bd2de2b7ef3589377831cc7d41fde.jpg?f=webp&w=537&h=378&bg=FCF5E5" alt="">
			</span>
		</div>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="160px"
		  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/54cbbe787b6269d434b26bd80de4d6a4.jpg?f=webp&w=1080&h=420&bg=CBDDE7"
		/>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="260px"
		 :src="data.data.data.sections[8].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[10].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[10].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[10].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[10].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[10].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[10].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[10].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[10].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[12].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[12].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[12].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[12].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[12].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[12].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[12].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[12].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="splict"></div>
		<div class="mi1">
			<p>{{data.data.data.sections[14].body.items[0].action_title}}</p>	
		</div>
		<div class="splict"></div>	
		<van-image
		  width="100%"	
		  height="180px"
		  src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad96e9decd39cf161bb27825e1e72f72.jpg?f=webp&w=1080&h=420&bg=EDECE7"
		/>	
		<div class="splict"></div>
		<van-image
		  width="100%"	
		  height="240px"
		  src="//i8.mifile.cn/v1/a1/34cc562e-8dd3-61e9-0209-395edb9237a1.webp?w=1080&h=660&bg=B2C5D1"
		/>
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[20].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[20].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[20].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[20].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[20].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[20].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[20].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[20].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		
		
		
		
		
		
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[22].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[22].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[22].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[22].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[22].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[22].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[22].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[22].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[24].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[24].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[24].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[24].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[24].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[24].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[24].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[24].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="mi1">
			<p>{{data.data.data.sections[26].body.items[0].action_title}}</p>	
		</div>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="200px"
		 :src="data.data.data.sections[28].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="300px"
		 :src="data.data.data.sections[30].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[32].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[32].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[32].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[32].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[32].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[32].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[32].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[32].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[34].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[34].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[34].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[34].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[34].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[34].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[34].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[34].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[36].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[36].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[36].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[36].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[36].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[36].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[36].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[36].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="mi1">
			<p>{{data.data.data.sections[38].body.items[0].action_title}}</p>	
		</div>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="200px"
		 :src="data.data.data.sections[40].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="300px"
		 :src="data.data.data.sections[42].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<div class="midd2">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left5">
				  <div class="left51">
					  <img :src="data.data.data.sections[44].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[44].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[44].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[44].body.items[0].product_price}}</h3>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left5">
				   <div class="left51">
					  <img :src="data.data.data.sections[44].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[44].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[44].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[44].body.items[1].product_price}}</h3>
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="splict"></div>
		<div class="midd2">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left5">
				  <div class="left51">
					  <img :src="data.data.data.sections[45].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[45].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[45].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[45].body.items[0].product_price}}</h3>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left5">
				   <div class="left51">
					  <img :src="data.data.data.sections[45].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[45].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[45].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[45].body.items[1].product_price}}</h3>
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="splict"></div>
		<div class="midd2">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left5">
				  <div class="left51">
					  <img :src="data.data.data.sections[46].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[46].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[46].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[46].body.items[0].product_price}}</h3>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left5">
				   <div class="left51">
					  <img :src="data.data.data.sections[46].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[46].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[46].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[46].body.items[1].product_price}}</h3>
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="mi1">
			<p>{{data.data.data.sections[48].body.items[0].action_title}}</p>	
		</div>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="200px"
		 :src="data.data.data.sections[50].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="300px"
		 :src="data.data.data.sections[52].body.items[0].img_url_webp"
		/>
	</div>
	
			
	
		
			
	<div v-show="active==1" class="to1">	
		<van-image
		  width="100%"
		  height="500px"
		 :src="data2.data.data.sections[0].body.items[0].img_url_webp"
		/>	
		<div class="cn"></div>
		<div class="all">
			<div class="all1">
				<img :src="data2.data.data.sections[8].body.items[0].img_url_webp" alt="">
			</div>
			<div class="sky">
							<van-row>
							  <van-col span="8"  class="once">
								  <img :src="data2.data.data.sections[9].body.items[0].img_url_webp" >
								  <img :src="data2.data.data.sections[10].body.items[0].img_url_webp" class="twoandthree">
								  <img :src="data2.data.data.sections[11].body.items[0].img_url_webp" class="twoandthre">
							  </van-col>
							  <van-col span="8" class="twoce">
								  <img :src="data2.data.data.sections[9].body.items[1].img_url_webp" >
								  <img :src="data2.data.data.sections[10].body.items[1].img_url_webp" class="twoandthree" >
								  <img :src="data2.data.data.sections[11].body.items[1].img_url_webp" class="twoandthre" >
							  </van-col>
							  <van-col span="8" class="trece">
								  <img :src="data2.data.data.sections[9].body.items[2].img_url_webp" >
								  <img :src="data2.data.data.sections[10].body.items[2].img_url_webp" class="twoandthree" >
								  <img :src="data2.data.data.sections[11].body.items[2].img_url_webp" class="twoandthre" >
							  </van-col>
							</van-row>
						</div>

			<!-- <div class="all2">
				<div class="all21"><img :src="data2.data.data.sections[9].body.items[0].img_url_webp" alt=""></div>
				<div class="all22"><img :src="data2.data.data.sections[9].body.items[1].img_url_webp" alt=""></div>
				<div class="all23"><img :src="data2.data.data.sections[9].body.items[2].img_url_webp" alt=""></div>
				<div class="all21"><img :src="data2.data.data.sections[10].body.items[0].img_url_webp" alt=""></div>
				<div class="all22"><img :src="data2.data.data.sections[10].body.items[1].img_url_webp" alt=""></div>
				<div class="all23"><img :src="data2.data.data.sections[10].body.items[2].img_url_webp" alt=""></div>
				<div class="all21"><img :src="data2.data.data.sections[11].body.items[0].img_url_webp" alt=""></div>
				<div class="all22"><img :src="data2.data.data.sections[11].body.items[1].img_url_webp" alt=""></div>
				<div class="all23"><img :src="data2.data.data.sections[11].body.items[2].img_url_webp" alt=""></div>
				<div class="all24">
					<img :src="data2.data.data.sections[12].body.items[0].img_url_webp" alt="">
				</div>
			</div>	 -->		
		</div>
		<div class="cn"></div>
		<div class="allto">
			<img :src="data2.data.data.sections[14].body.items[0].img_url_webp" alt="">
		</div>
		<div class="cn"></div>
		<div class="right1">
			<img :src="data2.data.data.sections[16].body.items[0].img_url_webp" alt="">
			<div class="right11">
				<h1>{{data2.data.data.sections[16].body.items[0].product_name}}</h1>
				<h2>{{data2.data.data.sections[16].body.items[0].product_price}}</h2>
				<h3>{{data2.data.data.sections[16].body.items[0].product_brief}}</h3>
				<div>
					<span>{{data2.data.data.sections[16].body.items[0].btn_txt}}</span>
				</div>
			</div>
		</div>	
		<div class="cn"></div>
		<div class="right1">
			<img :src="data2.data.data.sections[18].body.items[0].img_url_webp" alt="">
			<div class="right11">
				<h1>{{data2.data.data.sections[18].body.items[0].product_name}}</h1>
				<h2>{{data2.data.data.sections[18].body.items[0].product_price}}</h2>
				<h3>{{data2.data.data.sections[18].body.items[0].product_brief}}</h3>
				<div>
					<span>{{data2.data.data.sections[18].body.items[0].btn_txt}}</span>
				</div>
			</div>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[20].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[20].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[20].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[20].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[20].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[20].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[20].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[20].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<van-image
		  width="100%"
		  height="150px"
		 :src="data2.data.data.sections[22].body.items[0].img_url_webp"
		/>	
		<div class="cn"></div>
		<div class="allto">
			<img :src="data2.data.data.sections[24].body.items[0].img_url_webp" alt="">
		</div>
		<div class="cn"></div>
		<div class="right1">
			<img :src="data2.data.data.sections[26].body.items[0].img_url_webp" alt="">
			<div class="right11">
				<h1>{{data2.data.data.sections[26].body.items[0].product_name}}</h1>
				<h2>{{data2.data.data.sections[26].body.items[0].product_price}}</h2>
				<h3>{{data2.data.data.sections[26].body.items[0].product_brief}}</h3>
				<div>
					<span>{{data2.data.data.sections[26].body.items[0].btn_txt}}</span>
				</div>
			</div>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[28].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[28].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[28].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[28].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>		
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[28].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[28].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[28].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[28].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[30].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[30].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[30].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[30].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[30].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[30].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[30].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[30].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[32].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[32].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[32].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[32].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[32].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[32].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[32].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[32].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[34].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[34].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[34].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[34].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[34].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[34].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[34].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[34].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[36].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[36].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[36].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[36].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[36].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[36].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[36].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[36].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="allto">
			<img :src="data2.data.data.sections[38].body.items[0].img_url_webp" alt="">
		</div>
		<div class="cn"></div>
		<div class="right1">
			<img :src="data2.data.data.sections[40].body.items[0].img_url_webp" alt="">
			<div class="right11">
				<h1>{{data2.data.data.sections[40].body.items[0].product_name}}</h1>
				<h2>{{data2.data.data.sections[40].body.items[0].product_price}}</h2>
				<h3>{{data2.data.data.sections[40].body.items[0].product_brief}}</h3>
				<div>
					<span>{{data2.data.data.sections[40].body.items[0].btn_txt}}</span>
				</div>
			</div>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[42].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[42].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[42].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[42].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>		
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[42].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[42].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[42].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[42].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[44].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[44].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[44].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[44].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[44].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[44].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[44].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[44].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[46].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[46].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[46].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[46].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[46].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[46].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[46].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[46].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="allto">
			<img :src="data2.data.data.sections[48].body.items[0].img_url_webp" alt="">
		</div>
		<div class="cn"></div>
		<div class="right1">
			<img :src="data2.data.data.sections[50].body.items[0].img_url_webp" alt="">
			<div class="right11">
				<h1>{{data2.data.data.sections[50].body.items[0].product_name}}</h1>
				<h2>{{data2.data.data.sections[50].body.items[0].product_price}}</h2>
				<h3>{{data2.data.data.sections[50].body.items[0].product_brief}}</h3>
				<div>
					<span>{{data2.data.data.sections[50].body.items[0].btn_txt}}</span>
				</div>
			</div>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[52].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[52].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[52].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[52].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>		
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[52].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[52].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[52].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[52].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[54].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[54].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[54].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[54].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[54].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[54].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[54].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[54].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
		<div class="cn"></div>
		<div class="midd6">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data2.data.data.sections[56].body.items[0].img_url_webp">
					  <span>{{data2.data.data.sections[56].body.items[0].product_name}}</span>
						<p>{{data2.data.data.sections[56].body.items[0].product_brief}}</p>
						<h4>{{data2.data.data.sections[56].body.items[0].product_price}}</h4>	
				  </div>
				  <div class="left62">
					 <p>立即购买</p>	
				  </div>	
			  </van-col>		
			<van-col span="6" class="left6">
				   <div class="left61">
					  <img :src="data2.data.data.sections[56].body.items[1].img_url_webp">
					  <span>{{data2.data.data.sections[56].body.items[1].product_name}}</span>
						<p>{{data2.data.data.sections[56].body.items[1].product_brief}}</p>
						<h4>{{data2.data.data.sections[56].body.items[1].product_price}}</h4>	
				   </div>
				   <div class="left62">
				   		<p>立即购买</p>	
				   </div>		
			  </van-col>
			</van-row>
		</div>
	</div>	
		
		<div v-show="active==2" class="map">
			<van-image
			  width="100%"
			  height="150px"
			  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e16f6bddca5b7b37bc2dbf46c344670.jpg?f=webp"
			/>
			<van-image
			  width="100%"
			  height="240px"
			  class="map1"
			  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/190ae9f1b4d278e51cba41155e35e58c.jpg?f=webp"
			/>
			<div >	
				<van-row class="map2">	
				  <van-col span="8">
					  <img :src="data3.data.data.sections[2].body.items[0].img_url_webp" alt="">	
				  </van-col>
				  <van-col span="8">
					   <img :src="data3.data.data.sections[2].body.items[1].img_url_webp" alt="">
				  </van-col>
				  <van-col span="8">
					   <img :src="data3.data.data.sections[2].body.items[2].img_url_webp" alt="">
				  </van-col>
				</van-row>
			</div>
			<van-image
			  width="100%"
			  height="130px"
			  class="map3"
			  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/56987468dc0cb116351f37f88da273b6.jpg?f=webp"
			/>
			<div>
				<div class="map4">
					<img :src="data3.data.data.sections[4].body.items[0].img_url_webp" alt="">
					<img :src="data3.data.data.sections[4].body.items[1].img_url_webp" alt="">
					<img :src="data3.data.data.sections[4].body.items[2].img_url_webp" alt="">
					<img :src="data3.data.data.sections[4].body.items[3].img_url_webp" alt="">
				</div>
			</div>
			<van-image
			  width="100%"
			  height="70"
			  class="map5"
			  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/397c9a4cc6e914beb4525c782e219c6d.jpg?f=webp"
			/>
			<van-image
			  width="100%"
			  height="<90></90>"
			  class="map6"
			  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b65fab356705f4ac257bb71529625c11.jpg?f=webp"
			/>
			<div class="map7">
				<van-row>
				  <van-col span="8" class="map71">
					  <img :src="data5.data.data.sections[8].body.items[0].img_url_webp">
					  <div class="map72">
						  <h4>{{data5.data.data.sections[8].body.items[0].product_name}}</h4>
							<span>{{data5.data.data.sections[8].body.items[1].product_brief}}</span>
							<h3>{{data5.data.data.sections[8].body.items[0].product_org_price}}</h3>
					  </div>
				 </van-col>
				  <van-col span="8" class="map71">
					  <img :src="data5.data.data.sections[8].body.items[1].img_url_webp">	
				  	<div class="map72">
						<h4>{{data5.data.data.sections[8].body.items[1].product_name}}</h4>
						<span>{{data5.data.data.sections[8].body.items[1].product_brief}}</span>
						<h3>{{data5.data.data.sections[8].body.items[1].product_org_price}}</h3>
				  	</div>
				 </van-col>			
				  <van-col span="8" class="map71">
					  <img :src="data5.data.data.sections[8].body.items[2].img_url_webp">
					<div class="map72">
						<h4>{{data5.data.data.sections[8].body.items[2].product_name}}</h4>
						<span>{{data5.data.data.sections[8].body.items[2].product_brief}}</span>
						<h3>{{data5.data.data.sections[8].body.items[2].product_org_price}}</h3>
					</div>
				  </van-col>
				</van-row>
			</div>
			<div class="map8">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[10].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[10].body.items[0].product_name}}</h4>
								<span>{{data5.data.data.sections[10].body.items[0].product_brief}}</span>
								<h3>{{data5.data.data.sections[10].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[10].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[10].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[10].body.items[1].product_brief}}</span>
							<h3>{{data5.data.data.sections[10].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>			
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[10].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[10].body.items[0].product_name}}</h4>
							<span>{{data5.data.data.sections[10].body.items[1].product_brief}}</span>
							<h3>{{data5.data.data.sections[10].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
			<div class="map9">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[12].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[12].body.items[0].product_name}}</h4>
								<span>{{data5.data.data.sections[12].body.items[0].product_brief}}</span>
								<h3>{{data5.data.data.sections[12].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[12].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[12].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[12].body.items[1].product_brief}}</span>
							<h3>{{data5.data.data.sections[12].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>			
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[12].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[12].body.items[0].product_name}}</h4>
							<span>{{data5.data.data.sections[12].body.items[1].product_brief}}</span>
							<h3>{{data5.data.data.sections[12].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
			<div class="map10">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[14].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[14].body.items[0].product_name}}</h4>
								<span>{{data5.data.data.sections[14].body.items[0].product_brief}}</span>
								<h3>{{data5.data.data.sections[14].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[14].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[14].body.items[0].product_name}}</h4>
							<span>{{data5.data.data.sections[14].body.items[1].product_brief}}</span>
							<h3>{{data5.data.data.sections[14].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>			
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[14].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[14].body.items[0].product_name}}</h4>
							<span>{{data5.data.data.sections[14].body.items[1].product_brief}}</span>
							<h3>{{data5.data.data.sections[14].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
			<van-image
			  width="100%"
			  height="<90></90>"
			  class="map11"
			  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f1f78cb03ef4f01a32d8711469fcd041.jpg?f=webp"
			/>
			<div class="map12">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[19].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[19].body.items[0].product_name}}</h4>
								<span>{{data5.data.data.sections[19].body.items[0].product_brief}}</span>
								<h3>{{data5.data.data.sections[19].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[19].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[19].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[19].body.items[1].product_brief}}</span>
							<h3>{{data5.data.data.sections[19].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>			
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[19].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[19].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[19].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[19].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
			<div class="map13">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[21].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[21].body.items[0].product_name}}</h4>
								<span>{{data5.data.data.sections[21].body.items[0].product_brief}}</span>
								<h3>{{data5.data.data.sections[21].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[21].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[21].body.items[1].product_name}}</h4>	
							<span>{{data5.data.data.sections[21].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[21].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>			
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[21].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[21].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[21].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[21].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
			<div class="map14">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[23].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[23].body.items[0].product_name}}</h4>
								<span>{{data5.data.data.sections[23].body.items[0].product_brief}}</span>
								<h3>{{data5.data.data.sections[23].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[23].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[23].body.items[1].product_name}}</h4>	
							<span>{{data5.data.data.sections[23].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[23].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>				
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[23].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[23].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[23].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[23].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
			<div class="map15">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[25].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[25].body.items[1].product_name}}</h4>
								<span>{{data5.data.data.sections[25].body.items[2].product_brief}}</span>
								<h3>{{data5.data.data.sections[25].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[25].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[25].body.items[1].product_name}}</h4>	
							<span>{{data5.data.data.sections[25].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[25].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>				
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[25].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[25].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[25].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[25].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
			<van-image
			  width="100%"
			  height="<90></90>"
			  class="map16"
			  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e39ead4adb615c7885e12560a338c16.jpg?f=webp"
			/>
			<div class="map17">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[30].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[30].body.items[1].product_name}}</h4>
								<span>{{data5.data.data.sections[30].body.items[2].product_brief}}</span>
								<h3>{{data5.data.data.sections[30].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[30].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[30].body.items[1].product_name}}</h4>	
							<span>{{data5.data.data.sections[30].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[30].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>				
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[30].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[30].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[30].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[30].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
			<div class="map18">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[32].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[32].body.items[1].product_name}}</h4>
								<span>{{data5.data.data.sections[32].body.items[2].product_brief}}</span>
								<h3>{{data5.data.data.sections[32].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[32].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[32].body.items[1].product_name}}</h4>	
							<span>{{data5.data.data.sections[32].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[32].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>				
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[32].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[32].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[32].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[32].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
			<div class="map19">
				<div class="map7" >
					<van-row>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[34].body.items[0].img_url_webp">
						  <div class="map72">
							  <h4>{{data5.data.data.sections[34].body.items[1].product_name}}</h4>
								<span>{{data5.data.data.sections[34].body.items[2].product_brief}}</span>
								<h3>{{data5.data.data.sections[34].body.items[0].product_org_price}}</h3>
						  </div>
					 </van-col>
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[34].body.items[1].img_url_webp">	
					  	<div class="map72">
							<h4>{{data5.data.data.sections[34].body.items[1].product_name}}</h4>	
							<span>{{data5.data.data.sections[34].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[34].body.items[1].product_org_price}}</h3>
					  	</div>
					 </van-col>				
					  <van-col span="8" class="map71">
						  <img :src="data5.data.data.sections[34].body.items[2].img_url_webp">
						<div class="map72">
							<h4>{{data5.data.data.sections[34].body.items[1].product_name}}</h4>
							<span>{{data5.data.data.sections[34].body.items[2].product_brief}}</span>
							<h3>{{data5.data.data.sections[34].body.items[2].product_org_price}}</h3>
						</div>
					  </van-col>
					</van-row>
				</div>
			</div>
		</div>		
		
					
  </div>
</template>

<script>	

import {data1,data2,data3,data5} from '../data.js'
export default {
  data(){
	return {	
	  active: 0,
	  data:{},
	  data1:{},
	  data2:{},
	  data3:{},
	  data5:{},
		value:''
	}
  },
  created(){		
  	this.data={}
	this.$http({
		url:'http://biger.applinzi.com/page.php',
		methods:'get',
	}).then((res)=>{
		// console.log(res);
		this.data=res.data;
	})
	this.data1=data1;
	this.data2=data2;
	this.data3=data3;
	this.data5=data5;
  }
	
}		
</script>			
<style scoped lang="less">


.map19{
	position: relative;		
	top: -1822px;	
}
.map18{
	position: relative;		
	top: -1645px;	
}	
.map17{
	position: relative;		
	top: -1467px;
}
.map16{
	position: relative;		
	top: -1485px;
}
.map15{
	position: relative;		
	top: -1295px;
}
.map14{
	position: relative;		
	top: -1118px;
}
.map13{
	position: relative;		
	top: -940px;
}
.map12{
	position: relative;		
	top: -762px;
}
.map11{
	position: relative;
	top: -780px;
}	
.map10{
	position: relative;
	top: -580px;
}
.map9{
	position: relative;
	top: -400px;
}
.map8{
	position: relative;	
	top: -200px;
}
.map7{
	width: 100%;
	height: 400px;			
	position: relative;	
	top: -22px;
	.map71{
		width: 30%;
		height: 217px;
		margin-left: 2.5%;
		float: left;	
		border-radius: 4px;	
	}	
	.map71 img{
		width: 100%;			
		height: 120px;
	}
	.map72{
		position: relative;
		top: -25px;
		background-color: #fff;
		text-align: center;
	}
	.map72 h4{	
		font-size: 5px;
		color: #3c3c3c;
		position: relative;	
		top: 10px;
	}
	.map72 span{
		font-size: 9px;
		color: #3c3c3c;
	}
	.map72 h3{
		font-size: 11px;
		color: #ff4a48;
		position: relative;
		top: -10px;
	}
}	
.map6{
	position: relative;
	top: -19px;
}	
.map5{
	position: relative;
	top: -15px;
}
.map4 img{
	width: 25%;
	height: 50px;
}
.map4{
	position: relative;
	top: -12px;
	width: 100%;
}
.map3{
	position: relative;
	top: -8px;
}
.map2 img{
	width: 125px;		
	height: 180px;
	float: left;
}
.map2{
	position: relative;
	top: -8px;
}
.map1{
	position: relative;
	top: -3.9px;
}	
.map{
	width: 100%;
	background-color:blueviolet;
}	
	
	
	
	
	
	
.toto1{	
	width: 25px;
	height: 25px;	
	float: left;
	margin-left: 3%;
	margin-top: 4%;
}
.toto2{
	margin-top: 1%;
	float: left;
	margin-left: 3%;
	margin-top: 4%;
}
.midd6{
	width: 100%;
	height: 350px;
	.left6{
		width: 50%;
		height: 340px;
		float: left;
		margin-left: 4px;
		margin-right: 4px;	
		background-color: white;
		border-radius: 10px;
	}
	.left61{
		text-align: center;
		margin-top: 6px;
	}
	.left61 img{
		width: 100%;
		height: 180px;
	}
	.left61 h4{
		margin-top: 2px;
		color: #ea625b;
	}
	.left61 p{
		color:  rgba(0,0,0,.54);	
		font-size: 5px;
		margin-top: 5px
	}	
	.left61 span{
		margin-top: 4px;
		color:  #000000;
		font-size: 15px;
	}
	.left62{	
		border-radius: 5px;	
		width: 120px;
		height: 30px;
		background-color: #ea625b;
		margin: 0 auto;	
		// margin-top: 10px;
	}
	.left62 p{
		text-align: center;
		font-size: 18px;
		color: white;
	}

}	
	

	
.right11 div span{
	font-size: 20px;
	color: white;
}
.right11 div{
	width: 130px;
	height: 35px;
	background-color: #ea625b;
	margin-left: 65%;
	margin-top: -10%;
	float: left;
	text-align: center;
}
.right11 h3{	
	margin-left: 5%;
	margin-top: -1%;
	float: left;
	font-size: 13px;
}
.right11 h2{
	margin-left: 75%;
	margin-top: -10%;
	float: left;
	color:  #ea625b;
	font-size: 20px;
}
.right11 h1{
	margin-left: 5%;
	float: left;
	font-size: 21px;
}
.right1 img{
	width: 100%;
}
.right1{
	width: 100%;
	height: 320px;
}
.to1{
	width: 100%;
	background-color:blueviolet;	
	
}
.all{
	width: 100%;
	height: 370px;
	background-color:blueviolet;	
	.all1 img{	
		width: 100%;
	}
}
.all2{
	width: 95%;
	height: 700px;
	margin-left: 5%;
}
.all21{
	width: 30%;
	height: 200px;
	background-color: #000000;
	// margin-left: 2%;
	float: left;
	img{
		width: 100%;
		height: 250px;
	}
	
}
.all22{
	width: 30%;
	height: 200px;
	background-color:gray;
	// margin-right: 2%;
	float: left;
	img{
		width: 100%;
		height: 250px;
	}
}
.all23{
	width: 30%;
	height: 200px;
	background-color:gray;
	// margin-left: 2%;
	float: left;
	img{
		width: 100%;
		height: 250px;
	}	
}
.all24 img{
	width: 90%;
	height: 80px;
	float: left;
}
.allto{
	width: 100%;
	img{
		width: 100%;
	}
}







.full{
	width: 100%;
	height: 200px;
}	
.span4{
	width: 100%;
	height: 340px;
	.span1 img{
		float: left;
		width: 50%;
		height: 340px;
	}
	.span2{
		float: left;
		width: 50%;
		height: 340px;
	}
	.span2 .img1{
		float: left;
		width: 100%;
		height: 170px;
	}
	.span2 .img2{
		float: left;
		width: 100%;
		height: 170px;
	}
}
.splict{
	width: 100%;
	height: 12px;
	background-color: gainsboro;
}
.cn{
	width: 100%;
	height:5px ;
	background-color: #440044 ;
}
.midd1{
	width: 100%;
	height: 400px;
	.left3{
		width: 50%;
		height: 400px;
		float: left;
	}
	.left3 img{
		width: 100%;
		height: 200px;
	}
	.left31{
		text-align: center;
	}
	.left31 span{
		margin-top: 5px;
		color:  rgba(0,0,0,.54);
	}	
	.left31 h3{
		margin-top: 5px;
		color: #ea625b;
	}
	.left32{	
		border-radius: 5px;	
		width: 140px;
		height: 35px;
		background-color: #ea625b;
		margin: 0 auto;	
		margin-bottom: 20px;
	}
	.left32 p{
		text-align: center;
		font-size: 18px;
		color: white;
	}

}
.midd2{
	width: 100%;
	height: 400px;
	.left5{
		width: 50%;
		height: 400px;
		float: left;
	}
	.left5 img{
		width: 100%;
		height: 250px;
	}
	.left51{
		text-align: center;
	}
	.left51 span{
		margin-top: 5px;
		color:  rgba(0,0,0,.54);
	}	
	.left51 h3{
		margin-top: 5px;
		color: #ea625b;
	}
	.left52{	
		border-radius: 5px;	
		width: 140px;
		height: 35px;
		background-color: #ea625b;
		margin: 0 auto;	
		margin-bottom: 20px;
	}
	.left52 p{
		text-align: center;
		font-size: 18px;
		color: white;
	}

}
.product{
	width: 100%;
	height: 100px;
	background-color: red;	
}
.mi1{
	text-align: center;	
	font-size: 25px;
	margin-bottom: 30px;
	border-top: 1px solid #000000;
	color:  rgba(0,0,0,.6);
}
.twoandthree{
	position: relative;
	top: -5px;
}
.twoandthre{
	position: relative;
	top: -10px;
}
.twoce{
	width: 33.33%;
}
.twoce img{
	width: 100%;
}.trece{
	width: 33.33%;
}
.trece img{
	width: 100%;
}
.toupi{
	position: relative;
	top: -15px;
}
.imgnoe{
	position: relative;
	top: -18px;	
	width: 100%;
}
.sky{
	width: 100%;
}
.once{
	width: 33.33%;
}
.once img{
	width: 100%;
}

</style>

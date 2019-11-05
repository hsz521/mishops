<template>
  <div class="home" v-if="data.data">
	<van-tabs v-model="active">
	  <van-tab v-for="item in data.data.tabs" style="text-align: center;" :title="item.name">{{item.name}}</van-tab>
	</van-tabs>

<!-- 	<div v-show="active==0">
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
		  height="240px"
		  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/54cbbe787b6269d434b26bd80de4d6a4.jpg?f=webp&w=1080&h=420&bg=CBDDE7"
		/>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="360px"
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
						<span>{{data.data.data.sections[12].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[12].body.items[1].product_price}}</h3>	
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
					  <img :src="data.data.data.sections[14].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[14].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[14].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[14].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[14].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[14].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[14].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[14].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="mi1">
			<p>{{data.data.data.sections[16].body.items[0].action_title}}</p>	
		</div>
		<div class="splict"></div>	
		<van-image
		  width="100%"	
		  height="240px"
		  src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad96e9decd39cf161bb27825e1e72f72.jpg?f=webp&w=1080&h=420&bg=EDECE7"
		/>	
		<div class="splict"></div>
		<van-image
		  width="100%"	
		  height="330px"
		  src="//i8.mifile.cn/v1/a1/34cc562e-8dd3-61e9-0209-395edb9237a1.webp?w=1080&h=660&bg=B2C5D1"
		/>
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
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[26].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[26].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[26].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[26].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[26].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[26].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[26].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[26].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="mi1">
			<p>{{data.data.data.sections[28].body.items[0].action_title}}</p>	
		</div>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="360px"
		 :src="data.data.data.sections[30].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="360px"
		 :src="data.data.data.sections[32].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[34].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[34].body.items[0].product_name}}</h3>
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
		<div class="splict"></div>
		<div class="midd1">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left3">
				  <div class="left31">
					  <img :src="data.data.data.sections[38].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[38].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[38].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[38].body.items[0].product_price}}</h3>	
				  </div>
				  <div class="left32">
					 <p>立即购买</p>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left3">
				   <div class="left31">
					  <img :src="data.data.data.sections[38].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[38].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[38].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[38].body.items[1].product_price}}</h3>	
				   </div>
				   <div class="left32">
				   		<p>立即购买</p>	
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="mi1">
			<p>{{data.data.data.sections[40].body.items[0].action_title}}</p>	
		</div>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="360px"
		 :src="data.data.data.sections[42].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="360px"
		 :src="data.data.data.sections[44].body.items[0].img_url_webp"
		/>
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
					  <h3>{{data.data.data.sections[46].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[46].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[46].body.items[1].product_price}}</h3>
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="splict"></div>
		<div class="midd2">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left5">
				  <div class="left51">
					  <img :src="data.data.data.sections[47].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[47].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[47].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[47].body.items[0].product_price}}</h3>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left5">
				   <div class="left51">
					  <img :src="data.data.data.sections[47].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[47].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[47].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[47].body.items[1].product_price}}</h3>
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="splict"></div>
		<div class="midd2">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left5">
				  <div class="left51">
					  <img :src="data.data.data.sections[48].body.items[0].img_url_webp">
					  <h3>{{data.data.data.sections[48].body.items[0].product_name}}</h3>
						<span>{{data.data.data.sections[48].body.items[0].product_brief}}</span>
						<h3>{{data.data.data.sections[48].body.items[0].product_price}}</h3>	
				  </div>
			  </van-col>
			  <van-col span="6" class="left5">
				   <div class="left51">
					  <img :src="data.data.data.sections[48].body.items[1].img_url_webp">
					  <h3>{{data.data.data.sections[48].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[48].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[48].body.items[1].product_price}}</h3>
				   </div>
			  </van-col>
			</van-row>
		</div>
		<div class="mi1">
			<p>{{data.data.data.sections[50].body.items[0].action_title}}</p>	
		</div>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="360px"
		 :src="data.data.data.sections[52].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<van-image
		  width="100%"
		  height="360px"
		 :src="data.data.data.sections[54].body.items[0].img_url_webp"
		/>
		<div class="splict"></div>
		<div class="midd4">
			<van-row type="flex" justify="space-between">
			  <van-col span="6" class="left6">
				  <div class="left61">
					  <img :src="data.data.data.sections[48].body.items[0].img_url">
				  </div>
			  </van-col>
			  <van-col span="6" class="left5">
				   <div class="left61">
					  <h3>{{data.data.data.sections[48].body.items[1].product_name}}</h3>
						<span>{{data.data.data.sections[48].body.items[1].product_brief}}</span>
						<h3>{{data.data.data.sections[48].body.items[1].product_price}}</h3>
				   </div>
			  </van-col>
			</van-row>
		</div>	
	</div> -->
	
	
	
	
	
	
<!-- 	<div v-show="active==1" class="to1">
		<van-image
		  width="100%"
		  height="600px"
		 :src="data2.data.data.sections[0].body.items[0].img_url_webp"
		/>	
		<div class="cn"></div>
		<div class="all">
			<div class="all1">
				<img :src="data2.data.data.sections[8].body.items[0].img_url_webp" alt="">
			</div>
			<div class="all2">
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
			</div>			
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
		</div> -->
	</div>	
	

		
			
  </div>
</template>

<script>	
import {data1,data2,data3} from '../data.js'
export default {
  data(){
	return {	
	  active: 0,
	  data:{},
	  data1:{},
	  data2:{},
	  data3:{},

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
  }
	
}	
</script>
<style scoped lang="less">
	
	
	
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
	height: 800px;
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
}	
.span4{
	width: 100%;
	height: 400px;
	.span1 img{
		float: left;
		width: 50%;
		height: 400px;
	}
	.span2{
		float: left;
		width: 50%;
		height: 400px;
	}
	.span2 .img1{
		float: left;
		width: 100%;
		height: 200px;
	}
	.span2 .img2{
		float: left;
		width: 100%;
		height: 200px;
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
	height: 420px;
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

</style>

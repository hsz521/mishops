<template>
	<div class="to1">
		<van-image
		  width="100%"
		  height="75"
		  class="to2"
		  src="https://m.mi.com/static/img/bg.63c8e19851.png"
		/>
		<div class="to3">
			<van-row>
			  <van-col span="8">
				  <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt="">
			  </van-col>
			  <van-col span="8">
				  <span @click="me" v-if="this.$store.getters.getlog" >登录/注册</span>
				</van-col>
			</van-row>
		</div>	
		
		
		
		<div class="to4">
			<van-row>
			  <van-col span="12">
				  <span @click="me">我的订单</span>
			  </van-col>
			  <van-col span="12">
				  <p @click="me">全部订单></p>
				  </van-col>
			</van-row>
		</div>
		<div class="to5">
			<span class="to51" @click="me">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMUQ5NDYxMThGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMUQ5NDYxMjhGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxRDk0NjBGOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYxRDk0NjEwOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0LK+9gAAAXNJREFUeNrsnLEOgjAURcUYd/k/Rhh1My7+gJsrYeP7xNHEpXZoIjYIpQnwaM9N3qBLw8nr7ePWmCilNui/tiAAEIAABCAAAQhAkWrX/lCWZXQAiqIY3UF7XXddD10qwGrM8+1Hd5DRTdcx4KY5mOd76br4eFAWye7KfU06jQRQ6rvFbCUBQRkdXXDMAwhAAAIQgAAEIAAh70k6aNkRjx1/SOugqaOWrleP3vhDWgctEbX0xh/SOmjJqCVfg0mn0taWbtJTRy2D8QfHPIAABKCBeWnUNU4sk7Q9Lzlf48TSQZnrHIMH4UGdqju+q/Cgr85miMxawK4A+uqt62SKLYYHAWi9ku5Big76VSNtbWmA6gXXrtawxdrzzWGmNZ99c5Q0QFPPN7anDSaW0d+L+fwMGAEIQAACEIAABCAAIadJWtFBDq/9AarxBVRHAqjy3WJLRA5zqjfecAE025XKGpTw9zgc8wACEIAABCAAAQh16SPAAD22hrFVOZLnAAAAAElFTkSuQmCC" alt="">
				<p>待付款</p>
			</span>
			<span  class="to51" @click="me">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMUQ5NDYxNThGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMUQ5NDYxNjhGQTkxMUU2OTNFMENEREQ1RkNGRDZCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxRDk0NjEzOEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYxRDk0NjE0OEZBOTExRTY5M0UwQ0RERDVGQ0ZENkJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4cr/ZAAAA0JJREFUeNrsnD1oFEEUx+e8GLGQxFOw0MbCryhGEGyFoKIoCFqKoqKniGjSSBSuVRTRRBTMcYUQLBUbbSJpUlkIBpOIprG00IsEJOJH1v9jH7JZ5vb29nb25nbfgx9cZnbv7f13Pt68nU3OcRwlVtuWiQQiUFPWUS6XE3VYLBalBUkXE4HE/o9BSTtMesxrdmyUFtTiLtYJhsE34FhGla+ts5Vd7A64YmnjWM3XtgAGW9WCTrZBLzrfyi5WaAOBCjbNYjlLRAm9QpdZTAQSgUSgtAq0VgSqbUfBlAikj05HwQuwTlbzS+0gqID1MgYttVVgBLxKmzhxCLQXTIKiJkqezLJAy8FtMA42+ur+gJtgT1bHoC3gKditqZsBZ8GbrHaxc+CtRpxFcJfLUyNOIy1oDaBk8jFN3WdwCkxkNZLuA+9qiPME9KZVnHoCUa52CIyBDb66ryzYGTCf5rVYUBejfPJVTTnNXCfAl6wvVk9rpu8S2J8Vceq1oC7NWDShMmaNTPOZE8dkukMEEoHEGl6LOdKCzFpVBAq2Stq7WFSbU26eupR2gXIqg9ah23pm6zY5meZFIBFIBBKBmrMecA98AD+ZGS7raSMfsQtE6dmH4D0YAFvBCmYbl1HdY7DSYh9GAkW68JdgX4ibcQFsAofAL8t8GGtB90NcuNf6uDvY5sOIQNv5jnltFhxXbsq2iz/P+o65yOfa4sOYQPSkNe/5+5Nyn8k/V+7joHn+TGUfPcfl+VxbfMQikO59h37fMdfBd825VHbDV9avwr1TYcJHLAJFyd+8Dqgbi2liidtHNapAozGHFElkJKP4qEQV6Bp4wPmcsBY00xyISYS4fMzx7ytFFYhiCHr0XOBckI4h3zm0capb813dXOe14YDvTcJHgX9fYKyUi/qfFzhntEO5Oz/yvil40DMe0KPqW2Cz55i/YBeYCnpNPAkfpiNp2gtNGzgvecooin1W57wRFX4fdRI+jEbSA3VmFr+N8zm2+TAmEPXhw+CRcrfi1bJFvqtHIqyRkvBhdDVPF3MZ7OSBkSLa3+AHmOayXg7/Fyz2YWQ177VpTeSr2tBH87NYVkxSriKQCCQCiUAikAiUWvsnwABTSwDIZ7YMEAAAAABJRU5ErkJggg==" alt="">
				<p>待收货</p>
			</span>
			<span  class="to51" @click="me">
				<img src="https://m.mi.com/static/img/nav-4.d68723895f.png" alt="">
				<p>退换修</p>
			</span>
		</div>
		<div class="divi"></div>
		<div class="to6">
			<div class="to61">
				<van-icon class="to611" name="like" size="30" />
			</div>
			<div class="to62" @click="me">
				<span>会员中心</span>
				<p>></p>
			</div>
		</div>
		<div class="to6">
			<div class="to61">
				<van-icon class="to611" name="star" size="30" />
			</div>
			<div class="to62" @click="me">
				<span>我的优惠</span>
				<p>></p>
			</div>
		</div>
		<div class="divi"></div>
		<div class="to6">
			<div class="to61">
				<van-icon class="to611" name="fire" size="30" />
			</div>
			<div class="to62" @click="me">
				<span>服务中心</span>
				<p>></p>
			</div>
		</div>
		<div class="to6">
			<div class="to61">
				<van-icon class="to611" name="gift" size="30" />
			</div>
			<div class="to62" @click="me">
				<span>小米之家</span>
				<p>></p>
			</div>
		</div>
		<div class="divi"></div>
		<div class="to6">
			<div class="to61">
				<van-icon class="to611" name="bag" size="30" />
			</div>
			<div class="to62" @click="me">
				<span>服务中心</span>
				<p>></p>
			</div>
		</div>
		<div class="to6">
			<div class="to61">
				<van-icon class="to611" name="music" size="30" />
			</div>
			<div class="to62" @click="me">
				<span>小米之家</span>
				<p>></p>
			</div>
		</div>
		<div class="divi"></div>
		<div class="to6">
			<div class="to61">
				<van-icon class="to611" name="checked" size="30" />
			</div>
			<div class="to62" @click="me">
				<span>设置之地</span>
				<p>></p>
			</div>
		</div>
		<div class="to6">
			
		</div>
	</div>	
</template>

<script>
export default{
	methods:{
		me(){
			this.$router.push('/login')
		}
	}
}	
	
</script>

<style>
.to1{
	width: 100%;
}
.to2{	
	background-color: orange;	
}
.to3{
	margin-top: -4px;
	
}
.to3 img{
	position: relative;
	top: -60px;
	left: 10px;
	width: 50px;
	height: 50px;
}
.to3 span{
	position: relative;
	left: -55px;
	top: -45px;
	color: white;
}
.to4{
	width: 100%;
	height: 40px;
	border-bottom: 1px solid gainsboro;
}
.to4 span{
	margin-left: 15%;
	position: relative;
	top: 8px;
	float: left;
}
.to4 p{
	margin-right: 15%;
	position: relative;
	top: -6px;
	font-size: 14px;
	float: right;
}
.to5{
	width: 100%;
	height: 80px;
}
.to5 .to51{
	float: left;
	width: 125px;
	height: 40px;
	text-align: center;
}
.to51 img{
	 width: 32px;
	 height: 32px;
	 margin-top: 10px;
}
.to51 p{
	font-size: 10px;
	margin-top: 0px;
}
.divi{
	width: 100%;
	height: 10px;
	background-color: #f5f5f5;
}
.to6{
	width: 100%;
	height: 70px;
}
.to61{
	width: 20%;
	height: 50px;
	text-align: center;

	float: left;
}
.to611{
	margin-top: 10px;
	width: 50px;
	height: 30px;
}
.to62{
	width: 80%;
	height: 50px;
	text-align: center;
	float: left;
	border-bottom: 1px solid gray;
}
.to62 span{
	position: relative;
	top: 15px;
	float: left;
}
.to62 p{
	position: relative;
	left: 70%;
	top: 0px;
	float: left;
}
</style>
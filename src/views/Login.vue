<template>
	<div class="log">
		<div class="log1">
			<img src="https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png" alt="">
			<p>小米账号登录</p>
		</div>
		<div class="dd">
			<van-cell-group>
			  <van-field
			    v-model="user.name"
			    required
			    clearable
			    label="用户名"
			    right-icon="question-o"
			    placeholder="请输入用户名"
			    @click-right-icon="$toast('输入可能有误')"
			  />
			
			  <van-field
			    v-model="user.pwd"
			    type="password"
			    label="密码"
			    placeholder="请输入密码"
			    required
			  />
			</van-cell-group>
			
			
			<!-- <van-cell-group>
			  <van-field
			    v-model="sms"
			    center
			    clearable
			    label="短信验证码"
			    placeholder="请输入短信验证码"
			  >
			    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
			  </van-field>
			</van-cell-group> -->
		</div>
		<div class="dd1">
			<van-button type="primary" color="#ff6700"  size="large" >立即登录/注册</van-button>
		</div>
		<div class="dd1">
			<van-button type="primary" color="#ff6700"  size="large" @click="log">用户名密码登录</van-button>
		</div>
		<div class="dd2">
			<van-divider>其他登录方式</van-divider>
		</div>
		<div class="dd3">
			<van-row type="flex" justify="center">
			  <van-col span="6" class="dd31">
				 <img class="img1" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1157756667,4278017464&fm=26&gp=0.jpg" alt="">
			  </van-col>
			  <van-col span="6" class="dd31">
				  <img class="img2" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEmAgYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiijNABRSZoyPWgBaKTI9RS5HrQAUUZHrRketABRRketGR60AFFGR60ZHrQAUUmfcUZHrQAtFJn3paACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkzS1DcTxW0Ek0zqkcalnZugA70A3bckaRERmdgqqMkk4AFcfqvxA060dorCNr2QZG9Ttj/767/h+dcj4m8VXGvTNFEzRWCn5IxwZP9pv8K5+vcwuVJrmrfd/mfL47PmpOGG+/wDyOouPH+uTMfKNvbqeyR7iPxJqi/i/xA5z/aki/wC6iD+lYtFenHB4eO0EeJPMcXJ61H99jY/4SvxB/wBBa4/JP/iaP+Er1/8A6C1x+Sf/ABNY9FV9Wo/yL7kR9exP/Px/ezY/4SvX/wDoLXH5J/8AE0f8JXr/AP0Frj8k/wDiax6KPq1H+RfchfXsT/z8f3s2P+Er1/8A6C1x+Sf/ABNH/CV6/wD9Ba4/JP8A4mseij6tR/kX3IPr2J/5+P72bH/CV6//ANBa4/JP/iaP+Er1/wD6C1x+Sf8AxNY9FH1aj/IvuQfXsT/z8f3s2P8AhK9f/wCgtcfkn/xNA8WeIB/zFp/xVP8A4mseij6tR/kX3If17E/8/Jfezfi8aeIYjn7eH9pIVP8ALFatl8R76MgXtnDOvdoiUb8jkVxdFZzwOHnvBfka080xcHpN/PX8z2fRfEuma4uLWfbMBloJPlcfh3HuK2MivAo3eKRJI3ZJEO5XQ4Kn1Br03wh4sOrAaffMBequVfp5wHX/AIEO/wCdeNjMudFc8NY/kfSZbnMcQ1Sqq0vwZ2ApaQUteWe6FFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAU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AooooAKMUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q==" alt="">
			  </van-col>
			  <van-col span="6" class="dd31">
				  <img class="img3" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1483046867,131786404&fm=26&gp=0.jpg" alt="">
			  </van-col>
			</van-row>
		</div>
		<div class="dd4">
			<van-row>
			  <van-col span="4">简体</van-col>
			  <van-col span="4">繁体</van-col>
			  <van-col span="5">English</van-col>
			  <van-col span="5">常见问题</van-col>
			  <van-col span="6">隐私政策</van-col>
			</van-row>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			sms:"",
			user:{
				name:"",
				pwd:""
			}
		}
	},
	methods:{
		log(){
			this.$http({
				url:'http://www.520mg.com/member/index_login.php',
				method:'post',
				withCredentials:true,
				data:`fmdo=login&dopost=login&userid=${this.user.name}&pwd=${this.user.pwd}`,
			}).then((res)=>{
				if(res.data.status==1){
					console.log("登录成功")
					this.$store.commit("setlog",true)
					if(this.$route.query.redirect){
						this.$router.push(this.$route.query.redirect)
					}
					else{
						this.$router.push('/')
					}
				}
				else{
					console.log("登录失败")
				}
			})
		}
	
	}
}
</script>

<style scoped="scoped" lang="less">
.log{
	width: 100%;
}
.log1{
	text-align: center;
	margin-top: 25px;
	height: 90px;
	img{
		width: 55px;
		height: 55px;
	}
	p{
		font-size: 17px;
		margin-top: 10px;
	}
}
.dd1{
	margin-top: 25px;
	margin-left: 10%;
	margin-right: 10%;
}
.dd{
	margin-top: 25px;
}
.dd2{
	margin-top: 50px;
}
.dd31{
	width: 50px;
	height: 50px;
	// background-color: orangered;
	border-radius: 30px;
	float: left;
	margin-left: 10px;
	text-align: center;
}
.dd31 .img1{
	width: 100%;
	height: 50px;
}
.dd31 .img2{
	width: 100%;
	height: 40px;
	margin-top: 6px;
}
.dd31 .img3{
	width: 60%;
	height: 30px;
	margin-top: 10px;
}
.dd4{
	margin-top: 60px;
	text-align: center;
}
</style>

<template>
  <div id="app">
    <router-view/>
	<van-tabbar v-model="active1" v-show="this.$route.meta.auth==true">
	  <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
	  <van-tabbar-item to="/about" icon="search">分类</van-tabbar-item>
	  <van-tabbar-item to="/about" icon="shopping-cart-o">购物车</van-tabbar-item>
	  <van-tabbar-item to="/about" icon="setting-o">我的</van-tabbar-item>
	</van-tabbar>
  </div>
</template>
<script>
export default{
	data() {
		return {
		  active1: 0,
		  // data:{}
		}
	},
}
	
</script>
<style lang="less">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

</style>

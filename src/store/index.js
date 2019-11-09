import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Cookie from 'js-cookie'
export default new Vuex.Store({
  state: {
	  goods:[],
	  flag:false,
  },
  getters:{
	  getlog(state){
		  return state.flag||Cookie.get("islog");
	  }
	  
  },
  mutations: {
	  setlog(state,item){
		  state.flag=item;
		  if(item){
			  Cookie.set("islog",true)
		  }
		  else{
			  Cookie.remove("islog")
		  }
	  },
	  addtocard(state,kt){
		  state.goods.push(kt)
	  }
  },
  actions: {
  },
  modules: {
  }
})

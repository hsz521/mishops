import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goods:[],
	  flag:false,
  },
  getters:{
	  getlog(state){
		  return state.flag;
	  }
  },
  mutations: {
	  setlog(state,item){
		  state.flag=item
	  }
  },
  actions: {
  },
  modules: {
  }
})

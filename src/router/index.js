import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Shops from '../views/Shops.vue'
import Forest from '../views/Forest.vue'
import Meto from '../views/Meto.vue'
import Login from '../views/Login.vue'
import Topa from '../views/Topa.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		auth:true
	}
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
	meta:{	
		auth:false
	}
  },
  {
    path: '/forest/:id',
    name: 'forest',
    component: Forest,
  	meta:{
  		auth:false
  	}
  },
  {
    path: '/topa',
    name: 'topa',
    component: Topa,
  	meta:{
  		auth:false
  	}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  	meta:{
  		auth:false
  	}
  },
  {
    path: '/meto',
    name: 'meto',
    component: Meto,
  	meta:{
  		auth:true
  	}
  },
  {
    path: '/shops',
    name: 'shops',
    component: Shops,
  	meta:{
  		auth:true
  	}
  },
  {
    path: '/about',
    name: 'about',
	meta:{
		auth:true
	},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

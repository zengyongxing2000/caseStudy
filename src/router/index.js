import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/order'),
    meta: {
      TabbarShow: true, // 控制底部是否渲染
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search'),
    meta: {
      TabbarShow: true,
    }
  },
  {
    path: '/take-out',
    name: 'take-out',
    component: () => import('../views/take-out'),
    meta: {
      TabbarShow: true,
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order'),
    meta: {
      TabbarShow: true,
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my'),
    meta: {
      TabbarShow: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      TabbarShow: false,
    }
  },
  {
    path: '/balance',
    name: 'balance',
    component: () => import('../views/balance'),
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: '/detail',
    component: () => import('../views/datail'),
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: '/coupons',
    name: 'coupons',
    component: () => import('../views/coupons'),
    meta: {
      TabbarShow: true,
    }
  },
  {
    path: '/integral',
    name: 'integral',
    component: () => import('../views/integral'),
    meta: {
      TabbarShow: true,
    }
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/personal'),
    meta: {
      TabbarShow: false,
    }
  },
  {
    path: '/username',
    name: 'username',
    component: () => import('../views/personal/children/username.vue'),
    meta: {
      TabbarShow: false,
    }
  },
  {
    path: '/downloadApp',
    name: 'downloadApp',
    component: () => import('../views/my/children/downloadApp.vue'),
    meta: {
      TabbarShow: false,
    }
  },
  {
    path: '/serviceCenter',
    name: 'serviceCenter',
    component: () => import('../views/my/children/serviceCenter.vue'),
    meta: {
      TabbarShow: false,
    }
  },
  {
    path: '/citys',
    name: 'citys',
    component: () => import('../views/take-out/children/city.vue'),
    meta: {
      TabbarShow: false,
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test'),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: '/searchCity',
    name: 'searchCity',
    component: () => import('../views/take-out/children/searchAddress'),
    meta: {
      TabbarShow: false,
    }
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/food'),
    meta: {
      TabbarShow: false,
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

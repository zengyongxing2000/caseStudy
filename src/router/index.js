import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/citys",
    meta: {
      TabbarShow: true, // 控制底部是否渲染
    },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/search"),
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: "/take-out",
    name: "take-out",
    component: () => import("../views/take-out"),
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/order"),
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/my"),
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: "/balance",
    name: "balance",
    component: () => import("../views/my/balance"),
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: "/coupons",
    name: "coupons",
    component: () => import("../views/my/coupons"),
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login"),
    meta: {
      TabbarShow: false,
    },
  },

  {
    path: "/shopDetail",
    component: () => import("../views/take-out/shopdetail"),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: "/integral",
    name: "integral",
    component: () => import("../views/my/integral"),
    meta: {
      TabbarShow: true,
    },
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("../views/login/personal"),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: "/username",
    name: "username",
    component: () => import("../views/login/personal/children/username.vue"),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: "/downloadApp",
    name: "downloadApp",
    component: () => import("../views/my/children/downloadApp.vue"),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: "/serviceCenter",
    name: "serviceCenter",
    component: () => import("../views/my/children/serviceCenter.vue"),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: "/citys",
    name: "citys",
    component: () => import("../views/take-out/children/city.vue"),
    meta: {
      TabbarShow: false,
    },
  },

  {
    path: "/searchCity",
    name: "searchCity",
    component: () => import("../views/take-out/children/searchAddress"),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: "/food",
    name: "food",
    component: () => import("../views/take-out/food"),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: "/foodDetail",
    name: "foodDetail",
    component: () => import("../views/take-out/foodDetail"),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: "/choose",
    name: "choose",
    component: () => import("../views/take-out/choose"),
    meta: {
      TabbarShow: false,
    },
  },
  {
    path: "/shippingAddress",
    name: "shippingAddress",
    component: () => import("../views/my/shippingAddress"),
    meta: {
      TabbarShow: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

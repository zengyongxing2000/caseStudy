import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScroller from "vue-scroller";

Vue.config.productionTip = false;

// vant
import Vant from "vant";
import "vant/lib/index.css";
import { Swipe, SwipeItem } from "vant";
Vue.use(Vant);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VueScroller);
//axios
import axios from "axios";
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

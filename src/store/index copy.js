import Vue from "vue";
import Vuex from "vuex";
var ADDCART = "addcart";
var DELECTCART = "delectcart";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Cart: {
      name: "coderwhy",
    },
  },
  getters: {},
  mutations: {
    [ADDCART](state) {
      state.Cart.name = "123";
    },
    [DELECTCART](state) {
      state.Cart.name = "456";
    },
  },
  actions: {
    addCart({ commit }, arg) {
      console.log(arg);
      commit("addcart");
    },
    delectCart({ commit }) {
      commit("delectcart");
    },
  },
  modules: {},
});

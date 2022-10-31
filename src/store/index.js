import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoparr: [],
  },
  getters: {},
  mutations: {
    addNumber(state, payload) {
      // if (state.shoparr[].indexOf(payload.id) === -1) {
      //   state.shoparr.push(payload);
      //   console.log(payload);
      // }
    },
    deleteNumber(state, payload) {
      state.shoparr.push(payload);
    },
  },
  actions: {},
  modules: {},
});

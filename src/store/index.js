import Vue from "vue";
import Vuex from "vuex";
import LoL from "./modules/lolBoost";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    LoL,
  },
});

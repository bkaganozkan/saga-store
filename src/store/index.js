import Vue from "vue";
import Vuex from "vuex";
import LoL from "./modules/lolBoost";
import Metin2 from "./modules/metin2"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    LoL,
    Metin2
  },
});

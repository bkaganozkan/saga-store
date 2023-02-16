import Vue from "vue";
import Vuex from "vuex";
import LoL from "./modules/lolBoost";
import Metin2 from "./modules/metin2";
import LostArk from "./modules/lostark";
import SocialMedia from "./modules/social";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    routeToBuyMethod: ({}, payload) => {
      const encodedURL = encodeURIComponent(JSON.stringify(payload));
      window.open(`http://89.252.135.20/payment?param=${encodedURL}`, "_blank");
    },
  },
  modules: {
    LoL,
    Metin2,
    LostArk,
    SocialMedia,
  },
});

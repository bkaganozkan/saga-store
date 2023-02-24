import Vue from "vue";
import Vuex from "vuex";
import LoL from "./modules/lolBoost";
import Metin2 from "./modules/metin2";
import LostArk from "./modules/lostark";
import SocialMedia from "./modules/social";
import Cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    routeToBuyMethod: ({}, payload) => {
      const encodedURL = encodeURIComponent(JSON.stringify(payload));
      window.open(
        `https://sageyangstore.com/payment?param=${encodedURL}`,
        "_blank"
      );
    },
    routeToBuyMethodWithCart: ({}, payload) => {
      console.log(payload);
      const encodedURL = encodeURIComponent(JSON.stringify(payload));
      window.open(
        `https://sageyangstore.com/payment?param=${encodedURL}`,
        "_blank"
      );
    },
    routeToBuyMethodWithCartByCrypto: ({}, payload) => {
      const encodedURL = encodeURIComponent(JSON.stringify(payload));
      window.open(`http://89.252.135.20/payment?param=${encodedURL}`, "_blank");
    },
  },
  modules: {
    LoL,
    Metin2,
    LostArk,
    SocialMedia,
    Cart,
  },
});

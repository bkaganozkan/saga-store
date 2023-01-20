import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import RiotGames from "@/components/LeagueOfLegends/RiotGames.vue";
import Metin2 from "@/components/Metin2/Metin2.vue";
import LostArk from "@/components/LostArk/LostArk.vue";
import SocialMedia from "@/components/SocialMedia/SocialMedia.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
  },
  {
    path: "/leagueoflegends",
    name: "leaugeoflegends",
    component: RiotGames,
  },
  {
    path: "/metin2",
    name: "metin2",
    component: Metin2,
  },
  {
    path: "/lostArk",
    name: "lostArk",
    component: LostArk,
  },
  {
    path: "/socialmedia",
    name: "SocialMedia",
    component: SocialMedia,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

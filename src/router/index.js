import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import RiotGames from "@/components/LeagueOfLegends/RiotGames.vue";

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
];
 
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

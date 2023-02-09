import API from "@/shared/api";

const state = {
  lolDataFethed: false,
  activeCategory: "",
  boostCategory: [
    {
      name: "LOL BOOST",
      icon: require("@/assets/svgs/lol-50.svg"),
      tabName: "tab-lol",
      imgBasePath: "LoL",
    },
    {
      name: "TFT BOOST",
      icon: require("@/assets/svgs/tft-50.svg"),
      tabName: "tab-tft",
      imgBasePath: "LoL",
    },
    {
      name: "VALORANT BOOST",
      icon: require("@/assets/svgs/val-50.svg"),
      tabName: "tab-val",
      imgBasePath: "valorant",
    },
  ],
};
const getters = {
  isFetched:(state) => {
    return state.lolDataFethed
  },
  getBoostCategory: (state) => {
    return state.boostCategory;
  },
  getBoostTypesByCategory: (state) => (name) => {
    return state.boostCategory.find((el) => el.tabName == name);
  },
};
const mutations = {
  mutateLoLFetchedData: (state, payload) => {
    state.boostCategory = state.boostCategory.map((el) => {
      if (el.tabName == payload.tabName) {
        return {
          ...el,
          ...{ servers:payload.servers, league: payload.leagues, divisions: payload.divisions },
        };
      } else return el;
    });
  },
};
const actions = {
  fetchLoLDataData: async ({ state, commit }) => {
    let jsons = ["/lol.json",'tft.json', "valorant.json"];
    for (let item of jsons) {
      let res = await API.get(item);
      const data = res.data;
      commit("mutateLoLFetchedData", data);
    }
    state.lolDataFethed = true;
  },
};

export default { state, getters, actions, mutations };

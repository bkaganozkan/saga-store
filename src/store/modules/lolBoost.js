const state = {
  activeCategory: "",
  boostCategory: [
    {
      name: "LOL BOOST",
      icon: require("@/assets/svgs/lol-50.svg"),
      tabName: "tab-lol",
      imgBasePath: "LoL",
      price: 20,
      boostType: [
        {
          name: "Solo",
          type: "solo-type",
        },
        { name: "Duo", type: "duo-type", boostOptions: [] },
        { name: "Normal", type: "normal-type", boostOptions: [] },
        { name: "Flex", type: "flex-type", boostOptions: [] },
      ],
      boostOptions: [
        {
          title: "Current League",
          leagueOptions: [
            { title: "Bronze", imgUrl: "bronze", rate: 1 },
            { title: "Silver", imgUrl: "silver", rate: 3 },
            { title: "Gold", imgUrl: "gold", rate: 5 },
            { title: "Platinum", imgUrl: "platinum", rate: 7 },
            { title: "Diamond", imgUrl: "diamond", rate: 9 },
            { title: "Master", imgUrl: "master", rate: 11 },
            { title: "Challanger", imgUrl: "challanger", rate: 13 },
          ],
          divisionOptions: [
            { title: "Division 1", imgUrl: "-1", rate: 0.75 },
            { title: "Division 2", imgUrl: "-2", rate: 1.75 },
            { title: "Division 3", imgUrl: "-3", rate: 2.75 },
            { title: "Division 4", imgUrl: "-4", rate: 3.75 },
          ],
          pointOptions: ["0-20", "20-40", "40-60", "60-80", "80-100"],
        },
        {
          title: "Desire League",
          leagueOptions: [
            { title: "Bronze", imgUrl: "bronze", rate: 2 },
            { title: "Silver", imgUrl: "silver", rate: 4 },
            { title: "Gold", imgUrl: "gold", rate: 6 },
            { title: "Platinum", imgUrl: "platinum", rate: 10 },
            { title: "Diamond", imgUrl: "diamond", rate: 12 },
            { title: "Master", imgUrl: "master", rate: 14 },
            { title: "Challanger", imgUrl: "challanger", rate: 16 },
          ],
          divisionOptions: [
            { title: "Division 1", imgUrl: "-1", rate: 1.75 },
            { title: "Division 2", imgUrl: "-2", rate: 2.75 },
            { title: "Division 3", imgUrl: "-3", rate: 3.75 },
            { title: "Division 4", imgUrl: "-4", rate: 4.75 },
          ],
        },
        {
          title: "Server",
          serverOptinos: ["Europe", "Turkey"],
        },
      ],
    },
    {
      name: "TFT BOOST",
      icon: require("@/assets/svgs/tft-50.svg"),
      tabName: "tab-tft",
      imgBasePath: "LoL",
      price: 25,
      boostType: [
        { name: "Solo", type: "solo-type", boostOptions: [] },
        { name: "Duo", type: "duo-type", boostOptions: [] },
        { name: "Win", type: "win-type", boostOptions: [] },
        { name: "Placement", type: "placement-type", boostOptions: [] },
      ],
      boostOptions: [
        {
          title: "Current League",
          leagueOptions: [
            { title: "Bronze", imgUrl: "bronze", rate: 1 },
            { title: "Silver", imgUrl: "silver", rate: 3 },
            { title: "Gold", imgUrl: "gold", rate: 5 },
            { title: "Platinum", imgUrl: "platinum", rate: 7 },
            { title: "Diamond", imgUrl: "diamond", rate: 9 },
            { title: "Master", imgUrl: "master", rate: 11 },
            { title: "Challanger", imgUrl: "challanger", rate: 13 },
          ],
          divisionOptions: [
            { title: "Division 1", imgUrl: "-1", rate: 0.75 },
            { title: "Division 2", imgUrl: "-2", rate: 1.75 },
            { title: "Division 3", imgUrl: "-3", rate: 2.75 },
            { title: "Division 4", imgUrl: "-4", rate: 3.75 },
          ],
          pointOptions: ["0-20", "20-40", "40-60", "60-80", "80-100"],
        },
        {
          title: "Desire League",
          leagueOptions: [
            { title: "Bronze", imgUrl: "bronze", rate: 2 },
            { title: "Silver", imgUrl: "silver", rate: 4 },
            { title: "Gold", imgUrl: "gold", rate: 6 },
            { title: "Platinum", imgUrl: "platinum", rate: 10 },
            { title: "Diamond", imgUrl: "diamond", rate: 12 },
            { title: "Master", imgUrl: "master", rate: 14 },
            { title: "Challanger", imgUrl: "challanger", rate: 16 },
          ],
          divisionOptions: [
            { title: "Division 1", imgUrl: "-1", rate: 1.75 },
            { title: "Division 2", imgUrl: "-2", rate: 2.75 },
            { title: "Division 3", imgUrl: "-3", rate: 3.75 },
            { title: "Division 4", imgUrl: "-4", rate: 4.75 },
          ],
        },
        {
          title: "Server",
          serverOptinos: ["Europe", "Turkey"],
        },
      ],
    },
    {
      name: "VALORANT BOOST",
      icon: require("@/assets/svgs/val-50.svg"),
      tabName: "tab-val",
      imgBasePath: "valorant",
      price: 5,
      boostType: [
        { name: "Solo", type: "solo-type", boostOptions: [] },
        { name: "Duo", type: "duo-type", boostOptions: [] },
        { name: "Win", type: "win-type", boostOptions: [] },
        { name: "Placement", type: "placement-type", boostOptions: [] },
      ],
      boostOptions: [
        {
          title: "Current League",
          leagueOptions: [
            { title: "Bronze", imgUrl: "bronze", rate: 1 },
            { title: "Silver", imgUrl: "silver", rate: 3 },
            { title: "Gold", imgUrl: "gold", rate: 5 },
            { title: "Platinum", imgUrl: "platinum", rate: 7 },
            { title: "Diamond", imgUrl: "diamond", rate: 9 },
            { title: "Ascendat", imgUrl: "ascendat", rate: 11 },
            { title: "Immortal", imgUrl: "immortal", rate: 13 },
          ],
          divisionOptions: [
            { title: "Division 1", imgUrl: "-1", rate: 0.75 },
            { title: "Division 2", imgUrl: "-2", rate: 1.75 },
            { title: "Division 3", imgUrl: "-3", rate: 2.75 },
          ],
          pointOptions: ["0-20", "20-40", "40-60", "60-80", "80-100"],
        },
        {
          title: "Desire League",
          leagueOptions: [
            { title: "Bronze", imgUrl: "bronze", rate: 2 },
            { title: "Silver", imgUrl: "silver", rate: 4 },
            { title: "Gold", imgUrl: "gold", rate: 6 },
            { title: "Platinum", imgUrl: "platinum", rate: 10 },
            { title: "Diamond", imgUrl: "diamond", rate: 12 },
            { title: "Ascendat", imgUrl: "ascendat", rate: 14 },
            { title: "Immortal", imgUrl: "immortal", rate: 16 },
          ],
          divisionOptions: [
            { title: "Division 1", imgUrl: "-1", rate: 1.75 },
            { title: "Division 2", imgUrl: "-2", rate: 2.75 },
            { title: "Division 3", imgUrl: "-3", rate: 3.75 },
          ],
        },
        {
          title: "Server",
          serverOptinos: ["Europe", "Turkey"],
        },
      ],
    },
  ],
};
const getters = {
  getBoostCategory: (state) => {
    return state.boostCategory;
  },
  getBoostTypesByCategory: (state) => (name) => {
    let val = state.boostCategory.filter((tab) => tab.tabName == name)[0];
    return val;
  },

  getBoostOptionsByName: (state) => (name) => {
    let val = state.boostCategory.filter((tab) => tab.tabName == name)[0]
      .boostOptions;
    return val;
  },

  calculatePrice: () => (price, rate) => {
    return price * rate;
  },
};
const mutations = {};
const actions = {};

export default { state, getters, actions, mutations };

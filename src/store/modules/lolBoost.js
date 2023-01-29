const state = {
  activeCategory: "",
  boostCategory: [
    {
      name: "LOL BOOST",
      icon: require("@/assets/svgs/lol-50.svg"),
      tabName: "tab-lol",
      imgBasePath: "LoL",
      price: 5,
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
            "Iron",
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
          ],
          divisionOptions: [
            {
              league: "Iron",
              divisions: [
                { title: "Division 4 ", imgUrl: "iron-4", price: 5 },
                { title: "Division 3 ", imgUrl: "iron-3", price: 10 },
                { title: "Division 2 ", imgUrl: "iron-2", price: 15 },
                { title: "Division 1 ", imgUrl: "iron-1", price: 25 },
              ],
            },
            {
              league: "Bronze",
              divisions: [
                { title: "Division 4 ", imgUrl: "bronze-4", price: 35 },
                { title: "Division 3 ", imgUrl: "bronze-3", price: 40 },
                { title: "Division 2 ", imgUrl: "bronze-2", price: 45 },
                { title: "Division 1 ", imgUrl: "bronze-1", price: 50 },
              ],
            },
            {
              league: "Silver",
              divisions: [
                { title: "Division 4 ", imgUrl: "silver-4", price: 55 },
                { title: "Division 3 ", imgUrl: "silver-3", price: 60 },
                { title: "Division 2 ", imgUrl: "silver-2", price: 65 },
                { title: "Division 1 ", imgUrl: "silver-1", price: 70 },
              ],
            },
            {
              league: "Gold",
              divisions: [
                { title: "Division 4 ", imgUrl: "gold-4", price: 85 },
                { title: "Division 3 ", imgUrl: "gold-3", price: 100 },
                { title: "Division 2 ", imgUrl: "gold-2", price: 115 },
                { title: "Division 1 ", imgUrl: "gold-1", price: 125 },
              ],
            },
            {
              league: "Platinum",
              divisions: [
                { title: "Division 4 ", imgUrl: "platinum-4", price: 150 },
                { title: "Division 3 ", imgUrl: "platinum-3", price: 175 },
                { title: "Division 2 ", imgUrl: "platinum-2", price: 200 },
                { title: "Division 1 ", imgUrl: "platinum-1", price: 225 },
              ],
            },
            {
              league: "Diamond",
              divisions: [
                { title: "Division 4 ", imgUrl: "diamond-4", price: 300 },
                { title: "Division 3 ", imgUrl: "diamond-3", price: 375 },
                { title: "Division 2 ", imgUrl: "diamond-2", price: 450 },
                { title: "Division 1 ", imgUrl: "diamond-1", price: 525 },
              ],
            },
          ],
          pointOptions: ["0-20", "20-40", "40-60", "60-80", "80-100"],
        },
        {
          title: "Desire League",
          leagueOptions: [
            "Iron",
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
          ],
          divisionOptions: [
            {
              league: "Iron",
              divisions: [
                { title: "Division 4 ", imgUrl: "iron-4", price: 5 },
                { title: "Division 3 ", imgUrl: "iron-3", price: 10 },
                { title: "Division 2 ", imgUrl: "iron-2", price: 15 },
                { title: "Division 1 ", imgUrl: "iron-1", price: 25 },
              ],
            },
            {
              league: "Bronze",
              divisions: [
                { title: "Division 4 ", imgUrl: "bronze-4", price: 35 },
                { title: "Division 3 ", imgUrl: "bronze-3", price: 40 },
                { title: "Division 2 ", imgUrl: "bronze-2", price: 45 },
                { title: "Division 1 ", imgUrl: "bronze-1", price: 50 },
              ],
            },
            {
              league: "Silver",
              divisions: [
                { title: "Division 4 ", imgUrl: "silver-4", price: 55 },
                { title: "Division 3 ", imgUrl: "silver-3", price: 60 },
                { title: "Division 2 ", imgUrl: "silver-2", price: 65 },
                { title: "Division 1 ", imgUrl: "silver-1", price: 70 },
              ],
            },
            {
              league: "Gold",
              divisions: [
                { title: "Division 4 ", imgUrl: "gold-4", price: 85 },
                { title: "Division 3 ", imgUrl: "gold-3", price: 100 },
                { title: "Division 2 ", imgUrl: "gold-2", price: 115 },
                { title: "Division 1 ", imgUrl: "gold-1", price: 125 },
              ],
            },
            {
              league: "Platinum",
              divisions: [
                { title: "Division 4 ", imgUrl: "platinum-4", price: 150 },
                { title: "Division 3 ", imgUrl: "platinum-3", price: 175 },
                { title: "Division 2 ", imgUrl: "platinum-2", price: 200 },
                { title: "Division 1 ", imgUrl: "platinum-1", price: 225 },
              ],
            },
            {
              league: "Diamond",
              divisions: [
                { title: "Division 4 ", imgUrl: "diamond-4", price: 300 },
                { title: "Division 3 ", imgUrl: "diamond-3", price: 375 },
                { title: "Division 2 ", imgUrl: "diamond-2", price: 450 },
                { title: "Division 1 ", imgUrl: "diamond-1", price: 525 },
              ],
            },
            {
              league: "Master",
              price: 650,
            },
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
            "Iron",
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
          ],
          divisionOptions: [
            {
              league: "Iron",
              divisions: [
                { title: "Division 4 ", imgUrl: "iron-4", price: 5 },
                { title: "Division 3 ", imgUrl: "iron-3", price: 10 },
                { title: "Division 2 ", imgUrl: "iron-2", price: 15 },
                { title: "Division 1 ", imgUrl: "iron-1", price: 25 },
              ],
            },
            {
              league: "Bronze",
              divisions: [
                { title: "Division 4 ", imgUrl: "bronze-4", price: 35 },
                { title: "Division 3 ", imgUrl: "bronze-3", price: 40 },
                { title: "Division 2 ", imgUrl: "bronze-2", price: 45 },
                { title: "Division 1 ", imgUrl: "bronze-1", price: 50 },
              ],
            },
            {
              league: "Silver",
              divisions: [
                { title: "Division 4 ", imgUrl: "silver-4", price: 55 },
                { title: "Division 3 ", imgUrl: "silver-3", price: 60 },
                { title: "Division 2 ", imgUrl: "silver-2", price: 65 },
                { title: "Division 1 ", imgUrl: "silver-1", price: 70 },
              ],
            },
            {
              league: "Gold",
              divisions: [
                { title: "Division 4 ", imgUrl: "gold-4", price: 85 },
                { title: "Division 3 ", imgUrl: "gold-3", price: 100 },
                { title: "Division 2 ", imgUrl: "gold-2", price: 115 },
                { title: "Division 1 ", imgUrl: "gold-1", price: 125 },
              ],
            },
            {
              league: "Platinum",
              divisions: [
                { title: "Division 4 ", imgUrl: "platinum-4", price: 150 },
                { title: "Division 3 ", imgUrl: "platinum-3", price: 175 },
                { title: "Division 2 ", imgUrl: "platinum-2", price: 200 },
                { title: "Division 1 ", imgUrl: "platinum-1", price: 225 },
              ],
            },
            {
              league: "Diamond",
              divisions: [
                { title: "Division 4 ", imgUrl: "diamond-4", price: 300 },
                { title: "Division 3 ", imgUrl: "diamond-3", price: 375 },
                { title: "Division 2 ", imgUrl: "diamond-2", price: 450 },
                { title: "Division 1 ", imgUrl: "diamond-1", price: 525 },
              ],
            },
          ],
          pointOptions: ["0-20", "20-40", "40-60", "60-80", "80-100"],
        },
        {
          title: "Desire League",
          leagueOptions: [
            "Iron",
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
          ],
          divisionOptions: [
            {
              league: "Iron",
              divisions: [
                { title: "Division 4 ", imgUrl: "iron-4", price: 5 },
                { title: "Division 3 ", imgUrl: "iron-3", price: 10 },
                { title: "Division 2 ", imgUrl: "iron-2", price: 15 },
                { title: "Division 1 ", imgUrl: "iron-1", price: 25 },
              ],
            },
            {
              league: "Bronze",
              divisions: [
                { title: "Division 4 ", imgUrl: "bronze-4", price: 35 },
                { title: "Division 3 ", imgUrl: "bronze-3", price: 40 },
                { title: "Division 2 ", imgUrl: "bronze-2", price: 45 },
                { title: "Division 1 ", imgUrl: "bronze-1", price: 50 },
              ],
            },
            {
              league: "Silver",
              divisions: [
                { title: "Division 4 ", imgUrl: "silver-4", price: 55 },
                { title: "Division 3 ", imgUrl: "silver-3", price: 60 },
                { title: "Division 2 ", imgUrl: "silver-2", price: 65 },
                { title: "Division 1 ", imgUrl: "silver-1", price: 70 },
              ],
            },
            {
              league: "Gold",
              divisions: [
                { title: "Division 4 ", imgUrl: "gold-4", price: 85 },
                { title: "Division 3 ", imgUrl: "gold-3", price: 100 },
                { title: "Division 2 ", imgUrl: "gold-2", price: 115 },
                { title: "Division 1 ", imgUrl: "gold-1", price: 125 },
              ],
            },
            {
              league: "Platinum",
              divisions: [
                { title: "Division 4 ", imgUrl: "platinum-4", price: 150 },
                { title: "Division 3 ", imgUrl: "platinum-3", price: 175 },
                { title: "Division 2 ", imgUrl: "platinum-2", price: 200 },
                { title: "Division 1 ", imgUrl: "platinum-1", price: 225 },
              ],
            },
            {
              league: "Diamond",
              divisions: [
                { title: "Division 4 ", imgUrl: "diamond-4", price: 300 },
                { title: "Division 3 ", imgUrl: "diamond-3", price: 375 },
                { title: "Division 2 ", imgUrl: "diamond-2", price: 450 },
                { title: "Division 1 ", imgUrl: "diamond-1", price: 525 },
              ],
            },
            {
              league: "Master",
              price: 650,
            },
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
            "Iron",
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
          ],
          divisionOptions: [
            {
              league: "Iron",
              divisions: [
                { title: "Division 1 ", imgUrl: "iron-3", price: 10 },
                { title: "Division 2 ", imgUrl: "iron-2", price: 15 },
                { title: "Division 3 ", imgUrl: "iron-1", price: 25 },
              ],
            },
            {
              league: "Bronze",
              divisions: [
                { title: "Division 1 ", imgUrl: "bronze-3", price: 33 },
                { title: "Division 2 ", imgUrl: "bronze-2", price: 41 },
                { title: "Division 3 ", imgUrl: "bronze-1", price: 50 },
              ],
            },
            {
              league: "Silver",
              divisions: [
                { title: "Division 1 ", imgUrl: "silver-3", price: 60 },
                { title: "Division 2 ", imgUrl: "silver-2", price: 70 },
                { title: "Division 3 ", imgUrl: "silver-1", price: 83 },
              ],
            },
            {
              league: "Gold",
              divisions: [
                { title: "Division 1 ", imgUrl: "gold-3", price: 93 },
                { title: "Division 2 ", imgUrl: "gold-2", price: 106 },
                { title: "Division 3 ", imgUrl: "gold-1", price: 119 },
              ],
            },
            {
              league: "Platinum",
              divisions: [
                { title: "Division 1 ", imgUrl: "platinum-3", price: 137 },
                { title: "Division 2 ", imgUrl: "platinum-2", price: 155 },
                { title: "Division 3 ", imgUrl: "platinum-1", price: 150 },
              ],
            },
            {
              league: "Diamond",
              divisions: [
                { title: "Division 1 ", imgUrl: "diamond-3", price: 375 },
                { title: "Division 2 ", imgUrl: "diamond-2", price: 450 },
                { title: "Division 3 ", imgUrl: "diamond-1", price: 525 },
              ],
            },
          ],
          pointOptions: ["0-20", "20-40", "40-60", "60-80", "80-100"],
        },
        {
          title: "Desire League",
          leagueOptions: [
            "Iron",
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
          ],
          divisionOptions: [
            {
              league: "Iron",
              divisions: [
                { title: "Division 1 ", imgUrl: "iron-3", price: 10 },
                { title: "Division 2 ", imgUrl: "iron-2", price: 15 },
                { title: "Division 3 ", imgUrl: "iron-1", price: 25 },
              ],
            },
            {
              league: "Bronze",
              divisions: [
                { title: "Division 1 ", imgUrl: "bronze-3", price: 40 },
                { title: "Division 2 ", imgUrl: "bronze-2", price: 45 },
                { title: "Division 3 ", imgUrl: "bronze-1", price: 50 },
              ],
            },
            {
              league: "Silver",
              divisions: [
                { title: "Division 1 ", imgUrl: "silver-3", price: 60 },
                { title: "Division 2 ", imgUrl: "silver-2", price: 65 },
                { title: "Division 3 ", imgUrl: "silver-1", price: 70 },
              ],
            },
            {
              league: "Gold",
              divisions: [
                { title: "Division 1 ", imgUrl: "gold-3", price: 100 },
                { title: "Division 2 ", imgUrl: "gold-2", price: 115 },
                { title: "Division 3 ", imgUrl: "gold-1", price: 125 },
              ],
            },
            {
              league: "Platinum",
              divisions: [
                { title: "Division 1 ", imgUrl: "platinum-3", price: 175 },
                { title: "Division 2 ", imgUrl: "platinum-2", price: 200 },
                { title: "Division 3 ", imgUrl: "platinum-1", price: 225 },
              ],
            },
            {
              league: "Diamond",
              divisions: [
                { title: "Division 1 ", imgUrl: "diamond-3", price: 375 },
                { title: "Division 2 ", imgUrl: "diamond-2", price: 450 },
                { title: "Division 3 ", imgUrl: "diamond-1", price: 525 },
              ],
            },
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

  calculatePrice: (state) => (desirePrice, currentPrice, boostCategory) => {
    let { price } = state.boostCategory.find(
      (val) => val.tabName === boostCategory
    );
    let total = desirePrice - currentPrice;

    return total;
  },
};
const mutations = {};
const actions = {};

export default { state, getters, actions, mutations };

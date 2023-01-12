const state = {
  serverData: [
    {
      serverVersion: "PVP",
      servers: [
        { serverName: "Zeta", serverLogo: "URL", amount: "5KKK", price: "10€" },
        {
          serverName: "Aeldra",
          serverLogo: "URL",
          amount: "45KKK",
          price: "10€",
        },
        {
          serverName: "Origins",
          serverLogo: "URL",
          amount: "150KKK",
          price: "10€",
        },
        {
          serverName: "Azyrah",
          serverLogo: "URL",
          amount: "50WON",
          price: "10€",
        },
        {
          serverName: "Kımetsu",
          serverLogo: "URL",
          amount: "400KKK",
          price: "10€",
        },
        {
          serverName: "Kronius",
          serverLogo: "URL",
          amount: "400KKK",
          price: "10€",
        },
        {
          serverName: "Rodnia",
          serverLogo: "URL",
          amount: "90B",
          price: "10€",
        },
        {
          serverName: "CW2",
          serverLogo: "URL",
          amount: "1.1KK",
          price: "10€",
        },
        {
          serverName: "Ruibum",
          serverLogo: "URL",
          amount: "140KKK",
          price: "10€",
        },
        {
          serverName: "Zelonia",
          serverLogo: "URL",
          amount: "35KKK",
          price: "10€",
        },
      ],
    },

    {
      serverVersion: "Official",
      servers: [
        { serverName: "Ruby", serverLogo: "URL", amount: "1WON", price: "5€" },
        {
          serverName: "Polaris",
          serverLogo: "URL",
          amount: "1WON",
          price: "9€",
        },
        {
          serverName: "Polyphemos",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Tigerghost",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Espania",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Greek",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Italy",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Magyar",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Cesko",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Teutonia",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Germania",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Felis",
          serverLogo: "URL",
          amount: "1WON",
          price: "5€",
        },
        {
          serverName: "Azrael",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Arabic",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Carpat",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Europe",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Portugal",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Romania",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
        {
          serverName: "Polska",
          serverLogo: "URL",
          amount: "1WON",
          price: "1.5€",
        },
      ],
    },
  ],
};
const getters = {
  getPvpServerData: (state) => {
    return state.serverData.filter((item) => item.serverVersion === "PVP")[0];
  },
  getOfficialServerData: (state) => {
    return state.serverData.filter((item) => item.serverVersion === "Official")[0];
  },
};
const mutations = {};
const actions = {};

export default { state, getters, actions, mutations };

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
  ],
};
const getters = {
  getPvpServerData: (state) => {
    return state.serverData.filter((item) => item.serverVersion === "PVP")[0];
  },
};
const mutations = {};
const actions = {};

export default { state, getters, actions, mutations };

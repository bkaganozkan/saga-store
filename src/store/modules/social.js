const state = {
  platforms: ["Twitter", "Youtube", "Instagram", "Tiktok", "Facebook"],
  socialOptions: [
    {
      platform: "Twitter",
      methods: [
        { title: "Follow - 1000", price: 2.5, currency: "€" },
        { title: "Likes - 1000", price: 2.5, currency: "€" },
        { title: "Retweet - 1000", price: 20, currency: "€" },
      ],
    },
    {
      platform: "Youtube",
      methods: [
        { title: "Abone", price: 30, currency: "€" },
        { title: "Likes - 1000", price: 2.5, currency: "€" },
        { title: "Views - 1000", price: 4, currency: "€" },
      ],
    },
    {
      platform: "Instagram",
      methods: [
        { title: "Follow - 1000", price: 6, currency: "€" },
        { title: "Likes - 1000", price: 5, currency: "€" },
        { title: "Views - 1000", price: 1, currency: "€" },
        { title: "10 Comments", price: 2, currency: "€" },
        { title: "Story Views - 1000", price: 0.5, currency: "€" },
      ],
    },
    {
      platform: "Tiktok",
      methods: [
        { title: "Follow - 1000", price: 8 },
        { title: "Likes - 1000", price: 6 },
        { title: "Views - 1000", price: 2 },
        { title: "10 Comments", price: 3 },
      ],
    },
    {
      platform: "Facebook",
      currency: "€",
      methods: [
        { title: "Follow - 1000", price: 1 },
        { title: "Likes - 1000", price: 0.8 },
        { title: "Views - 1000", price: 4 },
        { title: "10 Comments", price: 1 },
        { title: "Page Likes - 1000", price: 15 },
      ],
    },
  ],
};
const getters = {
  selectSocialPlatform: (state) => {
    return state.platforms;
  },
  getSocialOptions: (state) => (platform) => {
    return state.socialOptions.find((el) => el.platform === platform);
  },
  calculateSocialPrice: () => (price, amount) => {
    return price * amount;
  },
};
const mutations = {};
const actions = {};

export default { state, getters, actions, mutations };

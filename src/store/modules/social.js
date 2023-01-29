const state = {
  platforms: [
    "Twitter",
    "Spotify",
    "Discord",
    "Youtube",
    "Instagram",
    "Tiktok",
    "Tumblr",
    "Facebook",
    "Reddit",
    "Telegram",
    "Twitch",
  ],
  // Comments tablolarında satır başına 1 comments olarak ekle
  socialOptions: [
    {
      platform: "Twitter",
      methods: [
        { title: "Follow - 1000 | 2.5€", price: 0.0025, currency: "€" },
        { title: "Likes - 1000 | 2.5€", price: 0.0025, currency: "€" },
        { title: "Retweet - 1000 | 20€", price: 0.02, currency: "€" },
      ],
    },
    {
      platform: "Twitch",
      methods: [
        { title: "Follow - 1000 | 7€", price: 0.007, currency: "€" },
        { title: "Video Views - 1000 | 7€", price: 0.007, currency: "€" },
        { title: "Live Views - 15min. 1000 | 10€", price: 0.01, currency: "€" },
        { title: "Live Views - 30min. 1000 | 20€", price: 0.02, currency: "€" },
        {
          title: "Live Views - 60min. 1000 | 35€",
          price: 0.035,
          currency: "€",
        },
        { title: "1 Month Subs - 1 | 3€", price: 3, currency: "€" },
        { title: "3 Month Subs - 1 | 9€", price: 9, currency: "€" },
      ],
    },
    {
      platform: "Spotify",
      methods: [
        { title: "Followers - 1000 | 2€", price: 0.002, currency: "€" },
      ],
    },
    {
      platform: "Reddit",
      methods: [
        { title: "Followers - 1000 | 30€", price: 0.03, currency: "€" },
      ],
    },
    {
      platform: "LinkedIn",
      methods: [
        { title: "Followers - 1000 | 20€", price: 0.02, currency: "€" },
        { title: "Views - 1000 | 20€", price: 0.02, currency: "€" },
        { title: "Likes - 1000 | 20€", price: 0.02, currency: "€" },
      ],
    },
    {
      platform: "Telegram",
      methods: [
        { title: "Channel Users - 1000 | 6€", price: 0.006, currency: "€" },
        { title: "Views - 1000 | 1€", price: 0.001, currency: "€" },
        { title: "Random Comment - 1000 | 25€", price: 0.025, currency: "€" },
        {
          title: "Special Comment - 1000 | 50€",
          price: 0.05,
          currency: "€",
          comment: true,
        },
      ],
    },
    {
      platform: "Discord",
      methods: [
        { title: "Friend Request - 1000 | 20€", price: 0.02, currency: "€" },
        {
          title:
            "Channel Offline Users - 1000 | 25€ (For this option connect to customer service)",
          price: 0.025,
          currency: "€",
        },
        {
          title:
            "Channel Online Users - 1000 | 45€ (For this option connect to customer service)",
          price: 0.45,
          currency: "€",
        },
      ],
    },
    {
      platform: "Youtube",
      methods: [
        { title: "Follower - 1000 | 30€", price: 0.03, currency: "€" },
        { title: "Likes - 1000 | 2.5€", price: 0.0025, currency: "€" },
        { title: "Views - 1000 | 4€", price: 0.004, currency: "€" },
        { title: "Short Views - 1000 | 4€", price: 0.004, currency: "€" },
        {
          title: "Live Viewers - 30min 1000 | 10€",
          price: 0.01,
          currency: "€",
        },
        {
          title: "Live Viewers - 60min 1000 | 20€",
          price: 0.02,
          currency: "€",
        },
        {
          title: "Live Viewers - 90min 1000 | 30€",
          price: 0.03,
          currency: "€",
        },
        {
          title: "Live Viewers - 120min 1000 | 40€",
          price: 0.04,
          currency: "€",
        },
        {
          title: "Live Viewers - 150min 1000 | 50€",
          price: 0.05,
          currency: "€",
        },
        { title: "Short likes - 1000 | 2.5€", price: 0.0025, currency: "€" },
        {
          title: "Comments - 1000 | 40€",
          price: 0.04,
          currency: "€",
          comment: true,
        },
      ],
    },
    {
      platform: "Tumblr",
      methods: [
        { title: "Follower 1000 | 10€", price: 0.01, currency: "€" },
        { title: "Likes - 1000 | 20€", price: 0.02, currency: "€" },
        { title: "REBlogs - 1000 | 25€", price: 0.25, currency: "€" },
      ],
    },
    {
      platform: "Instagram",
      methods: [
        { title: "Follow - 1000 | 6€", price: 0.006, currency: "€" },
        { title: "Likes - 1000 | 5€", price: 0.005, currency: "€" },
        { title: "Video Views - 1000 | 1€ ", price: 0.001, currency: "€" },
        { title: "IGTV Views - 1000 | 1€ ", price: 0.001, currency: "€" },
        { title: "Reels Views - 1000 | 1€ ", price: 0.001, currency: "€" },
        {
          title: "1000 Comments | 150€",
          price: 0.15,
          currency: "€",
          comment: true,
        },
        {
          title: "Blue Checkmark Account Max 6x Comments | 60€",
          price: 10,
          currency: "€",
        },
        {
          title: "Live Stream 30min. - 1000 | 30€",
          price: 0.03,
          currency: "€",
        },
        {
          title: "Live Stream 60min. - 1000 | 40€",
          price: 0.04,
          currency: "€",
        },
        { title: "Live Stream Likes - 1000 | 1€", price: 0.001, currency: "€" },
        { title: "Story Views - 1000 | 1€", price: 0.001, currency: "€" },
      ],
    },
    {
      platform: "Tiktok",
      methods: [
        { title: "Follow - 1000 | 8€", price: 0.008 },
        { title: "Likes - 1000 | 6€", price: 0.006 },
        { title: "Views - 1000 | 2€", price: 0.002 },
        { title: "Live Views - 1000 15m. | 15€", price: 0.015 },
        { title: "Live Views - 1000 35m. | 30€", price: 0.03 },
        { title: "Live Views - 1000 65m. | 55€", price: 0.055 },
        { title: "Live Views - 1000 95m. | 80€", price: 0.08 },
        { title: "Live Views - 1000 120m. | 105€", price: 0.105 },
        { title: "Live Views - 1000 180m. | 130€", price: 0.13 },
        { title: "Live Views - 1000 240m. | 215€", price: 0.215 },
        { title: "1000 Comments | 30€ ", price: 0.03, comment: true },
      ],
    },
    {
      platform: "Facebook",
      currency: "€",
      methods: [
        { title: "Follow - 1000", price: 1 },
        { title: "Likes - 1000", price: 0.8 },
        { title: "Views - 1000", price: 4 },
        { title: "10 Comments", price: 1, comment: true },
        { title: "Page Likes - 1000", price: 15 },
        { title: "Live Stream 30min. - 1000 Viewers | 10€", price: 10 },
        { title: "Live Stream 60min. - 1000 Viewers | 19€", price: 19 },
        { title: "Live Stream 90min. - 1000 Viewers | 28€", price: 28 },
        { title: "Live Stream 120min. - 1000 Viewers | 37€", price: 37 },
        { title: "Live Stream 150min. - 1000 Viewers | 46€", price: 46 },
        { title: "Live Stream 180min. - 1000 Viewers | 54€", price: 54 },
        { title: "Live Stream 210min. - 1000 Viewers | 62€", price: 62 },
        { title: "Live Stream 240min. - 1000 Viewers | 70€", price: 70 },
        { title: "Live Stream 270min. - 1000 Viewers | 75€", price: 75 },
        { title: "Live Stream 300min. - 1000 Viewers | 80€", price: 80 },
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
    console.log(price, amount);
    return price * amount;
  },
};
const mutations = {};
const actions = {};

export default { state, getters, actions, mutations };

const state = {
  cart: [],
};
const getters = {
  cartItemLength: (state) => {
    return state.cart.length;
  },

  cartItems: (state) => {
    return state.cart;
  },
};
const mutations = {
  addCart: (state, payload) => {
    state.cart.push(payload);
    state.cart = state.cart.map((el, i) => ({ ...el, id: i }));
  },
  removeCart: (state, payload) => {
    state.cart = state.cart.filter((el) => el.id !== payload.id);
    state.cart = state.cart.map((el, i) => ({ ...el, id: i }));
  },
};

const actions = {};

export default { state, getters, mutations, actions };

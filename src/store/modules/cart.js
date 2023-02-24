const state = {
  cart: [],
  price: 0,
};
const getters = {
  cartItemLength: (state) => {
    return state.cart.length;
  },

  cartItems: (state) => {
    return state.cart;
  },
  totalPrice: (state) => {
    return state.price;
  },
};
const mutations = {
  addCart: (state, payload) => {
    state.cart.push(payload);
    state.cart = state.cart.map((el, i) => ({ ...el, id: i }));
    state.price = state.cart.reduce((prev, current) => current.price + prev, 0);
  },
  removeCart: (state, payload) => {
    state.cart = state.cart.filter((el) => el.id !== payload.id);
    state.cart = state.cart.map((el, i) => ({ ...el, id: i }));
    state.price = state.cart.reduce((prev, current) => current.price + prev, 0);
  },
};

const actions = {};

export default { state, getters, mutations, actions };

import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    addOne(state) {
      state.counter++;
    },
    increase(state, { value }) {
      state.counter = state.counter + value;
    },
    setAuth(state, { isAuth }) {
      state.isLoggedIn = isAuth;
    },
  },
  // actions allows us to use async functions
  actions: {
    addOne(context) {
      setTimeout(() => {
        context.commit('addOne');
      }, 2000);
    },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state) {
      return state.counter;
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

import { createStore } from 'vuex';

const counterModule = {
  state() {
    return { counter: 0 };
  },
  mutations: {
    addOne(state) {
      state.counter++;
    },
    increase(state, { value }) {
      state.counter = state.counter + value;
    },
  },
  actions: {
    addOne(context) {
      setTimeout(() => {
        context.commit('addOne');
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state) {
      return state.counter;
    },
  },
};

export default createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, { isAuth }) {
      state.isLoggedIn = isAuth;
    },
  },
  // actions allows us to use async functions
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

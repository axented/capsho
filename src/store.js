import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      user: {
        loggedIn: false,
        data: null
      },
      loginError: null,
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    loginError(state) {
      return state.loginError
    }
  },
  mutations: {
    logIn(state, value) {
      state.user.loggedIn = value;
      state.loginError = null;
    },
    setUser(state, data) {
      state.user.data = data;
    },
    setLoginError(state, value) {
      state.loginError = value;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit('logIn', user !== null);
      if (user) {
        commit('setUser', {
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        });
      } else {
        commit('setUser', null);
      }
    }
  }
})
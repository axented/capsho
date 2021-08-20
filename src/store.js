import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      user: {
        loggedIn: false,
        data: null
      },
      loginError: null,
      verifyEmailError: null
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    loginError(state) {
      return state.loginError
    },
    verifyEmailError(state) {
      return state.verifyEmailError
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
    },
    setVerifyEmailError(state, value) {
      state.verifyEmailError = value;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit('logIn', user !== null);
      if (user) {
        commit('setUser', {
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified
        });
      } else {
        commit('setUser', null);
      }
    }
  }
})
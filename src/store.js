import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      user: {
        loggedIn: false,
        data: null
      }
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    logIn(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
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
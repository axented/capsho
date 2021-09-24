import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })
  ],
  state () {
    return {
      user: {
        loggedIn: false,
        createdProfile: false,
        toneOfVoice: null,
        type: null,
        template: null,
        businessName: null,
        subscription: null,
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
    createdProfile(state) {
      return state.user.createdProfile
    },
    toneOfVoice(state) {
      return state.user.toneOfVoice
    },
    businessName(state) {
      return state.user.businessName
    },
    type(state) {
      return state.user.type
    },
    userData(state) {
      return state.user.data
    },
    isLoggedIn(state) {
      return state.user.loggedIn
    },
    hasCreatedProfile(state) {
      return state.user.createdProfile
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
    logOut(state) {
      state.user.data = null
      state.user.loggedIn = false
      state.user.createdProfile = false
      state.user.toneOfVoice = null
      state.user.type = null
      state.user.template = null
      state.user.subscription = null
      state.user.businessName = null
    },
    setUser(state, data) {
      state.user.data = data;
    },
    setCreatedProfile(state, value) {
      state.user.createdProfile = value
    },
    changeUserName(state, newName) {
      state.user.data.displayName = newName
    },
    changeUserPhoto(state, newPhoto) {
      state.user.data.photoURL = newPhoto
    },
    setUpdateUser(state, obj) {
      state.user.loggedIn = true
      state.user.toneOfVoice = obj.toneOfVoice
      state.user.type = obj.type
      state.user.businessName = obj.businessName
      state.user.createdProfile = obj.created_profile
      state.user.template = obj.template
      state.user.subscription = obj.subscription
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
      commit('logIn', user !== null)
      if (user) {
        commit('setUser', {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          id: user.uid
        })
      } else {
        commit('setUser', null)
      }
    }
  }
})
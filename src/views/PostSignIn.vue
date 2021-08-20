<template>
  <div>
    <NavbarLoggedIn />
    <div class="bg-gradient-to-r from-backgroundGradient to-white py-10 px-10">
      <div v-if="$store.state.user.data.emailVerified">
        <span class="font-heading text-5xl text-primaryDark">Hello, {{ $store.state.user.data.email }} <br></span>
        <span class="font-heading text-5xl text-primaryDark">Email verified: {{ $store.state.user.data.emailVerified }} <br></span>
        <span class="font-heading text-5xl text-primaryDark">You are signed in!</span>
      </div>
      <div v-else>
        <VerifyEmail />
      </div>
      <div class="pt-10">
        <button @click="signOutUser">Log Out</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavbarLoggedIn from '../components/NavbarLoggedIn.vue'
import Footer from '../components/Footer.vue'
import VerifyEmail from '../components/VerifyEmail.vue'
import { logOut } from '../db'

export default {
  name: 'Post Sign In',
  components: {
    NavbarLoggedIn,
    Footer,
    VerifyEmail
  },

  data: () => ({
  }),

  methods: {
    signOutUser() {
      logOut();
    }
  },

  mounted () {
  }
}
</script>
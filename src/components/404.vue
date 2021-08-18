<template>
  <div>
    <div v-if="$store.state.user.loggedIn">
      <NavbarLoggedIn />
    </div>
    <div v-else>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
    <div class="flex flex-col justify-center py-10 px-10 bg-gradient-to-r from-backgroundGradient to-white h-screen">
      <span class="text-8xl font-heading text-primaryDark">404</span>
      <span class="text-4xl text-primaryDark font-heading">Page not found</span>
      <div v-if="$store.state.user.loggedIn" class="pt-10">
        <button
          @click="$router.push('/post-sign-in')"
          class="font-body font-bold bg-primaryDark text-white py-2 px-4 mx-2 rounded-full"
        >
          Return
        </button>
      </div>
      <div v-else class="pt-10">
        <button
          @click="$router.push('/')"
          class="font-body font-bold bg-primaryDark text-white py-2 px-4 mx-2 rounded-full"
        >
          Return
        </button>
      </div>
    </div>
    <div v-if="!$store.state.user.loggedIn">
      <Footer />
    </div>
  </div>
</template>

<script>
import NavbarDesktop from './NavbarDesktop.vue'
import NavbarMobile from './NavbarMobile.vue'
import NavbarLoggedIn from './NavbarLoggedIn.vue'
import Footer from './Footer.vue'

export default {
  name: 'Not Found',
  components: {
    NavbarDesktop,
    NavbarMobile,
    NavbarLoggedIn,
    Footer
  }
}
</script>
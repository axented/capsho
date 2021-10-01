<template>
  <div class="container">
    <nav class="flex flex-row items-center">
      <!-- Logo -->
      <div class="flex flex-shrink-0 justify-center">
        <button @click="$router.push('/')">
          <img class="mx-auto h-10" src="../assets/logo-purple.png" />
        </button>
      </div>
      <!-- Sign in / Sign up -->
      <div class="flex flex-1 flex-row flex-wrap items-center justify-end py-2">
        <UserIcon class="h-10" />
        <div class="static">
          <button
            @click="dropdown = !dropdown"
            class="font-body font-bold text-primaryDark hover:bg-offWhite rounded-full py-2 px-4 ml-3"
          >
            <img src="../assets/icons/user.png" width="20" height="20" />
          </button>
          <div v-if="dropdown" class="absolute flex flex-col bg-white border border-primaryLight shadow rounded-2xl mt-2">
            <div class="px-4 py-2 rounded-t-2xl bg-primaryLight">Options</div>
            <div class="w-full h-px bg-primaryDark"></div>
            <button
              @click="$router.push('/dashboard')"
              class="px-4 py-2 hover:bg-backgroundGradient"
            >
              Dashboard
            </button>
            <div class="w-full h-px bg-primaryLight"></div>
            <button
              @click="$router.push('/profile')"
              class="px-4 py-2 hover:bg-backgroundGradient"
            >
              Edit profile
            </button>
            <div class="w-full h-px bg-primaryLight"></div>
            <button
              @click="logOutFunction"
              class="px-4 py-2 rounded-b-2xl hover:bg-backgroundGradient hover:text-red-500"
            >
              Log Out
            </button>
          </div>
        </div>
        <!--
        <button
          class="font-body font-bold text-primaryDark hover:bg-offWhite rounded-full py-2 px-4 ml-1"
        >
          <div class="flex flex-row py-1"> 
            <span>Help</span>
            <img class="mx-2" src="../assets/icons/question.svg" width="20" height="20" />
          </div>
        </button> -->
      </div>
    </nav>
  </div>
</template>

<script>
import UserIcon from '../components/UserIcon.vue'
import { logOut } from '../db'

export default {
  name: 'Navbar Logged In',
  components: {
    UserIcon
  },
  data: () => ({
    dropdown: false,
  }),
  methods: {
    logOutFunction() {
      if (window.Intercom) {  
        window.Intercom('shutdown')
      }
      logOut()
    }
  }
}
</script>
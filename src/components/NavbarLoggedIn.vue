<template>
  <div class="container">
    <nav class="flex flex-row items-center">
      <!-- Logo -->
      <div class="flex flex-shrink-0 justify-center">
        <router-link to="/">
          <img class="mx-auto h-10" src="../assets/logo-purple.png" />
        </router-link>
      </div>
      <!-- Sign in / Sign up -->
      <div class="flex flex-1 flex-row flex-wrap items-center justify-end py-2">
        <img :src="usrPhoto" class="h-10 rounded-full" />
        <button class="font-body font-bold text-primaryDark hover:bg-offWhite rounded-full py-2 px-4 mx-2">
          <div class="flex flex-row py-1"> 
            <span>Help</span>
            <img class="mx-2" src="../assets/icons/question.svg" width="20" height="20" />
          </div>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import UserIcon from '../assets/icons/user.svg'

export default {
  name: 'Navbar Logged In',
  data: () => ({
    usrPhoto: null
  }),
  created: function () {
    const currPhoto = this.$store.state.user.data.photoUrl;
    if (currPhoto) {
      this.usrPhoto = currPhoto;
    } else {
      this.usrPhoto =  UserIcon;
    }
  }
}
</script>
<template>
  <div>
    <div class="flex flex-col">
      <span class="font-heading text-5xl text-primaryDark">Please verify your email before continuing</span>
      <span class="font-heading text-5xl text-primaryDark pt-8">{{ verifyEmailError }}</span>
    </div>
    <div class="flex flex-col pt-10">
      <div>
        <button
          v-if="!verifyEmailError"
          @click="verifyUserEmail"
          class="font-body font-bold bg-primaryDark text-white py-2 px-4 mx-2 rounded-full"
        >
          Verify email
        </button>
      </div>
      <div class="pt-4">
        <button @click="signOutUser">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { verifyEmail, logOut } from '../db'

export default {
  name: 'Verify Email',
  methods: {
    verifyUserEmail () {
      verifyEmail();
    },
    signOutUser() {
      logOut()
    }
  },
  computed: {
    ...mapGetters(['verifyEmailError'])
  }
}
</script>
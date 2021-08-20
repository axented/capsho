<template>
  <div>
    <span class="font-heading text-5xl text-primaryDark">Please verify your email before continuing <br></span>
    <span class="font-heading text-5xl text-primaryDark">{{ $store.state.verifyEmailError }}</span>
    <div class="pt-10">
      <button
        @click="verifyUserEmail"
        class="font-body font-bold bg-primaryDark text-white py-2 px-4 mx-2 rounded-full"
      >
        Verify email
      </button>
    </div>
  </div>
</template>

<script>
import { verifyEmail } from '../db'

export default {
  name: 'Verify Email',
  methods: {
    verifyUserEmail () {
      verifyEmail();
    }
  }
}
</script>
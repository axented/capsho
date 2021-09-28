<template>
  <div class="flex items-center min-h-screen py-8 bg-gradient-to-r from-backgroundGradient to-white">
    <div class="container">
      <div class="flex flex-col bg-white shadow rounded-2xl w-full lg:w-2/3 py-10 px-10 mx-auto">
        <div class="pb-10">
          <router-link to="/">
            <img src="../assets/logo-purple.png" class="mx-auto w-30 h-10" />
          </router-link>
        </div>
        <span class="text-left font-heading text-3xl py-4">Create your Capsho account</span>
        <div>
          <div class="py-2">
            <label class="block text-left text-formLabel font-formText pb-2" for="email">Email</label>
            <input v-model="email" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline" type="email" placeholder="user@example.com">
          </div>
          <div class="py-2">
            <label class="block text-left text-formLabel font-formText pb-2" for="password">Password</label>
            <input v-model="password" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline" type="password" minlength="6" required placeholder="*********">
          </div>
          <div class="pt-6">
            <button 
              :disabled="!email.length || password.length < 6"
              @click="registerUser"
              class="flex flex-row disabled:opacity-25 disabled:cursor-not-allowed justify-center w-full bg-primaryDark text-white font-bold py-4 px-4 rounded-full"
            >
              <span class="px-4">Create account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { registerEmail } from '../db'

export default {
  name: 'Register',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    registerUser() {
      registerEmail(this.email, this.password);
    }
  }
}
</script>
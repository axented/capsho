<template>
  <div class="flex items-center h-screen py-8 px-8 bg-gradient-to-r from-backgroundGradient to-white">
    <div class="flex flex-col bg-white shadow rounded-2xl w-full lg:w-1/2 py-10 px-10 mx-auto">
      <div class="pb-10">
        <router-link to="/">
          <img src="../assets/logo-purple.png" class="mx-auto w-30 h-10" />
        </router-link>
      </div>
      <span class="text-left font-heading text-3xl">Welcome back!</span>
      <div class="flex flex-row py-4"> 
        <span class="text-left font-formText pr-1">New here?</span>
        <router-link to="/register">
          <button class="text-primaryDark font-formText">
            Create a free account
          </button>
        </router-link>
      </div>
      <button
        class="rounded-full shadow my-4"
        @click="signInGoogle()"
      >
        <div class="flex flex-row justify-center py-4">
          <img src="../assets/socials/google.png" class="w-6 h-6" />
          <span class="font-number font-medium pl-4">Sign in with Google</span>
        </div>
      </button>
      <button
        class="rounded-full shadow my-4"
        @click="signInFacebook()"
      >
        <div class="flex flex-row justify-center py-4">
          <img src="../assets/socials/facebook.png" class="w-6 h-6" />
          <span class="font-number font-medium pl-4">Sign in with Facebook</span>
        </div>
      </button>
      <div class="flex flex-row justify-between py-4">
        <div class="border-t border-formLabel w-1/3 mt-3" />
        <span class="font-body">or</span>
        <div class="border-t border-formLabel w-1/3 mt-3" />
      </div>
      <div class="py-2">
        <label class="block text-left text-formLabel font-formText pb-2" for="email">Email</label>
        <input v-model="email" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline" type="email" placeholder="user@example.com">
      </div>
      <div class="py-2">
        <label class="block text-left text-formLabel font-formText pb-2" for="password">Password</label>
        <input v-model="password" class="apperance-none bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark border-0 focus:outline-none focus:shadow-outline" type="password" placeholder="*********">
      </div>
      <div class="flex justify-start py-2">
        <label class="block text-formLabel font-bold">
          <input type="checkbox" class="rounded text-primaryDark border-primaryLight">
          <span class="text-sm">
            Remember me
          </span>
        </label>
      </div>
      <div class="pt-6">
        <button 
          @click="logInEmail()"
          class="flex flex-row justify-center w-full bg-primaryDark text-white font-bold py-4 px-4 rounded-full"
        >
          <span class="px-4">Log in</span>
        </button>
      </div>
      <div class="pt-6">
        <button class="text-gray-400">
          Forgot password
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { signInWithFacebook, signInWithGoogle, signInWithEmail } from '../db'

export default {
  name: 'Sign In',

  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    logInEmail() {
      signInWithEmail(this.email, this.password);
    },
    signInGoogle() {
      signInWithGoogle();
    },
    signInFacebook() {
      signInWithFacebook();
    }
  }
}
</script>
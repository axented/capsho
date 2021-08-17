<template>
  <div>
    <nav class="sm:flex flex-row items-center hidden">
      <!-- Info buttons -->
      <div class="flex flex-1 flex-row flex-wrap justify-start">
        <div class="lg:pl-14">
          <button class="font-navbar hover:bg-offWhite rounded-full py-2 px-4">
            <router-link to="/about">About</router-link>
          </button>
          <button class="font-navbar hover:bg-offWhite rounded-full py-2 px-4">
            <router-link to="/contact">Contact</router-link>
          </button>
          <button class="font-navbar hover:bg-offWhite rounded-full py-2 px-4">
            <router-link to="/pricing">Pricing</router-link>
          </button>
        </div>
      </div>
      <!-- Logo -->
      <div class="flex flex-shrink-0 justify-center">
        <router-link to="/">
          <img class="px-10 mx-auto h-10" src="../assets/logo-purple.png" />
        </router-link>
      </div>
      <!-- Sign in / Sign up -->
      <div class="flex flex-1 flex-row flex-wrap justify-end py-2">
        <div class="lg:pr-12">
          <button class="font-body font-bold bg-transparent text-primaryDark py-2 px-4 mx-2 border-2 border-primaryDark rounded-full">
            <router-link to="/sign-in">Sign in</router-link>
          </button>
          <button class="font-body font-bold bg-primaryDark text-white py-2 px-4 mx-2 border-2 border-primaryDark rounded-full">Sign up</button>
          <button class="font-body font-bold text-primaryDark hover:bg-offWhite rounded-full py-2 px-4 mx-2">
            <div class="flex flex-row py-1"> 
              <span>Help</span>
              <img class="mx-2" src="../assets/icons/question.svg" width="20" height="20" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar Desktop'
}
</script>
<template>
  <div class="container">
    <nav class="sm:flex flex-row items-center hidden">
      <!-- Info buttons -->
      <div class="flex flex-1 flex-row flex-wrap justify-start">
        <div>
          <!-- 
          <button
            @click="$router.push('/about')"
            class="font-navbar hover:bg-offWhite rounded-full py-2 px-4"
          >
            About
          </button> -->
          <button
            @click="$router.push('/contact')"
            class="font-navbar hover:bg-offWhite rounded-full py-2 px-4"
          >
            Contact
          </button>
          <button
            @click="$router.push('/pricing')"
            class="font-navbar hover:bg-offWhite rounded-full py-2 px-4"
          >
            Pricing
          </button>
        </div>
      </div>
      <!-- Logo -->
      <div class="flex flex-shrink-0 justify-center">
        <button @click="$router.push('/')">
          <img class="px-10 mx-auto h-10" src="../assets/logo-purple.png" />
        </button>
      </div>
      <!-- Sign in / Sign up -->
      <div v-if="!$store.getters.isLoggedIn" class="flex flex-1 flex-row flex-wrap items-center justify-end py-2">
        <div>
          <button
            @click="$router.push('/sign-in')"
            class="font-body font-bold bg-transparent text-primaryDark py-2 px-4 mr-1 border-2 border-primaryDark rounded-full"
          >
            Sign in
          </button>  
          <button
            @click="$router.push('/register')"
            class="font-body font-bold bg-primaryDark text-white py-2 px-4 mx-2 border-2 border-primaryDark rounded-full"
          >
            Sign up
          </button>
          <!--
          <button class="font-body font-bold text-primaryDark hover:bg-offWhite rounded-full py-2 px-4 ml-1">
            <div class="flex flex-row py-1">
              <span>Help</span>
              <img class="mx-2" src="../assets/icons/question.svg" width="20" height="20" />
            </div>
          </button> -->
        </div>
      </div>
      <div v-else class="flex flex-1 flex-row flex-wrap items-center justify-end py-2">
        <button
          @click="$router.push('/dashboard')"
          class="font-body font-bold bg-primaryDark text-white py-2 px-4 mx-2 border-2 border-primaryDark rounded-full"
        >
          Dashboard
        </button>
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
export default {
  name: 'Navbar Desktop'
}
</script>
<template>
  <div>
    <!-- Navbar -->
    <nav class="flex flex-row items-center">
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
          <img class="px-10 mx-auto" height="60" width="180" src="./assets/logo-purple.png" />
        </router-link>
      </div>
      <!-- Sign in / Sign up -->
      <div class="flex flex-1 flex-row flex-wrap justify-end py-2">
        <div class="lg:pr-12">
          <button class="font-body font-bold bg-transparent text-primaryDark py-2 px-4 mx-2 border-2 border-primaryDark rounded-full">Sign in</button>
          <button class="font-body font-bold bg-primaryDark text-white py-2 px-4 mx-2 border-2 border-primaryDark rounded-full">Sign up</button>
          <button class="font-body font-bold text-primaryDark hover:bg-offWhite rounded-full py-2 px-4 mx-2">
            <div class="flex flex-row py-1"> 
              <span>Help</span>
              <img class="mx-2" src="./assets/icons/question.svg" width="20" height="20" />
            </div>
          </button>
        </div>
      </div>
    </nav>
    <!-- Content -->
    <router-view></router-view>
    <!-- Footer -->
    <footer class="footer relative pt-1 pb-8">
      <div class="container mx-auto px-8">
        <div class="flex flex-col justify-between">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full flex flex-col md:flex-row">
              <div class="flex flex-col align-start">
                <div class="flex flex-row items-center pr-8">
                  <img src="./assets/logo-purple.png" width="90" height="30" />
                  <span class="font-bodyLexend px-2"> by the </span>  
                </div>
                <img class="-ml-3 pt-1" src="./assets/growthboss-logo.png" width="180" height="36" />
                <span class="py-8 font-body text-left">Copyright © 2021 Capsho by the Growthboss.</span>
                <div class="flex flex-row items-start py-4">
                  <button class="pr-2">
                    <img src="./assets/socials/instagram.png" width="40" height="40" />
                  </button>
                  <button class="px-2">
                    <img src="./assets/socials/dribbble.png" width="40" height="40" />
                  </button>
                  <button class="px-2">
                    <img src="./assets/socials/twitter.png" width="40" height="40" />
                  </button>
                  <button class="px-2">
                    <img src="./assets/socials/youtube.png" width="40" height="40" />
                  </button>
                </div>
              </div>
              <div class="font-body sm:flex sm:flex-row">
                <div class="flex flex-col px-6 py-4 md:py-0">
                  <span class="font-bold mb-2 text-left">Company</span>
                  <button v-for="(item, i) in footerCompany" :key="i" class="py-2 text-left">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                  </button>
                </div>
                <div class="flex flex-col px-6 py-4 md:py-0">
                  <span class="font-bold mb-2 text-left">Support</span>
                  <button v-for="(item, i) in footerSupport" :key="i" class="py-2 text-left">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                  </button>
                </div>
                <div class="flex flex-col px-6 py-4 md:py-0">
                  <span class="font-bold mb-2 text-left">Newsletter</span>
                  <div class="flex flex-wrap">
                    <input class="flex-none block rounded bg-gray-100 focus:outline-none focus:ring focus:border-gray-300 pl-4 py-2" type="email" placeholder="Your email address" />
                    <button class="flex-none -ml-9 px-2 hover:bg-gray-400">
                      <img src="./assets/icons/send.svg" width="20" height="20" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    footerCompany: [
      { name: 'About Us', link: '/about' },
      { name: 'Contact Us', link: '/contact' },
      { name: 'Pricing', link: '/pricing' },
      { name: 'Blog', link: '/' }
    ],
    footerSupport: [
      { name: 'Help center', link: '/' },
      { name: 'Terms of service', link: '/terms-of-service' },
      { name: 'Privacy policy', link: '/privacy-policy' },
      { name: 'Ask the community', link: '/' }
    ]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

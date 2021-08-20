<template>
  <div>
    <footer class="footer relative pt-1 pb-8">
      <div class="container">
        <div class="flex flex-col justify-between">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full flex flex-col md:flex-row">
              <div class="flex flex-col align-start">
                <div class="flex flex-col">
                  <div class="flex flex-row items-center justify-center sm:justify-start sm:pr-8">
                    <img src="../assets/logo-purple.png" width="90" height="30" />
                    <span class="font-bodyLexend px-2"> by the </span>  
                  </div> 
                  <div class="flex justify-center sm:justify-start">  
                    <img class="sm:-ml-2 pt-1" src="../assets/growthboss-logo.png" width="180" height="36" />
                  </div>
                </div>
                <span class="py-8 pr-4 font-body text-center sm:text-left">Copyright © 2021 Capsho by the Growthboss.</span>
                <div class="flex flex-row justify-center sm:justify-start items-start py-4">
                  <button class="pr-2">
                    <img src="../assets/socials/instagram.png" width="40" height="40" />
                  </button>
                  <button class="px-2">
                    <img src="../assets/socials/dribbble.png" width="40" height="40" />
                  </button>
                  <button class="px-2">
                    <img src="../assets/socials/twitter.png" width="40" height="40" />
                  </button>
                  <button class="pl-2">
                    <img src="../assets/socials/youtube.png" width="40" height="40" />
                  </button>
                </div>
              </div>
              <div class="font-body sm:flex sm:flex-row">
                <div class="flex flex-col pr-3 py-4 md:py-0">
                  <span class="font-bold text-center sm:text-left mb-2">Company</span>
                  <button v-for="(item, i) in footerCompany" :key="i" class="py-2 text-center sm:text-left">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                  </button>
                </div>
                <div class="flex flex-col px-6 py-4 md:py-0">
                  <span class="font-bold mb-2 text-center sm:text-left">Support</span>
                  <button v-for="(item, i) in footerSupport" :key="i" class="py-2 text-center sm:text-left">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                  </button>
                </div>
                <div class="flex flex-col pl-3 py-4 md:py-0">
                  <span class="font-bold mb-2 text-center sm:text-left">Newsletter</span>
                  <div class="flex flex-wrap">
                    <input class="flex-none block rounded w-full bg-gray-100 border-0 focus:outline-none focus:ring focus:border-gray-300 pl-4 py-2" type="email" placeholder="Your email address" />
                    <button class="flex-none -ml-9 px-2 hover:bg-gray-400">
                      <img src="../assets/icons/send.svg" width="20" height="20" />
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
  name: 'Footer',
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
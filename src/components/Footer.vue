<template>
  <div>
    <footer class="footer relative pt-1 pb-8">
      <div class="container">
        <div class="flex flex-col justify-between">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full flex flex-col md:flex-row">
              <div class="flex flex-col align-start md:mr-5">
                <div class="flex justify-center md:justify-start">
                  <img src="../assets/logo-purple.png" class="w-1/4" />
                </div>
                <span class="py-8 pr-4 font-body text-center sm:text-left">Copyright © 2021 Capsho by the Growthboss.</span>
                <div class="flex flex-row justify-center sm:justify-start items-start pb-4">
                  <a href="https://www.instagram.com/capshohq/" target="_blank" class="mr-2">
                    <button class="bg-gray-200 py-3 px-3 rounded-full">
                      <img src="../assets/socials/instagram-footer.svg" />
                    </button>
                  </a>
                  <a href="https://www.facebook.com/capshohq" target="_blank" class="mx-2">
                    <button class="bg-gray-200 py-3 px-3 rounded-full">
                      <img src="../assets/socials/facebook-footer.svg" />
                    </button>
                  </a>
                  <a href="https://www.pinterest.com/capsho" target="_blank" class="ml-2">
                    <button class="bg-gray-200 py-3 px-3 rounded-full">
                      <img src="../assets/socials/pinterest-footer.svg" />
                    </button>
                  </a>
                </div>
              </div>
              <div class="font-body sm:flex sm:flex-row">
                <div class="flex flex-col sm:pr-3 py-4 md:py-0">
                  <span class="font-bold text-center sm:text-left mb-2">Company</span>
                  <button v-for="(item, i) in footerCompany" :key="i" class="py-2 text-center sm:text-left">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                  </button>
                </div>
                <div class="flex flex-col sm:px-6 py-4 md:py-0">
                  <span class="font-bold mb-2 text-center sm:text-left">Support</span>
                  <button v-for="(item, i) in footerSupport" :key="i" class="py-2 text-center sm:text-left">
                    <router-link :to="item.link">{{ item.name }}</router-link>
                  </button>
                </div>
                <div class="flex flex-col sm:pl-3 py-4 md:py-0">
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
      //{ name: 'About Us', link: '/' },
      { name: 'Contact Us', link: '/contact' },
      { name: 'Pricing', link: '/pricing' },
      //{ name: 'Blog', link: '/' }
    ],
    footerSupport: [
      //{ name: 'Help center', link: '/' },
      { name: 'Terms and conditions', link: '/terms-and-conditions' },
      { name: 'Privacy policy', link: '/privacy-policy' },
      //{ name: 'Ask the community', link: '/' }
    ]
  })
}
</script>
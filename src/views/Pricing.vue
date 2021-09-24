<template>
  <div>
    <NavbarDesktop />
    <NavbarMobile />
    <div class="flex bg-primaryLight flex flex-col py-10">
      <span class="font-heading text-5xl pb-4">Capsho Pricing</span>
      <span class="font-number">Get a higher quality & lower maintenance (most also say better looking) copywriter in your pocket, for a fraction of the cost </span>
      <div class="flex justify-center pt-8">  
        <Popup buttonText="Watch demo" video="https://player.vimeo.com/video/611198993?h=58b059483b" />
      </div>
    </div>
    <PricingRates title="Choose your plan" linkDiamond="sign-in" linkPlatinum="sign-in" class="bg-gradient-to-r from-white to-backgroundGradient" />
    <!-- Core features -->
    <div class="container">
      <div class="flex flex-col py-10">
        <span class="font-heading text-4xl pb-6">Capsho’s best features</span>
        <span class="font-number">We don’t like to brag but... you’re here checking us out so we’re going to shoot our shot!</span>
        <div class="flex flex-row flex-wrap pt-6 justify-between">
          <div
            v-for="(item, i) in coreFeatures"
            :key="i"
            class="flex flex-col w-full sm:w-1/2 md:w-1/5 py-6"
          >
            <div class="flex-none bg-secondaryLight rounded-2xl py-6 px-6 mx-auto">
              <img :src="require('../assets/icons/' + item.icon)" class="w-20 h-20" />
            </div>
            <span class="text-left font-body font-bold text-lg py-4">{{ item.title }}</span>
            <p class="text-left font-body">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 bg-offWhite px-4">
      <div class="container">
        <div class="text-center py-8 mx-auto max-w-2xl">
          <span class="text-5xl font-heading leading-normal">Want to learn how you can use Capsho to 10X yout sales?</span>
        </div>
        <div class="pb-8">
          <a href="https://thegrowthbossunlocked.com/register50606922" target="_blank">
            <button class="font-body font-bold bg-primaryDark text-white py-4 px-4 rounded-full">
              Sign up for our Free Webclass!
            </button>
          </a>
          <!--
          <button
            @click="$router.push('/sign-in')"
            class="font-body font-bold bg-primaryDark text-white py-4 px-4 rounded-full"
          >
            Sign up for our Free Webclass!
          </button> -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavbarDesktop from '../components/NavbarDesktop.vue'
import NavbarMobile from '../components/NavbarMobile.vue'
import Footer from '../components/Footer.vue'
import PricingRates from '../components/PricingRates.vue'
import Popup from '../components/Popup.vue'

export default {
  name: 'Pricing',
  components: {
    PricingRates,
    NavbarMobile,
    NavbarDesktop,
    Footer,
    Popup
  },
  data: () => ({
    isOpen: false,
    coreFeatures: [
      {
        title: 'Live Chat Support',
        text: 'We’re digitally, if not emotionally, available. Message us with your questions or for inspo to get you started (yes we’re up)',
        icon: 'message.svg'
      },
      {
        title: 'Storytelling supercharged by logic',
        text: 'Our storytelling tools extract your stories out of your head and multiply them into a bank of unique captions and emails. (Bonus: we won’t mansplain AI to you)',
        icon: 'tools.svg'
      },
      {
        title: 'Visualization of your captions and emails',
        text: 'We know words can’t captivate on their own. So we’ll also recommend the visual layout for your captions & emails (i.e. we don’t just make your dinner we’ll suggest wine pairings too)',
        icon: 'lightbulb.svg'
      },
      {
        title: 'Private Facebook community',
        text: 'Get access to helpful tips & tricks and collaborate & network with other business owners recovering from blank-page syndrome using Capsho',
        icon: 'people.svg'
      }
    ]
  })
}
</script>
<template>
  <div>
    <NavbarDesktop />
    <NavbarMobile />
    <PricingRates />
    <!-- Core features -->
    <div class="flex flex-col py-10 px-8">
      <span class="font-heading text-4xl">Our core features</span>
      <div class="flex flex-row flex-wrap pt-6 justify-center">
        <div
          v-for="(item, i) in coreFeatures"
          :key="i"
          class="flex flex-col w-full sm:w-1/2 md:w-1/5 py-6 px-4"
        >
          <div class="flex-none bg-secondaryLight rounded-2xl py-6 px-6 mx-auto">
            <img :src="require('../assets/icons/' + item.icon)" class="w-20 h-20" />
          </div>
          <span class="text-left font-body font-bold text-lg py-4">{{ item.title }}</span>
          <p class="text-left font-body">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <SignUpButton />
    <Footer />
  </div>
</template>

<script>
import NavbarDesktop from '../components/NavbarDesktop.vue'
import NavbarMobile from '../components/NavbarMobile.vue'
import Footer from '../components/Footer.vue'
import PricingRates from '../components/PricingRates.vue'
import SignUpButton from '../components/SignUpButton.vue'

export default {
  name: 'Pricing',
  components: {
    PricingRates,
    SignUpButton,
    NavbarMobile,
    NavbarDesktop,
    Footer
  },
  data: () => ({
    coreFeatures: [
      {
        title: 'Chat integrated',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam leo tempus commodo euismod.',
        icon: 'message.svg'
      },
      {
        title: 'Access to all our tools',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam leo tempus commodo euismod.',
        icon: 'tools.svg'
      },
      {
        title: 'Unlimited runs',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam leo tempus commodo euismod.',
        icon: 'lightbulb.svg'
      },
      {
        title: 'Premium community',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam leo tempus commodo euismod.',
        icon: 'people.svg'
      }
    ]
  })
}
</script>
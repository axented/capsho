<template>
  <div class="bg-gradient-to-r from-backgroundGradient to-white text-left min-h-screen">
    <NavbarLoggedIn />
    <div v-if="!paid" class="container">
      <div class="flex flex-col justify-center">
        <span class="font-heading text-2xl py-6 text-center">We’ve verified your email and now it’s time to pick your Capsho Plan. Remember you get a free 14-day trial for both plans</span>
        <div class="flex flex-col lg:flex-row items-center">
          <img src="../assets/paywall.png" class="w-1/2 lg:w-1/3 lg:h-1/3" />
          <PricingRates btnTextPlatinum="Get started" btnTextDiamond="Get started" linkPlatinum="http://capshoplans.com/" linkDiamond="http://capshoplans.com/" class="lg:w-2/3" />
        </div>
      </div>
    </div>
    <div v-else class="container">
      <div class="flex flex-row">
        <div class="flex flex-col w-1/5">
          <span class="font-heading text-3xl py-8">Choose your storytelling tool</span>
          <div
            v-for="(item, i) in menu"
            :key="i"
            class="flex flex-row relative"
          > 
            <button
              @mouseenter="item.isEnabled = true"
              @mouseleave="item.isEnabled = false"
              @click="$router.push(`/questions${item.route}`)"
              class="font-body hover:font-bold hover:text-primaryDark border-l-4 border-transparent focus:border-primaryDark focus:font-bold focus:text-primaryDark py-4 px-4 text-left"
            >
              {{ item.name }}
            </button>
            <span v-if="item.isEnabled" class="font-body rounded-2xl shadow-lg p-4 bg-primaryLight absolute bottom-14 z-50">{{ item.description }}</span>
          </div>
        </div>
        <div class="flex flex-col w-4/5 justify-start items-center">
          <div class="py-8">
            <button
              v-for="(option, i) in options"
              :key="i"
              @click="selectOption(option)"
              :class="`bg-${option.color} text-${option.text} py-2 mx-2 w-40 rounded-full font-bold`"
            >
              {{ option.name }}
            </button>
          </div>
          <iPhone v-if="optionType === 'Caption'" />
          <Email v-if="optionType === 'Email'" />
        </div>
      </div>
      <div v-if="onboarding1" class="overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none flex">
        <div class="relative inset-x-1/4 inset-y-1/4 ml-8 w-80">
          <div class="flex flex-col bg-backgroundGradient relative w-full rounded-2xl px-4 py-4 font-body">
            <span v-if="tooltipStep === 0" class="pb-4"><span class="font-bold">Now for the fun part! </span>Here are all the Storytelling Tools you have access to with Capsho!</span>
            <template v-if="tooltipStep > 0">
              <span class="text-2xl font-bold">{{ menu[tooltipStep-1].name }}</span>
              <span class="py-8">{{ menu[tooltipStep-1].description }}</span>
            </template>
            <div class="flex flex-row justify-between">
              <button
                @click="finishOnboarding()"
                class="text-gray-400 font-bold"
              >
                Skip
              </button>
              <button
                v-if="tooltipStep > 0"
                @click="tooltipStep--"
                class="text-gray-600 font-bold"
              >
                Previous
              </button>
              <button
                v-if="tooltipStep < menu.length"
                @click="tooltipStep++"
                class="text-primaryDark font-bold"
              >
                Next
              </button>
              <button
                v-else
                @click="nextOnboarding()"
                class="text-primaryDark font-bold"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="onboarding2" class="overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none flex">
        <div class="relative inset-x-10 inset-y-1/3 ml-8 w-80">
          <div class="flex flex-col bg-backgroundGradient relative w-full rounded-2xl px-4 py-4 font-body">
            <span v-if="tooltipStep === 0" class="pb-8">Then start populating your captions by selecting a storytelling tool</span>
            <span v-if="tooltipStep === 1" class="pb-8">Choose between captions and emails</span>
            <span v-if="tooltipStep === 2" class="pb-8">We recommend you begin with the <span class="font-bold">About Me</span> section, but feel free to explore all of our great tools!</span>
            <div class="flex flex-row justify-between">
              <button
                v-if="tooltipStep === 0"
                @click="finishOnboarding()"
                class="text-gray-400 font-bold"
              >
                Skip
              </button>
              <button
                v-if="tooltipStep === 1 || tooltipStep === 2"
                @click="tooltipStep--"
                class="text-gray-600 font-bold"
              >
                Previous
              </button>
              <button
                v-if="tooltipStep === 0 || tooltipStep === 1"
                @click="tooltipStep++"
                class="text-primaryDark font-bold"
              >
                Next
              </button>
              <button
                v-if="tooltipStep === 2"
                @click="finishOnboarding()"
                class="text-primaryDark font-bold"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="onboarding1" class="opacity-75 fixed inset-y-0 right-0 bg-black w-3/4"></div>
      <div v-if="onboarding2" class="opacity-75 fixed inset-y-0 left-0 bg-black w-1/4"></div>
    </div>
  </div>
</template>

<script>
import NavbarLoggedIn from '../components/NavbarLoggedIn.vue'
import iPhone from '../components/iPhone.vue'
import Email from '../components/Email.vue'
import PricingRates from '../components/PricingRates.vue'
import { db } from '../db'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    NavbarLoggedIn,
    iPhone,
    Email,
    PricingRates
  },
  data: () => ({
    paid: false,
    showModal: false,
    onboarding1: false,
    onboarding2: false,
    options: [
      { name: 'Caption', color: 'secondaryDark', text: 'white', isEnabled: true },
      { name: 'Email', color: 'transparent', text: 'gray-400', isEnabled: false }
    ],
    optionType: 'Caption',
    tooltipStep: 0,
    menu: [
      { name: 'About me', route: '/about-me', description: 'Introduce yourself to your audience in a fun, unique and personal way', isEnabled: false},
      { name: 'Promised Land', route: '/promised-land', description: 'Inspire your audience with how you reached an aspiration they have', isEnabled: false },
      { name: 'Striking memory', route: '/a-striking-memory', description: 'Captivate your audience on a topic they care about with a story from your past ', isEnabled: false },
      { name: 'Moment in time', route: '/every-day-moment-in-time', description: 'Engage your audience with an emotion they want to feel', isEnabled: false },
      { name: 'How-to', route: '/how-to', description: 'Educate your audience on something they want to know how to do ', isEnabled: false },
      { name: 'Product spotlight', route: '/product-spotlight', description: "Excite your audience about a hero product or collection that's available to buy", isEnabled: false },
      //{ name: 'Running a promotion', route: '/running-a-promotion', description: "Compel your customers to buy from your newest promotion", isEnabled: false },
      //{ name: 'Launching a product', route: '/launching-a-new-product', description: "Prime your customers to buy a new product or collection you're launching", isEnabled: false },
      //{ name: 'Viralocity Contest', route: '/viralocity-contest', description: "Excite your audience about your Viralocity Contest", isEnabled: false },
      //{ name: 'Holidays', route: '/holidays', description: "Recognize and celebrate the social media holidays your customers care about", isEnabled: false },
    ]
  }),
  methods: {
    nextOnboarding() {
      this.tooltipStep = 0
      this.onboarding1 = false
      this.onboarding2 = true
    },
    finishOnboarding() {
      let id = this.$store.getters.userData.id

      this.tooltipStep = 0
      this.onboarding1 = false
      this.onboarding2 = false

      db.collection('users')
        .doc(id)
        .update({
          first_login: true
        })
    },
    toggleModal() {
      this.showModal ? this.showModal = false : this.showModal = true
    },
    selectOption(option) {
      if (option.isEnabled) {
        return
      } else {
        this.options.forEach((otherOption) => {
          if (option.name === otherOption.name) {
            this.optionType = otherOption.name
            otherOption.isEnabled = true
            otherOption.text = 'white'
            otherOption.color = 'secondaryDark'
          } else {
            otherOption.isEnabled = false
            otherOption.text = 'gray-400'
            otherOption.color = 'transparent'
          }
        })
      }
    },
    hasDoneOnboarding() {
      db.collection('users')
      .doc(this.userData.id)
      .get()
      .then((doc) => {
        this.onboarding1 = !doc.data().first_login 
      })
    },
    intercom(id, name, email) {
       window.intercomSettings = {
        app_id: process.env.VUE_APP_INTERCOM_ID,
        name: name,
        email: email,
        user_id: id,
      };
      (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + process.env.VUE_APP_INTERCOM_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
    }
  },
  computed: {
    ...mapGetters(['userData', 'user']),
  },
  watch: {
    userData(newVal) {
      if (newVal) {
        this.hasDoneOnboarding(newVal.id)
        if (this.user.subscription === 'platinum' || this.user.subscription === 'diamond') {
          this.paid = true
          this.intercom(newVal.id, newVal.name, newVal.email)
        }
      }
    }
  },
  mounted() {
    if (this.userData) {
      this.hasDoneOnboarding(this.userData.id)
    }
    if (this.user) {
      if (this.user.subscription === 'platinum' || this.user.subscription === 'diamond') {
        this.paid = true
        if (this.userData) {  
          this.intercom(this.userData.id, this.userData.name, this.userData.email)
        }
      }
    }
  }
}
</script> 
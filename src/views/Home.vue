<template>
  <div>
    <NavbarDesktop />
    <NavbarMobile />
    <!-- Header -->
    <div class="pt-8 bg-gradient-to-r from-backgroundGradient to-white">
      <div class="container">
        <div class="text-center py-6 mx-auto">
          <span class="font-heading sm:leading-normal text-5xl">Beautiful captions <br> to conquer <br> your user's heart</span>
        </div>
        <div class="pb-4">  
          <button
            @click="$router.push('/sign-in')"
            class="font-body font-bold bg-secondaryDark text-white py-2 px-4 mx-2 rounded-full"
          >
            Get Started
          </button>
        </div>
      </div>
      <div class="flex pt-4 w-full">
        <img src="../assets/iphone.png"/>
      </div>
    </div>
    <!-- How it Works -->
    <div class="py-4">
      <div class="text-center py-6 mx-auto">
        <h1 class="font-heading text-5xl">How it works</h1>
      </div>
      <div class="container">
        <div class="flex flex-col md:flex-row py-8 justify-between">
          <div class="flex flex-col w-full md:w-1/6">
            <span class="text-8xl font-number font-extrabold -mb-8 text-gray-100">1</span>
            <span class="text-xl font-number font-bold">Define a tone of voice</span>
            <span class="font-number w-40 mx-auto">Turn your idea from concept to MVP</span>
          </div>
          <div class="flex w-full py-8 md:w-1/6">
            <img class="mx-auto" src="../assets/arrow.svg" />
          </div>
          <div class="flex flex-col w-full md:w-1/6">
            <span class="text-8xl font-number font-extrabold -mb-8 text-opacity-10 text-primaryDark">2</span>
            <span class="text-xl font-number font-bold text-primaryDark">Choose content themes</span>
            <span class="font-number w-40 mx-auto">Turn your idea from concept to MVP</span>
          </div>
          <div class="flex w-full py-8 md:w-1/6">
            <img class="mx-auto" src="../assets/arrow.svg" />
          </div>
          <div class="flex flex-col w-full md:w-1/6">
            <span class="text-8xl font-number font-extrabold -mb-8 text-gray-100">3</span>
            <span class="text-xl font-number font-bold">Select Storytelling</span>
            <span class="font-number w-40 mx-auto">Turn your idea from concept to MVP</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Sign Up Webclass -->
    <SignUpButton />
    <!-- Discover -->
    <div class="py-4 bg-gradient-to-r from-yellowBackgroundStart to-yellowBackgroundEnd">
      <div class="text-center max-w-2xl py-6 mx-auto">
        <h1 class="text-5xl font-heading">Discover what you can create with Capsho</h1>
      </div>
      <div class="container">
        <div class="flex flex-col sm:flex-row justify-between">
          <!-- Spotlights -->
          <div class="flex rounded-lg w-full sm:w-1/4 lg:w-1/3 bg-white py-6 px-6 sm:mr-4 my-4">
            <div class="flex flex-col">
              <img src="../assets/icons/stars.svg" width="20" height="20" />
              <span class="text-left font-formText font-bold pt-10">Product spotlights</span>
              <span class="text-left pt-4">Add multiple links in Instagram instead of just one.</span>
            </div>
          </div>
          <!-- Campaign -->
          <div class="flex rounded-lg w-full sm:w-1/4 lg:w-1/3 bg-white py-6 px-6 sm:mx-2 my-4">
            <div class="flex flex-col">
              <img src="../assets/icons/bullets.svg" width="20" height="20" />
              <span class="text-left font-formText font-bold pt-10">Campaign & Promos</span>
              <span class="text-left pt-4">Allow your clients to connect with you with one click.</span>
            </div>
          </div>
          <!-- Storytelling -->
          <div class="flex rounded-lg w-full sm:w-1/4 lg:w-1/3 bg-white py-6 px-6 sm:ml-4 my-4">
            <div class="flex flex-col">
              <img src="../assets/icons/bullhorn.svg" width="20" height="20" />
              <span class="text-left font-formText font-bold pt-10">Storytelling tools</span>
              <span class="text-left pt-4">Capture leads and grow your business with them.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pricing -->
    <PricingRates />
    <!-- Ready to write -->
    <div class="py-10 bg-primaryLight">
      <div class="container">
        <div class="flex flex-col lg:flex-row lg:justify-between bg-white w-full lg:h-72 xl:h-64 rounded-xl mx-auto">
          <!-- Text + buttons -->
          <div class="flex flex-col lg:text-left lg:w-1/3 py-10 px-5 lg:pl-10">
            <span class="font-bodyLexend text-4xl">Ready to write?</span>
            <span class="font-body py-6">Save time, stop get inspired</span>
            <div>
              <button
                @click="$router.push('/sign-in')" 
                class="rounded-full bg-primaryDark font-body font-bold text-white py-4 px-4 -mt-3"
              >
                Start your free trial
              </button>
            </div>
          </div>
          <!-- Arrow -->
          <div class="hidden lg:block w-1/3">
            <img src="../assets/curvy-arrow.svg" class="mx-auto" />
          </div>
          <!-- Photo -->
          <div class="hidden lg:flex justify-end w-1/3">
            <img src="../assets/woman.png" class="rounded-xl h-auto" />
          </div>
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
import SignUpButton from '../components/SignUpButton.vue'

export default {
  name: 'Home',
  components: {
    PricingRates,
    SignUpButton,
    NavbarDesktop,
    NavbarMobile,
    Footer
  }
}
</script>

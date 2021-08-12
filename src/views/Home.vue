<template>
  <div>
    <!-- Header -->
    <div class="pt-8 bg-gradient-to-r from-backgroundGradient to-white">
      <div class="text-center max-w-md py-6 mx-auto">
        <h1 class="font-heading text-5xl">Beautiful captions to conquer your user's heart</h1>
      </div>
      <div class="pb-4">
        <button class="font-body font-bold bg-secondaryDark text-white py-2 px-4 mx-2 rounded-full">Get Started</button>
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
      <div class="flex flex-col sm:flex-row py-8 px-10 justify-center">
        <div class="flex flex-col w-full sm:w-1/5">
          <span class="text-8xl font-number font-extrabold -mb-8 text-gray-100">1</span>
          <span class="text-xl font-number font-bold">Define a tone of voice</span>
          <span class="font-number w-40 mx-auto">Turn your idea from concept to MVP</span>
        </div>
        <div class="flex w-full py-8 sm:w-1/6">
          <img class="mx-auto" src="../assets/arrow.svg" />
        </div>
        <div class="flex flex-col w-full sm:w-1/5">
          <span class="text-8xl font-number font-extrabold -mb-8 text-opacity-10 text-primaryDark">2</span>
          <span class="text-xl font-number font-bold text-primaryDark">Choose content themes</span>
          <span class="font-number w-40 mx-auto">Turn your idea from concept to MVP</span>
        </div>
        <div class="flex w-full py-8 sm:w-1/6">
          <img class="mx-auto" src="../assets/arrow.svg" />
        </div>
        <div class="flex flex-col w-full sm:w-1/5">
          <span class="text-8xl font-number font-extrabold -mb-8 text-gray-100">3</span>
          <span class="text-xl font-number font-bold">Select Storytelling</span>
          <span class="font-number w-40 mx-auto">Turn your idea from concept to MVP</span>
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
      <div class="flex flex-col sm:flex-row px-6 justify-center">
        <!-- Spotlights -->
        <div class="flex rounded-lg w-full sm:w-1/4 lg:w-1/5 bg-white py-6 px-6 sm:mx-3 my-3">
          <div class="flex flex-col">
            <img src="../assets/icons/stars.svg" width="20" height="20" />
            <span class="text-left font-formText font-bold pt-10">Product spotlights</span>
            <span class="text-left pt-4">Add multiple links in Instagram instead of just one.</span>
          </div>
        </div>
        <!-- Campaign -->
        <div class="flex rounded-lg w-full sm:w-1/4 lg:w-1/5 bg-white py-6 px-6 sm:mx-3 my-3">
          <div class="flex flex-col">
            <img src="../assets/icons/bullets.svg" width="20" height="20" />
            <span class="text-left font-formText font-bold pt-10">Campaign & Promos</span>
            <span class="text-left pt-4">Allow your clients to connect with you with one click.</span>
          </div>
        </div>
        <!-- Storytelling -->
        <div class="flex rounded-lg w-full sm:w-1/4 lg:w-1/5 bg-white py-6 px-6 sm:mx-3 my-3">
          <div class="flex flex-col">
            <img src="../assets/icons/bullhorn.svg" width="20" height="20" />
            <span class="text-left font-formText font-bold pt-10">Storytelling tools</span>
            <span class="text-left pt-4">Capture leads and grow your business with them.</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Pricing -->
    <PricingRates />
    <!-- Ready to write -->
    <div class="py-10 px-10 bg-primaryLight">
      <div class="relative flex flex-col md:flex-row rounded-xl bg-white lg:w-4/5 mx-auto">
        <div class="flex flex-col w-full text-left pb-8 px-10">
          <span class="font-bodyLexend py-8 text-4xl">Ready to write?</span>
          <span class="font-body pb-4 w-40 lg:w-full">Save time, stop get inspired</span>
          <button class="w-48 bg-primaryDark text-white rounded-full py-4">
            <span class="font-body font-bold">Start your free trial</span>
          </button>
        </div>
        <img src="../assets/icons/arrow.svg" class="absolute inset-x-0 top-0" />
        <img src="../assets/woman.png" class="absolute rounded-xl h-full bottom-0 right-0" />
      </div>
    </div>
  </div>
</template>

<script>
import PricingRates from '../components/PricingRates.vue'
import SignUpButton from '../components/SignUpButton.vue'

export default {
  name: 'Home',
  components: {
    PricingRates,
    SignUpButton
  }
}
</script>

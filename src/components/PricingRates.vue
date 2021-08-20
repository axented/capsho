<template>
  <!-- Pricing -->
  <div class="py-10 bg-gradient-to-r from-white to-backgroundGradient">
    <div class="container">
      <div class="px-4">  
        <span class="font-heading text-5xl">Choose your plan</span>
      </div>
      <div class="flex flex-col justify-center sm:flex-row py-6">
        <!-- First box -->
        <div class="flex flex-wrap justify-center items-center w-full md:w-1/3 bg-white shadow rounded-2xl py-10 px-6 md:mr-4 mb-2 sm:mb-0">
          <span class="font-body text-left font-body pb-6 px-6 text-2xl">AI can help you out <span class="font-semibold">with your copies and ideas</span></span>
          <div class="pt-6 justify-center align-center">
            <button class="flex flex-row items-center font-body hover:bg-backgroundGradient py-4 px-4 rounded-full">
              <img class="pr-6 -mb-1" src="../assets/icons/video.svg" />
              <span class="font-body font-bold text-primaryDark">Watch demo</span>
            </button>
          </div>
        </div>
        <!-- Second Box -->
        <div class="flex flex-col w-full sm:w-2/3 md:w-2/3 bg-white shadow rounded-2xl py-10 px-6 md:ml-4 mt-2 sm:mt-0">
          <span class="font-bodyLexend flex pb-6">Standard Plan</span>
          <div class="font-bodyLexend flex flex-row pb-6">
            <span class="text-4xl pr-4">$99</span>
            <span>/month</span>
          </div>
          <div class="border-t-2 pb-4">
            <!-- Line -->
          </div>
          <div class="flex flex-row">
            <img src="../assets/icons/check.svg" width="20" height="20" />
            <span class="font-body px-4 py-2">Chat integrated</span>
          </div>
          <div class="flex flex-row">
            <img src="../assets/icons/check.svg" width="20" height="20" />
            <span class="font-body px-4 py-2">Access to all out tools</span>
          </div>
          <div class="flex flex-row">
            <img src="../assets/icons/check.svg" width="20" height="20" />
            <span class="font-body px-4 py-2">Unlimited runs</span>
          </div>
          <div class="flex flex-row">
            <img src="../assets/icons/check.svg" width="20" height="20" />
            <span class="font-body px-4 py-2">Premium community</span>
          </div>
          <button
            @click="$router.push('/sign-in')"
            class="rounded-full bg-secondaryDark py-4 mt-6"
          >
            <span class="font-body font-bold text-white font-body">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing Rates',
}
</script>
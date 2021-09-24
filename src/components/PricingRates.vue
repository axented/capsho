<template>
  <!-- Pricing -->
  <div class="py-10">
    <div class="container">
      <div class="px-4 flex">
        <span class="font-heading text-5xl">{{ title }}</span>
      </div>
      <div class="flex flex-col justify-center md:flex-row py-6">
        <!-- Platinum box -->
        <div class="flex flex-col w-full w-1/2 bg-white shadow rounded-2xl py-10 px-6 md:mr-4 mt-2 md:mt-0">
          <span class="font-bodyLexend flex pb-6">Platinum Plan</span>
          <div class="font-bodyLexend flex flex-row pb-6">
            <span class="text-4xl pr-4">$67</span>
            <span>/month</span>
          </div>
          <div class="border-t-2 pb-4">
            <!-- Line -->
          </div>
          <div 
            v-for="(feature, i) in platinumFeatures"
            :key="i"
            class="flex flex-row"
          >
            <img src="../assets/icons/check.svg" width="20" height="20" />
            <span class="text-left font-body px-4 py-2">{{ feature }}</span>
          </div>
          <div class="flex flex-col justify-end h-full">
            <a :href="linkPlatinum" target="_blank" class="w-full">
              <button class="rounded-full bg-secondaryDark py-4 mt-6 w-full">
                <span class="font-body font-bold text-white font-body">Get Started</span>
              </button>
            </a>
          </div>
        </div>
        <!-- Diamiond Box -->
        <div class="flex flex-col w-full w-1/2 bg-white shadow rounded-2xl py-10 px-6 md:ml-4 mt-2 md:mt-0">
          <span class="font-bodyLexend flex pb-6">Diamond Plan</span>
          <div class="font-bodyLexend flex flex-row pb-6">
            <span class="text-4xl pr-4">$97</span>
            <span>/month</span>
          </div>
          <div class="border-t-2 pb-4">
            <!-- Line -->
          </div>
          <div 
            v-for="(feature, i) in diamondFeatures"
            :key="i"
            class="flex flex-row"
          >
            <img src="../assets/icons/check.svg" width="20" height="20" />
            <span class="text-left font-body px-4 py-2">{{ feature }}</span>
          </div>
          <div class="flex flex-col justify-end h-full">
            <a :href="linkDiamond" target="_blank" class="w-full">
              <button class="rounded-full bg-secondaryDark py-4 mt-6 w-full">
                <span class="font-body font-bold text-white font-body">Get Started</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing Rates',
  props: ['title', 'linkDiamond', 'linkPlatinum'],
  data: () => ({
    platinumFeatures: [
      'Unlimited access to all our storytelling tools to generate captions you can schedule & post and emails you can schedule & send',
      'Customer support via Live Chat',
      'Premium access to a private Facebook Group community'
    ],
    diamondFeatures: [
      'All of the Platinum Plan benefits',
      'Premium access to a Social Media Action Calendar',
      'Premium monthly access to a Social Media Action Calendar',
      'Premium montly access to a trending Instagram Reels Inspiration Drop, with specific instructions on how to create them',
      'Premium access to our Instagram Stories Strategy',
      'Premium access to our Social Media Graphics Swipe File',
      '1:1 Onboarding call Premium access to a private Facebook Group community'
    ]
  })
}
</script>
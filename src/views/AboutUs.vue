<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col bg-gradient-to-r from-backgroundGradient to-white py-10">
      <span class="font-heading text-5xl">About Us</span>
      <div class="flex flex-row align-center py-8 px-8">
        <img class="mr-4" src="../assets/img.png" />
        <p class="ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies nunc tincidunt ornare sit diam est gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies nunc tincidunt ornare sit diam est gravida.</p>
      </div>
      <div class="flex flex-row">
        <p class="mr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies nunc tincidunt ornare sit diam est gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies nunc tincidunt ornare sit diam est gravida.</p>
        <img class="mr-4" src="../assets/img.png" />
      </div>
    </div>
    <!-- Better -->
    <div class="bg-gradient-to-r from-yellowBackgroundStart to-yellowBackgroundEnd py-10">
      <div class="w-80 mx-auto">  
        <span class="font-heading text-4xl">Better copy for busy entrepreneurs</span>
      </div>
    </div>
    <!-- Mission -->
    <div class="flex flex-row py-10 px-10">
      <div class="flex flex-col w-2/3">
        <span class="font-heading text-5xl text-left pb-6">Our mission</span>
        <p class="font-body text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies nunc tincidunt ornare sit diam est gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies nunc tincidunt ornare sit diam est gravida.</p>
      </div>
      <div class="w-1/3">
        <img src="../assets/img.png" />
      </div>
    </div>
    <!-- Founders -->
    <div class="bg-gradient-to-r from-white to-backgroundGradient py-10">
      <span class="font-heading text-5xl">Meet the founders</span>
      <div class="flex flex-row justify-center pt-8">
        <div class="flex flex-col w-1/5 bg-white rounded-xl py-6 px-6 mx-3 shadow">
          <span class="font-body font-bold text-left pb-6">Why we do what we do:</span>
          <span class="font-body text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ultricies nunc tincidunt ornare sit diam est gravida.</span>
        </div>
        <div class="flex flex-col w-1/5 bg-secondaryDark rounded-xl pt-6 px-6 mx-3">
          <span class="font-bodyLexend text-left">Name Last Name</span>
          <img src="../assets/founder.png" class="max-h-80" />
        </div>
        <div class="flex flex-col w-1/5 bg-secondaryDark rounded-xl pt-6 px-6 mx-3">
          <span class="font-bodyLexend text-left">Name Last Name</span>
          <img src="../assets/founder.png" class="max-h-80" />
        </div>
      </div>
    </div>
    <!-- Work -->
    <div class="py-10 px-10 bg-primaryLight">
      <div class="relative flex flex-col md:flex-row rounded-xl bg-white lg:w-4/5 mx-auto">
        <div class="flex flex-col w-full text-left pb-8 px-10">
          <span class="font-heading py-8 text-4xl">Want to work with us?</span>
          <button class="w-48 bg-primaryDark text-white rounded-full py-4">
            <span class="font-body font-bold">Email us!</span>
          </button>
        </div>
        <img src="../assets/work.png" class="absolute rounded-xl h-full bottom-0 right-0" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About Us'
}
</script>
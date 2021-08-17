<template>
  <div>
    <NavbarDesktop />
    <NavbarMobile />
    <div class="bg-backgroundGradient py-10 px-10">
      <!-- Body -->
      <div class="flex flex-col rounded-xl bg-white py-10 px-10">
        <span class="font-heading text-3xl text-left">We love hearing from you, contact us!</span>
        <form class="flex flex-col py-6">
          <div class="py-2">
            <label class="block text-left text-formLabel font-formText pb-2" for="fullName">Full Name</label>
            <input class="apperance-none border-0 bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="First and last name">
          </div>
          <div class="py-2">
            <label class="block text-left text-formLabel font-formText pb-2" for="email">Email</label>
            <input class="apperance-none border-0 bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="user@example.com">
          </div>
          <div class="py-2">
            <label class="block text-left text-formLabel font-formText pb-2" for="comment">Comment</label>
            <textarea class="apperance-none border-0 bg-backgroundGradient rounded-xl resize-none w-full py-4 px-4 text-primaryDark focus:outline-none focus:shadow-outline" rows="5" id="comment" placeholder="Would love to hear from you!"></textarea>
          </div>
          <div class="flex py-2 justify-start">
            <button class="self-end">
              <span class="text-left font-body font-bold text-primaryDark">Upload brand logotype</span>
            </button>
          </div>
          <div class="flex py-4 justify-end">
            <button class="font-body font-bold bg-primaryDark text-white py-4 px-4 rounded-full">
              <span class="text-white font-body font">Continue</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavbarDesktop from '../components/NavbarDesktop.vue'
import NavbarMobile from '../components/NavbarMobile.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Contact Us',
  components: {
    NavbarDesktop,
    NavbarMobile,
    Footer
  }
}
</script>
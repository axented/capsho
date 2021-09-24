<template>
  <div>
    <NavbarDesktop />
    <NavbarMobile />
    <div class="bg-backgroundGradient py-10 px-10">
      <div class="container">
        <!-- Body -->
        <div class="flex flex-col rounded-xl bg-white py-10 px-10">
          <span class="font-heading text-3xl text-left">Have a question or some feedback for us? Let’s talk!</span>
          <span class="font-number pt-6 text-left">Get in touch with us below. We’ll get back to you within 24 hours (we’d never leave you on read)</span>
          <form class="flex flex-col pt-6">
            <div class="py-4">
              <label class="block text-left text-formLabel font-formText pb-2" for="fullName">Your Full Name</label>
              <input class="apperance-none border-0 bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="Please enter your First & Last Name">
            </div>
            <div class="py-4">
              <label class="block text-left text-formLabel font-formText pb-2" for="email">Your Email Address</label>
              <input class="apperance-none border-0 bg-backgroundGradient rounded-xl w-full py-4 px-4 text-primaryDark focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Please enter the email address you’d like us to reply to">
            </div>
            <div class="py-4">
              <label class="block text-left text-formLabel font-formText pb-2" for="comment">Your Question or Comment (or both!)</label>
              <textarea class="apperance-none border-0 bg-backgroundGradient rounded-xl resize-none w-full py-4 px-4 text-primaryDark focus:outline-none focus:shadow-outline" rows="5" id="comment" placeholder="Please be as specific as possible so we can be as helpful as possible. Looking forward to hearing from you!"></textarea>
            </div>
            <div class="flex pt-4 justify-end">
              <button class="font-body font-bold bg-primaryDark text-white py-4 px-4 rounded-full">
                <span class="text-white font-number font-medium">Submit</span>
              </button>
            </div>
          </form>
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

export default {
  name: 'Contact Us',
  components: {
    NavbarDesktop,
    NavbarMobile,
    Footer
  }
}
</script>
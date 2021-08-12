import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import TermsOfService from '../views/TermsOfService.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Pricing from '../views/Pricing.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About Us',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'Contact Us',
    component: ContactUs
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    component: TermsOfService
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: PrivacyPolicy
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    component: SignIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router

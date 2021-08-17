import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import TermsOfService from '../views/TermsOfService.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Pricing from '../views/Pricing.vue'
import SignIn from '../views/SignIn.vue'
import PostSignIn from '../views/PostSignIn.vue'
import Register from '../views/Register.vue'

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
  },
  {
    path: '/post-sign-in',
    name: 'Post Sign In',
    component: PostSignIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const protectedPaths = ['/post-sign-in'];

  if (protectedPaths.includes(to.path)) {
    if (!store.state.user.loggedIn) {
      router.push({ path: '/sign-in' });
    } else {
      next();
    }
  } else if (to.path === '/sign-in' && store.state.user.loggedIn) {
    router.push({ path: '/post-sign-in' });
  } else {
    next();
  }
})

export default router

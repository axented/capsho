import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { publicPath } from '../../vue.config'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import TermsOfService from '../views/TermsOfService.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Pricing from '../views/Pricing.vue'
import SignIn from '../views/SignIn.vue'
import PostSignIn from '../views/PostSignIn.vue'
import Register from '../views/Register.vue'
import NotFoundPage from '../components/404.vue'

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
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/post-sign-in',
    name: 'Post Sign In',
    component: PostSignIn
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(publicPath),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const restrictedPaths = ['/post-sign-in'];
  const loginPaths = ['/sign-in', '/register'];

  if (restrictedPaths.includes(to.path)) {
    if (!store.state.user.loggedIn) {
      next({ path: '/sign-in' });
    } else {
      next();
    }
  } else if (loginPaths.includes(to.path)) {
    if (store.state.user.loggedIn) {
      next({ path: '/post-sign-in' });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router

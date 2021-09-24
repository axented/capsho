import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { publicPath } from '../../vue.config'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
//import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import TermsOfService from '../views/TermsOfService.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import SignIn from '../views/SignIn.vue'
import PostSignIn from '../views/PostSignIn.vue'
import Register from '../views/Register.vue'
import CreateProfile from '../views/CreateProfile.vue'
import Questions from '../views/Questions.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Test from '../views/Test.vue'
import NotFoundPage from '../components/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /*
  {
    path: '/about',
    name: 'About Us',
    component: AboutUs
  }, */
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
    component: SignIn,
    beforeEnter: (to, from, next) => {
      const user = store.getters.user
      if (!user.loggedIn) {
        next()
      } else {
        next('/dashboard')
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      const user = store.getters.user
      if (!user.loggedIn) {
        next()
      } else {
        next('/dashboard')
      }
    }
  },
  {
    path: '/post-sign-in',
    name: 'Post Sign In',
    component: PostSignIn,
  },
  {
    path: '/create-profile',
    name: 'Create Profile',
    component: CreateProfile,
    /*beforeEnter: (to, from, next) => {
      const user = store.getters.user
      if (user.loggedIn) {
        if (user.createdProfile) {
          next('/dashboard')
        } else {
          next()
        }
      } else {
        next('/sign-in')
      }
    }*/
  },
  {
    path: '/questions/:tool',
    name: 'Questions',
    component: Questions,
    beforeEnter: (to, from, next) => {
      const user = store.getters.user
      if (user.loggedIn) {
        if (!user.createdProfile) {
          next('/create-profile')
        } else {
          next()
        }
      } else {
        next('/sign-in')
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const user = store.getters.user
      if (user.loggedIn) {
        if (!user.createdProfile) {
          next('/create-profile')
        } else {
          next()
        }
      } else {
        next('/sign-in')
      }
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      const user = store.getters.user
      if (user.loggedIn) {
        if (!user.createdProfile) {
          next('/create-profile')
        } else {
          next()
        }
      } else {
        next('/sign-in')
      }
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    beforeEnter: (to, from, next) => {
      const user = store.getters.user
      if (user.loggedIn) {
        if (!user.createdProfile) {
          next('/create-profile')
        } else {
          next()
        }
      } else {
        next('/sign-in')
      }
    }
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

/*
router.beforeEach((to, from, next) => {
  //const restrictedPaths = ['/dashboard', '/questions/:tool', 'profile'];
  //const loginPaths = ['/sign-in', '/register'];

  if (restrictedPaths.includes(to.path)) {
    if (!store.state.user.loggedIn) {
      next({ path: '/sign-in' });
    } else if (!store.state.user.data.emailVerified) {
      next({ path: '/post-sign-in' })
    }  else {
      next();
    }
  } else if (loginPaths.includes(to.path)) {
    if (store.state.user.loggedIn) {
      next({ path: '/dashboard' });
    } else {
      next();
    }
  } else if (to.path === '/post-sign-in') {
    if (!store.state.user.loggedIn) {
      next({ path: '/sign-in' })
    } else {
      next()
    }
  } else {
    next();
  }
}) */


export default router

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "capsho-abdf4.firebaseapp.com",
  projectId: "capsho-abdf4",
  storageBucket: "capsho-abdf4.appspot.com",
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user);
});

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { firestorePlugin } from 'vuefire'
import router from './router'

createApp(App).use(router).mount('#app')
App.use(firestorePlugin)
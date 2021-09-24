import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import VueClipboard from 'vue-clipboard2'
import { authCheck } from './db'

authCheck

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueClipboard)
app.use(firestorePlugin)
app.mount('#app')

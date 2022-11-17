import { createApp } from 'vue'
import './style.css'
import './index.css' // Tailwind
import store from './store' // Vuex
import router from './router' // Router
import App from './App.vue'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

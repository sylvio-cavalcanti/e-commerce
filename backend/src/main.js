import { createApp } from 'vue'
import './style.css'
import './index.css' // Tailwind
import store from './store' // Vuex
import App from './App.vue'

createApp(App)
    .use(store)
    .mount('#app')

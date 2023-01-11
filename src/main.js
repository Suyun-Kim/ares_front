import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index.js'
import axios from 'axios'

createApp(App)
    .use(router)    
    .use(store)
    .use(axios)
    .mount('#app')

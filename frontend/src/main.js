import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import VueCookies from 'vue3-cookies'
import './interceptor/axios';

createApp(App)
    .use(router)
    .use(store)
    .use(VueCookies)
    .mount('#app')
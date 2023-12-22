import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

createApp(App)
    .use(router)
    .mount('#app')

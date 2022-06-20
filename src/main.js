import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
import AppLink from '@/components/AppLink.vue'

createApp(App)
.component('AppLink', AppLink)
.use(router)
.mount('#app')

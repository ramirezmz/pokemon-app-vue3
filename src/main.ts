import App from './App.vue'
import { createApp } from 'vue'
import { router } from "./route"

createApp(App).use(router).mount('#app')

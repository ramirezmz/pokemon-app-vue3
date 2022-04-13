import App from './App.vue'
import { createApp } from 'vue'
import { router } from "./route"
import store from './store'

createApp(App).use(router).use(store).mount('#app')

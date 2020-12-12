import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import myDirective from'./directives/transform.js'

createApp(App).use(router).mount('#app')

import './assets/styles/main.css'
import './assets/styles/hover.scss'
import './assets/styles/fonts.css'
import './assets/styles/mobile.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'nprogress/nprogress.css'
import App from './App.vue'
import router from './router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')

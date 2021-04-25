import { createApp } from 'vue'
import installComponents from '.'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(installComponents)
app.mount('#app')

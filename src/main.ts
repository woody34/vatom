import { createApp } from 'vue'
import installComponents from '.'
import App from './App.vue'
import './index.css'

createApp(App).use(installComponents).mount('#app')

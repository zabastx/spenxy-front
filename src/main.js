import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VButton from './components/VButton'
import VHeader from './components/VHeader'
import VNav from './components/VNav'
import VInput from './components/VInput'
import VSelect from './components/VSelect'

createApp(App)
.use(store)
.use(router)
.component('VButton', VButton)
.component('VHeader', VHeader)
.component('VNav', VNav)
.component('VInput', VInput)
.component('VSelect', VSelect)
.mount('#app')

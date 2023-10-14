// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import sfc1 from './tutorial/1-reactive.vue'



// el componente App.vue insrtalo dentro de #app
// createApp(App).mount('#app')

createApp(sfc1).mount('#app')

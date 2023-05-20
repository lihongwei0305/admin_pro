import {createApp} from 'vue'

import router from './router/index.js'

import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import 'uno.css'
import "./assets/css/glob.scss"
import App from './App.vue'


const APP = createApp(App)
console.log(router)
APP
    .use(router)
    .use(PrimeVue)
    .mount('#app')

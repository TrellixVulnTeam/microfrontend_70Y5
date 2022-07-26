import { createApp } from 'vue'
import App from './App.vue'
import store from './storeIndex'
import './assets/reset.css';

const app = createApp(App)

app.use(store)

app.mount('#app')

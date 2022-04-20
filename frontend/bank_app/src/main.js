import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import router from './router'
const app = createApp(App);
app.use(plugin, defaultConfig);
app.use(router)
app.mount('#app');

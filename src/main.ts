import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import { useElementPlus } from "../src/plugins/element-plus";

const app = createApp(App)
app.use(router)
    .use(store)
    .mount('#app')

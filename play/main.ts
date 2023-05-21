import { createApp } from 'vue'
import App from './app.vue'
import rzex from '@Xrikis-ui/components'

const app = createApp(App)
app.use(rzex)

app.mount('#app')

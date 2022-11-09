import { createApp } from 'vue'
import App from '@/app/index.vue'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/styles/index.scss'

const app = createApp(App)
const modules = import.meta.glob<any>('/src/modules/*.ts', { eager: true })

// install all modules under `modules/`
Object.values(modules).forEach((module) => module.install?.(app))

app.mount('#app')

import { defineNuxtPlugin } from '#app'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.prod.css'
import '@quasar/extras/material-icons/material-icons.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    plugins: {}, // اگر به افزونه‌های Quasar نیاز داری اینجا اضافه کن
  })
})

import Vue from 'vue'
import App from 'components/App'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import router from 'router/router.js'

import 'normalize.css/normalize.css'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})

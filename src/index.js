import Vue from 'vue'
import App from 'components/App'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from 'router/router.js'
import store from 'store/store.js'

import 'normalize.css/normalize.css'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

import VueRouter from 'vue-router'
import Example from '../components/example/Example.vue'
import Home from '../components/Home.vue'

const routes = [
  { path: '/example', component: Example },
  { path: '/', component: Home },
  { path: '/*', redirect: '/' }
]

export default new VueRouter({
  routes // short for routes: routes
})

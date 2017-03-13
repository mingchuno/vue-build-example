import VueRouter from 'vue-router'
import Example from '../components/example/Example.vue'
import Example2 from '../components/example/Example2.vue'
import Example3 from '../components/example/Example3.vue'
import Home from '../components/Home.vue'

const routes = [
  { path: '/example', component: Example },
  { path: '/example2', component: Example2 },
  { path: '/example3', component: Example3 },
  { path: '/', component: Home },
  { path: '/*', redirect: '/' }
]

export default new VueRouter({
  routes // short for routes: routes
})

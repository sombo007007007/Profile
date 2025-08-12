import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../components/Profile.vue'
import About_us from '../components/About_us.vue'

const routes = [
  { path: '/profile', component: Profile },
  { path: '/About_us', component: About_us },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

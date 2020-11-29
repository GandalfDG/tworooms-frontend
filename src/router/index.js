import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Create from '../views/CreateGame.vue'
import Join from '../views/JoinGame.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Landing
  },
  {
    path: '/create/',
    name: 'Create',
    component: Create
  },
  {
    path: '/join/',
    name: 'Join',
    component: Join
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

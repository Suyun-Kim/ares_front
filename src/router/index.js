import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from "@/components/Login";


const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

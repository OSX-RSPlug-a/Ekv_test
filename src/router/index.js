import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from '../components/home/Login.vue'
import Register from '../components/register/Register.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import Clientes from '../components/clientes/Clientes.vue'
import Users from '../components/users/Users.vue'
import GenResults from '../components/genresults/GenResults.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/genresults',
    name: 'GenResults',
    component: GenResults
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

export default router

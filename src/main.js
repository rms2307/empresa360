import { createApp } from 'vue'
import App from './App.vue'
import Home from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

var routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')

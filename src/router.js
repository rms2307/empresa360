import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'
import Vendas from '@/components/vendas/VendasComponent.vue'
import Servicos from '@/components/servicos/ServicosComponent.vue'
import Leads from '@/components/vendas/LeadsComponent.vue'
import Contratos from '@/components/vendas/ContratosComponent.vue'
import Dashboard from '@/components/dashboard/DashboardComponent.vue'
import Site from '@/views/SiteView.vue'

var routes = [
  {
    path: '/',
    component: Site,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'vendas',
        component: Vendas,
        children: [
          { path: 'leads', component: Leads },
          { path: 'contratos', component: Contratos },
        ],
      },
      {
        path: 'servicos',
        component: Servicos,
      },
      {
        path: 'dashboard',
        component: Dashboard,
      },
    ],
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

export default router

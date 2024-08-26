import { createRouter, createWebHistory } from 'vue-router'
import EntryData from '@/components/EntryData.vue'
import tablaDatos from '@/components/tablaDatos.vue'
import buscarEmpleados from '@/components/buscarEmpleados.vue'
import welcomeComponent from '@/components/welcomeComponent.vue'
import ErrorComponent from '@/components/ErrorComponent.vue'
import eliminarEmpleado from '@/components/eliminarEmpleado.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/home', component: welcomeComponent},
    {path: '/', component: welcomeComponent},
    {path: '/form', component: EntryData},
    {path: '/table', component: tablaDatos},
    {path: '/search', component: buscarEmpleados},
    {path: '/delete', component: eliminarEmpleado},
    {path: '/:pathMatch(.*)*', component: ErrorComponent},
  ]
})

export default router

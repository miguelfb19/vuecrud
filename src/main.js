import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

//Importar los componentes
import EntryData from '@/components/EntryData'
import tablaDatos from '@/components/tablaDatos'
import buscarEmpleados from '@/components/buscarEmpleados'
import welcomeComponent from '@/components/welcomeComponent'
import ErrorComponent from '@/components/ErrorComponent'
import eliminarEmpleado from '@/components/eliminarEmpleado'

//Crear las rutas
const routes = [
    {path: '/home', component: welcomeComponent},
    {path: '/', component: welcomeComponent},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')


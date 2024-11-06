import { createRouter, createWebHistory } from "vue-router";
import CochesComponent from './components/CochesComponent'
import DetalleCoches from './components/DetalleCoches'
import CrearCoches from './components/CrearCoches'
import ModificarCoche from './components/ModificarCoche'
const myRoutes = [
    {
        path:"/",
        component:CochesComponent
    },
    {
        path:"/details/:id/:marca/:modelo/:conductor/:imagen",
        component:DetalleCoches
    },
    {
        path:"/create",
        component:CrearCoches
    },
    {
        path:"/update/:id",
        component:ModificarCoche
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router
const Home = ()=> import('./components/Home.vue')

//componentes para el Modulo de examenes

const Crear = ()=> import('./components/examenes/Crear.vue')
const Editar = ()=> import('./components/examenes/Editar.vue')
// Componentes para la seccion de comics
const ApiRick  = ()=> import('./components/comics/ApiRick.vue')

export const routes  = [
    {
        name:'home',
        path: '/',
        component: Home
    },
    {
        name:'crearExamen',
        path: '/crear',
        component: Crear
    },
    {
        name:'editarExamen',
        path: '/editar/:id',
        component: Editar
    },
    {
        name:'comics',
        path: '/comics',
        component: ApiRick
    },

]
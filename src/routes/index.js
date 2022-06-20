import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        alias: '/home'
    },
    // {
    //     path: '/home',
    //     // redirect: {name: 'Home'}
    //     // redirect: '/'
    //     redirect: to => '/'
    // },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */'@/views/About.vue'),
    },
    // {
    //     path: '/brazil',
    //     name: 'Brazil',
    //     component: () => import(/* webpackChunkName: "Brazil" */'@/views/Brazil.vue'),
    // },
    // {
    //     path: '/hawai',
    //     name: 'Hawai',
    //     component: () => import(/* webpackChunkName: "Hawaii" */'@/views/Hawai.vue'),
    // },
    // {
    //     path: '/panama',
    //     name: 'Panama',
    //     component: () => import(/* webpackChunkName: "Panama" */'@/views/Panama.vue'),
    // },
    // {
    //     path: '/jamaica',
    //     name: 'Jamaica',
    //     component: () => import(/* webpackChunkName: "Jamaica" */'@/views/Jamaica.vue'),
    // },
    {
        path: '/destination/:id/:slug',
        name: 'Destination',
        component: () => import(/* webpackChunkName: "DestinationShow" */'@/views/Destination.vue'),
        props: route => ({...route.params, id:parseInt(route.params.id)}),
        beforeEnter(to, from){
            const exist = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))
            if(!exist){
                return{
                    name: 'NotFound',
                    params: {pathMatch: to.path.split('/').slice(1)},
                    query: to.query,
                    hash: to.hash,
                }
            }
        },
        children:[
            {
                path: ':experienceSlug',
                name: 'Experience.Show',
                component: () => import(/* webpackChunkName: "DestinationShow" */'@/views/ExperienceShow.vue'),
                props: route => ({...route.params, id:parseInt(route.params.id)})
            },
        ]
    },
    // {
    //     path: '/destination/:id/:slug/:experienceSlug',
    //     name: 'Experience.Show',
    //     component: () => import(/* webpackChunkName: "DestinationShow" */'@/views/ExperienceShow.vue'),
    //     props: route => ({...route.params, id:parseInt(route.params.id)})
    // },
    {
        path: '/protected',
        name: 'Protected',
        components: {

            default: () => import('@/views/Protected.vue'),
            SideBar: () => import('@/components/LeftSideBar.vue'),
        },
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/invoices',
        name: 'Invoices',
        components: {

            default: () => import('@/views/Invoices.vue'),
            SideBar: () => import('@/components/LeftSideBar.vue'),
        },
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */'@/views/Login.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "Jamaica" */'@/views/NotFound.vue'),
    }
]
const router = createRouter({
    history: createWebHistory(), 
    routes,
    linkActiveClass: 'active-link',
    scrollBehavior(to, from, savedPosition){
        return savedPosition || new Promise(resolve =>{
            setTimeout(()=> resolve({top:0, behavior: 'smooth'}),1000)
        })
    }
})

router.beforeEach((to, from) =>{
    if(to.meta.requiresAuth && !window.user){
        return {name: 'Login',query:{redirect: to.fullPath}}
    }
})
export default router
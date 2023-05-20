import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component:()=>import("../views/Home/home.vue")
    },
    {
        path: "/login",
        component:()=>import("../views/Login/login.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory("/")
})

export default router
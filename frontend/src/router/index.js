import { createRouter, createWebHistory } from "vue-router";
import imgMatch from '/src/components/imgMatch.vue'

const routes = [
    {
        path: '/soalImage',
        name: 'imgMatch',
        component: imgMatch,
    },

    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
import { createRouter, createWebHistory } from "vue-router";
import dashboard from '/src/views/dashboard.vue'
import imgMatch from '/src/views/imgMatch.vue'
import AddImgMatch from '/src/views/addImgMatch.vue'
import index from '/src/views/index.vue'
import preExam from '/src/views/preExam.vue'
import biodata from '/src/views/biodata.vue'
import testResult from '/src/views/testResult.vue'

import masterImgMatch from '/src/views/masterImgMatch.vue'
import masterTestResult from '/src/views/masterTestResult.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
    },
    {
        path: '/biodata',
        name: 'biodata',
        component: biodata,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
    },
    {
        path: '/preExam',
        name: 'preExam',
        component: preExam,
    },
    {
        path: '/soalImage',
        name: 'imgMatch',
        component: imgMatch,
    },
    {
        path: '/masterImage',
        name: 'masterImgMatch',
        component: masterImgMatch,
    },
    {
        path: '/addSoalImage',
        name: 'AddImgMatch',
        component: AddImgMatch,
    },
    {
        path: '/masterTestResult',
        name: 'masterTestResult',
        component: masterTestResult,
    },
    {
        path: '/testResult',
        name: 'testResult',
        component: testResult,
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
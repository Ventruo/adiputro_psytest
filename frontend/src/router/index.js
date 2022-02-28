import { createRouter, createWebHistory } from "vue-router";
import dashboard from '/src/views/dashboard.vue'
import imgMatch from '/src/views/imgMatch.vue'
import epps from '/src/views/epps.vue'
import ekspresi from '/src/views/ekspresi.vue'
import kraepelin from '/src/views/kraepelin.vue'
import index from '/src/views/index.vue'
import preExam from '/src/views/preExam.vue'
import biodata from '/src/views/biodata.vue'

import admin from '/src/views/Admin/master.vue'
import dashboardAdmin from '/src/views/Admin/dashboard.vue'
import registrant from '/src/views/Admin/registrant.vue'
import test from '/src/views/Admin/test.vue'
import session from '/src/views/Admin/session.vue'
import registrantDetail from '/src/views/Admin/registrantDetail.vue'
import reviewEssay from '/src/views/Admin/reviewEssay.vue'
import addQuestion from '/src/views/Admin/addQuestion.vue'

import masterImgMatch from '/src/views/masterImgMatch.vue'
import masterTestResult from '/src/views/Admin/masterTestResult.vue'

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
        path: '/epps',
        name: 'epps',
        component: epps,
    },
    {
        path: '/ekspresi',
        name: 'ekspresi',
        component: ekspresi,
    },
    {
        path: '/kraepelin',
        name: 'kraepelin',
        component: kraepelin,
    },
    {
        path: '/masterImage',
        name: 'masterImgMatch',
        component: masterImgMatch,
    },
    {
        path: '/admin',
        name: 'admin',
        component: admin,
        children: [
            {
                path: '',
                component: dashboardAdmin,
            },
            {
                path: '/admin/registrant',
                component: registrant,
            },
            {
                path: '/admin/test',
                component: test,
            },
            {
                path: '/admin/session',
                component: session,
            },
            {
                path: '/admin/registrantDetail',
                name: 'registrantDetail',
                component: registrantDetail,
            },
            {
                path: '/admin/reviewEssay',
                name: 'reviewEssay',
                component: reviewEssay,
            },
            {
                path: '/admin/question/add',
                component: addQuestion,
            },
            {
                path: '/admin/question/update',
                component: addQuestion,
            },
        ]
    },
    {
        path: '/masterTestResult',
        name: 'masterTestResult',
        component: masterTestResult,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
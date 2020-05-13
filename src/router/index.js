import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'Home',
            component: loadView('Home'),
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/category',
            name: 'Category',
            component: loadView('Category'),
            meta: {
                title: 'Category'
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: loadView('Detail'),
            meta: {
                title: 'Details'
            }
        }
    ]
})
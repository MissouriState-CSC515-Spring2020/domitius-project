import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Category from '@/views/Category'
import Detail from '@/views/Detail'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/category',
            name: 'Category',
            component: Category,
            meta: {
                title: 'Category'
            }
        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail,
            meta: {
                title: 'Details'
            }
        }
    ]
})
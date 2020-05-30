import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Recommend from '@/components/Recommend'
import Smusic from '../page/Smusic/Smusic'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            component: Recommend,
            children: [{
                path: ':id',
                component: Smusic
            }]
        }
    ]
})
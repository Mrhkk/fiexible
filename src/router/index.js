import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Recommend from '@/components/Recommend'
import Smusic from '../page/Smusic/Smusic'
import Key from '../page/keyframe/KeyF'
import Single from '../page/Single/Single'
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
        },
        {
            path: '/key',
            component: Key
        },
        {
            path: '/singer',
            component: Single
        }
    ]
})
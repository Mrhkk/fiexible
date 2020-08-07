import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Recommend from '@/components/Recommend'
import Smusic from '../page/Smusic/Smusic'
import Key from '../page/keyframe/KeyF'
import Single from '../page/Single/Single'
import Desc from '../page/Desc/Desc'
import Search from '../page/Search/Search'
import Icon from '../page/Icon/Icon'
import Text from '../page/Text/Text'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
        },
        {
            path: '/desc',
            component: Desc,
        },
        {
            path: '/text',
            component: Text
        },
        {
            path: '/search',
            component: Search,
            children: [{
                path: ':id',
                component: Icon
            }]
        }
    ]
})
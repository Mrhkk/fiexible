// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
// 引入适配
import './flexible/flexible'
import { Swipe, SwipeItem, Lazyload } from 'vant'
import 'vant/lib/index.css';
import App from './App'
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
// 引入echarts
import echarts from 'echarts'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
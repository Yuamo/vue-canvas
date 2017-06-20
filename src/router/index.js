import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/index.vue'], resolve)
    },
    {
      path: '/clock',
      name: 'clock',
      component: resolve => require(['../pages/clock.vue'], resolve)
    },
    {
      path: '/figure',
      name: 'figure',
      component: resolve => require(['../pages/figure.vue'], resolve)
    },
    {
      path: '/number',
      name: 'number',
      component: resolve => require(['../pages/number.vue'], resolve)
    }
  ]
})

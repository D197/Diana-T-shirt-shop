import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Design from './views/Design.vue'
import Andra from './views/Andra.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/andra',
      name: 'andra',
      component: Andra
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/design/:designId',
      name: 'design',
      component: Design
    }
  ]
})

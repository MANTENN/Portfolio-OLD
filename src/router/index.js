import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/pages/Layout'
import Projects from '@/components/Projects'
import PageNotFound from '@/components/PageNotFound'
import Projecte from '@/components/Projecte'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Layout
    },
    {
      path: '/projects/',
      name: 'projects',
      component: Projects
    },
    {
      path: '/project/:pId',
      name: 'project',
      component: Projecte
    },
    {
      path: '/:requestedRoute*',
      name: 404,
      component: PageNotFound,
      props: true
    }
  ],
})

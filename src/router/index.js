import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
/* Layout */
import Layout from '../components/Layout'
export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name:'index',
          component: () => import('../views/index/index')
        }
      ]
    },
    {
      path: '/notice',
      component: Layout,
      children: [
        {
          path: 'index',
          name:'noticeIndex',
          component: () => import('../views/notice/index')
        },
        {
          path: 'detail',
          name:'noticeDetail',
          component: () => import('../views/notice/detail')
        }
      ]
    },
    {
      path: '/supper',
      component: Layout,
      children: [
        {
          path: 'index',
          name:'supperIndex',
          component: () => import('../views/supper/index')
        }
      ]
    },
    {
      path: '/circle',
      component: Layout,
      redirect: '/circle/detail',
      children: [
        {
          path: 'detail',
          name:'circle',
          component: () => import('../views/circle/detail')
        }
      ]
    },
  ]
})

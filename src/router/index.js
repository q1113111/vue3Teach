import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'a',
        name: 'A',
        component: () => import('../views/compoentA.vue')
      },
      {
        path: 'b',
        name: 'B',
        component: () => import('../views/compoentB.vue')
      },
      {
        path: 'nameRouter',
        name: 'NameRouter',
        component: () => import('../views/nameRouter.vue'),
        children: [
          {
            path: 'a2b',
            name: 'a2b',
            components: {
              default: () => import('../views/About.vue'),
              left: () => import('../views/compoentA.vue'),
              right: () => import('../views/compoentB.vue')
            }
          }
        ]
      }
    ]
  },
  {
    path: '/routerNav',
    name: 'RouterNav',
    component: () => import('../views/routerNav.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/about/:pathMatch(.*)*',
    redirect: {
      name: 'About'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    console.log(to)
    if (to.name.match('About')) {
      return {
        top: 0
      }
    }
    return {}
  },
  routes
})

export default router

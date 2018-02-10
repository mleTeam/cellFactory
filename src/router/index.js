import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homeIndex',
      component: resolve => require(['components/home/index'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['components/login/index'], resolve)
    },
    {
      path: '/homeIndex',
      name: 'homeIndex',
      component: resolve => require(['components/home/index'], resolve)
    },
    {
      path: '/productIndex',
      name: 'productIndex',
      component: resolve => require(['components/product/index'], resolve)
    },
    {
      path: '/partnerIndex',
      name: 'partnerIndex',
      component: resolve => require(['components/partner/index'], resolve)
    },
    {
      path: '/news',
      name: 'news',
      component: resolve => require(['components/news/news'], resolve),
      children:[
        {
          path: '',
          name: 'index',
          component: resolve => require(['components/news/index'], resolve)
        },
        {
          path: 'detail/:newsId',
          name: 'detail',
          component: resolve => require(['components/news/detail'], resolve)
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['components/register/index'], resolve)
    },
    {
      path: '/registerSelectUserType',
      name: 'registerSelectUserType',
      component: resolve => require(['components/register/selectUserType'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router

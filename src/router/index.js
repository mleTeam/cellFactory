import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeIndex from 'components/home/index'
import ProductIndex from 'components/product/index'
import PartnerIndex from 'components/partner/index'
import NewsIndex from 'components/news/index'
import Register from 'components/register/index'
import RegisterSelectUserType from 'components/register/selectUserType'
import Login from 'components/login/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homeIndex',
      component: HomeIndex
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/homeIndex',
      name: 'homeIndex',
      component: HomeIndex
    },
    {
      path: '/productIndex',
      name: 'productIndex',
      component: ProductIndex
    },
    {
      path: '/partnerIndex',
      name: 'partnerIndex',
      component: PartnerIndex
    },
    {
      path: '/newsIndex',
      name: 'newsIndex',
      component: NewsIndex
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/registerSelectUserType',
      name: 'registerSelectUserType',
      component: RegisterSelectUserType
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

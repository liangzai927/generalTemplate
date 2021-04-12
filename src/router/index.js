import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js'
import routes from './routes.js'
// import { store } from '../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

let routerFlag = false //防止路由死循环


router.beforeEach(async (to, from, next) => {
  const isLogin = sessionStorage.token ? true : false
  if (to.path === '/login') {
    next()
  } else {
    if (isLogin) {
      if (!routerFlag) {
        routerFlag = true
        await store.dispatch('getRouters')
        const asyncRouters = store.getters['asyncRouters']
        console.log(asyncRouters);
        router.addRoutes(asyncRouters)
        next({ ...to, replace: true })
      } else next()
    } else {
      next('/login')
    }
  }
})

export default router
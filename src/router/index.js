import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
// import { store } from '../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})


router.beforeEach(async (to, from, next) => {
  const isLogin = sessionStorage.token ? true : false
  if (to.path === '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
  // console.log(to);
  // console.log(from);
  // console.log(next);
})

export default router
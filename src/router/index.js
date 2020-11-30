import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
// import { store } from '../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})


// router.beforeEach(async (to, from, next) => {
//   // console.log(to);
//   // console.log(from);
//   // console.log(next);
// })

export default router
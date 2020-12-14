import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router/index'
import install from './http/index'
import './utils/request.js'
import Fragment from 'vue-fragment'

//挂载vuex
import store from './store/store'

Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(install)
Vue.use(Fragment.Plugin) //解决折叠文字不消失的问题

// require('./mock');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

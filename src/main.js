import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router/index'
import install from './http/index'
import './utils/request.js'

//挂载vuex
import store from './store/store'

Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(install)

require('./mock');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

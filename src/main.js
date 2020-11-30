import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router'
import router from './router/index'

Vue.use(ElementUI);
Vue.use(VueRouter)

require('./mock');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

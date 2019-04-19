import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import App from './App.vue'

import Commander from './components/Commander.vue'
import Registration from './components/Registration.vue'
import Login from './components/Login.vue'
import InsetPlat from './components/InsertPlat.vue'

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

Vue.use(MaterialDashboard);
Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
        name: 'Login',
        path: '/login',
        component: Login
  },
  {
      name: 'Registration',
      path: '/registration',
      component: Registration
  },
  {
      name: 'Commander',
      path: '/commander',
      component: Commander
  },
  {
    name: 'Commander',
    path: '/',
    component: Commander
  },
  {
    name: 'InsertPlat',
    path: '/insertplat',
    component: InsetPlat
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
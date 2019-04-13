import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import App from './App.vue'

// import AddItem from './components/AddItem.vue'
import Commander from './components/Commander.vue'
import Registration from './components/Registration.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
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
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

import './assets/base.css'
import './assets/font-awesome-4.7.0/css/font-awesome.css'
import './fontResize.js'
import axios from 'axios';
Vue.prototype.http = axios;

import Home from './components/Home.vue'
import Order from './components/Order.vue'
import Discover from './components/Discover.vue'
import Mine from './components/Mine.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Order', component: Order },
  { path: '/Discover', component: Discover },
  { path: '/Mine', component: Mine }, 

]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

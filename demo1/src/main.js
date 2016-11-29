import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import TimeEntries from './components/TimeEntries.vue'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  components: Home
}, {
  path: '/home',
  components: Home
}, {
  path: '/time-entries',
  components: TimeEntries
}]

const router = new VueRouter({
  routes
})

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App
})

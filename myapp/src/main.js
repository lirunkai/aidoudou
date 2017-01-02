import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/time-entries',
    component: TimeEntries,
    children: [
      {
        path: 'log-time',
        component: resolve => require(['./components/LogTime.vue'], resolve)
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

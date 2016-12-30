import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource  from 'vue-resource'
import store from './vuex/store.js'

Vue.config.bug = true

Vue.use(VueRouter)
Vue.use(VueResource)

// import first from './components/onecomponent.vue'
// import second from './components/second.vue'
//
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/first',
//       component: first
//     },
//     {
//       path: '/second',
//       component: second
//     }
//   ]
// })

new Vue({
  el: '#app',
  store,
  //router,
  render: h => h(App)
})

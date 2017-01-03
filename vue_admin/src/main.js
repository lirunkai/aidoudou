// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import babelpolyfill from 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './vuex/store.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import App from './App'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Main from './components/Main.vue'
import Table from './components/nav1/Table.vue'
import Form from './components/nav1/Form.vue'
import Page3 from './components/nav1/Page3.vue'
import Page4 from './components/nav1/Page4.vue'
import Page5 from './components/nav1/Page5.vue'
import Page6 from './components/nav1/Page6.vue'
import echarts from './components/charts/echarts.vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  {
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'el-icon-message',
    children: [
      { path: '/table', component: Table, name: 'Table'},
      { path: '/form', component: Form, name: 'Form'},
      { path: '/page3', component: Page3, name: '页面3'}
    ]
  },
  {
    path: '/',
    component: Home,
    name: '导航二',
    iconCls: 'fa fa-id-card-o',
    children: [
      { path: '/page4', component: Page4, name: '页面4'},
      { path: '/page5', component: Page5, name: '页面5'}
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-address-card',
    leaf: true,
    children: [
      { path: '/page6', component: Page6, name: '导航三'}
    ]
  },
  {
    path: '/',
    component: Home,
    name: 'Charts',
    iconCls: 'fa fa-bar-chart',
    children: [
      { path: '/echarts', component: echarts, name: 'echarts'}
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(( to, from, next ) => {
  NProgress.start()
  next()
})

router.afterEach( transition => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

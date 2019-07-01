import Vue from 'vue'
import Router from 'vue-router'
import Material from './pages/almoxarifado/Material'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'material',
      component: Material
    }
  ]
})

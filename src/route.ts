import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ './pages/index.vue'),

  },
  {
    path: '/api-helper',
    component: () => import('./components/api-helper/api-helper.vue')
  }
];

export default new VueRouter({
  routes
});
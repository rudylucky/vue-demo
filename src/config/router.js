import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index";

Vue.use(VueRouter);

const routes = [{
  path: '/index', component: Index
}]

export default new VueRouter({ 
  mode: 'history',
  routes
 });

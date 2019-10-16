import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index";
import MenuSetting from "../pages/system/MenuSetting";
import PageOnly from '../pages/Page';

Vue.use(VueRouter);

const pages = [{
    path: 'menu-setting', component: MenuSetting,
}];

const routes = [{
  path: '/', redirect: '/mes',
}, {
  path: '/mes', component: Index,
  children: pages
}, {
  path: '/pages', component: PageOnly,
  children: pages
}]

export default new VueRouter({
  mode: 'history',
  routes
});

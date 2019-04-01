import Vue from "vue";
import Router from "vue-router";
//
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RecoverPassword from "../views/RecoverPassword.vue";
import RequestAccout from "../views/RequestAccout.vue";
//
import adminRouter from './admin';
//import jobRouter from './job';
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/recover",
      name: "recover",
      component: RecoverPassword
    },
    {
      path: "/request",
      name: "request",
      component: RequestAccout
    },
    adminRouter,
    //jobRouter
  ]
});

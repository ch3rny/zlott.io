import Vue from "vue";
import Router from "vue-router";
//
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RecoverPassword from "../views/RecoverPassword.vue";
import RequestAccout from "../views/RequestAccout.vue";
//
import AdminLogin from "../views/admin/AdminLogin.vue";
import AdminInDev from "../views/admin/AdminInDev.vue";
//
import adminRouter from "./admin";
import jobRouter from "./job";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //landing
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
    { path: "/test", name: "test", component: AdminInDev },
    { path: "*", component: AdminInDev },
    {
      path: "/admin/login",
      name: "adminLogin",
      component: AdminLogin
    },
    adminRouter,
    jobRouter
  ]
});

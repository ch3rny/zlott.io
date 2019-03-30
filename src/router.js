import Vue from "vue";
import Router from "vue-router";
import LandingPage from "./views/LandingPage.vue";
import LoginPage from "./views/LoginPage.vue";
import RecoverPassword from "./views/RecoverPassword.vue";
import RequestAccout from "./views/RequestAccout.vue";
import JobPage from "./views/JobPage.vue"
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
    {
      path: "/job",
      name: "job",
      component: JobPage
    }
  ]
});


import Vue from "vue";
import Router from "vue-router";
import LandingPage from "./views/LandingPage.vue";
import LoginPage from "./views/LoginPage.vue";
import RecoverPassword from "./views/RecoverPassword.vue";
import RequestAccout from "./views/RequestAccout.vue";
// admin pages
import AdminIndex from "./views/admin/AdminIndex.vue";
import AdminUsers from "./views/admin/AdminUsers.vue";
import AdminCreateUser from "./views/admin/AdminCreateUser.vue";
import AdminInfo from "./views/admin/AdminInfo.vue";
import AdminRequests from "./views/admin/AdminRequests.vue";
import AdminUserEdit from "./views/admin/AdminUserEdit.vue";
import AdminAcceptRequest from "./views/admin/AdminAcceptRequest.vue";
import AdminInDev from "./views/admin/AdminInDev.vue";
//
import JobPage from "./views/JobPage.vue";
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
    },
    {
      path: "/admin_32xtv",
      name: "admin",
      component: AdminIndex,
      redirect: { name: "adminUsers" },
      children: [
        {
          path: "users",
          name: "adminUsers",
          component: AdminUsers
        },
        {
          path: "users/:pk",
          name: "adminUserEdit",
          component: AdminUserEdit
        },
        {
          path: "users/create",
          name: "adminUserCreate",
          component: AdminCreateUser
        },
        // {
        //   path: "*",
        //   name: "adminInfo",
        //   component: AdminInDev
        // },
        {
          path: "requests",
          name: "adminRequests",
          component: AdminRequests
        },
        {
          path: "requests/accept",
          name: "adminRequestsAccept",
          component: AdminAcceptRequest
        },
        {
          path: "in-dev",
          name: "adminJobs",
          component: AdminInDev
        }
      ]
    }
  ]
});

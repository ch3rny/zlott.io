import Vue from "vue";
import Router from "vue-router";
//
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RecoverPassword from "../views/RecoverPassword.vue";
import RequestAccout from "../views/RequestAccout.vue";
//
import AdminLogin from "../views/admin/AdminLogin.vue";
import AdminIndex from "../views/admin/AdminIndex.vue";
import AdminUsers from "../views/admin/AdminUsers.vue";
import AdminCreateUser from "../views/admin/AdminCreateUser.vue";
//import AdminInfo from "../views/admin/AdminInfo.vue";
import AdminRequests from "../views/admin/AdminRequests.vue";
import AdminUserEdit from "../views/admin/AdminUserEdit.vue";
import AdminAcceptRequest from "../views/admin/AdminAcceptRequest.vue";
import AdminInDev from "../views/admin/AdminInDev.vue";
//
import JobPage from "../views/job/JobPage.vue";
import JobCreate from "../views/job/JobCreate.vue";
import JobTalents from "../views/job/JobTalents.vue";

//
import store from "@/store";
// import { adminLoginRouter, adminRouter } from "./admin";
// import jobRouter from "./job";
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
    //admin dashboard
    {
      path: "/admin_32xtv/login",
      name: "adminLogin",
      component: AdminLogin
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
          path: "users/:id",
          name: "adminUserEdit",
          component: AdminUserEdit
        },
        {
          path: "users/create",
          name: "adminUserCreate",
          component: AdminCreateUser
        },
        {
          path: "requests",
          name: "adminRequests",
          component: AdminRequests
        },
        {
          path: "requests/:id",
          name: "adminRequestsAccept",
          component: AdminAcceptRequest
        },
        {
          path: "in-dev",
          name: "adminJobs",
          component: AdminInDev
        }
      ],
      beforeEnter(to, from, next) {
        if (store.getters["dashboard/isSuperuser"]) {
          next();
        } else {
          store.dispatch("dashboard/initialize");
          const checkSU = () => {
            if (store.getters["dashboard/isSuperuser"]) {
              next();
            } else {
              next({ name: "adminLogin" });
            }
          };
          setTimeout(checkSU, 1000);
        }
      }
    },
    //job
    {
      path: "/job",
      name: "job",
      component: JobPage,
      redirect: { name: "jobTalentFeed" },
      children: [
        {
          path: "create",
          name: "jobCreate",
          component: JobCreate
        },
        {
          path: "talent-feed",
          name: "jobTalentFeed",
          component: JobTalents
        },
        {
          path: "email",
          name: "jobEmails",
          component: AdminInDev
        },
        {
          path: "manage-candidates",
          name: "jobManage",
          component: AdminInDev
        }
      ],
      beforeEnter(to, from, next) {
        if (store.getters["auth/isAuthenticated"]) {
          next();
        } else {
          next({ name: "login" });
        }
      }
    }
  ]
});

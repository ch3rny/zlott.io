import AdminIndex from "../views/admin/AdminIndex.vue";
import AdminUsers from "../views/admin/AdminUsers.vue";
import AdminCreateUser from "../views/admin/AdminCreateUser.vue";
import AdminRequests from "../views/admin/AdminRequests.vue";
import AdminUserEdit from "../views/admin/AdminUserEdit.vue";
import AdminAcceptRequest from "../views/admin/AdminAcceptRequest.vue";
import AdminJob from "../views/admin/AdminJob.vue";
import AdminJobEdit from "../views/admin/AdminJobEdit.vue";
import AdminJobCreate from "../views/admin/AdminJobCreate.vue";
import store from "@/store";

const adminRouter = {
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
      path: "job",
      name: "adminJobs",
      component: AdminJob
    },
    {
      path: "job/:id",
      name: "adminJobEdit",
      component: AdminJobEdit
    },
    {
      path: "job/create",
      name: "adminJobCreate",
      component: AdminJobCreate
    }
  ],
  beforeEnter(to, from, next) {
    if (store.getters["auth/isStaff"]) {
      next();
    } else {
      store.dispatch("auth/initialize");
      const checkSU = () => {
        if (store.getters["auth/isStaff"]) {
          next();
        } else {
          next({ name: "adminLogin" });
        }
      };
      setTimeout(checkSU, 1000);
    }
  }
};

export default adminRouter;

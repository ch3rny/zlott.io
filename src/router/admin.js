import AdminIndex from "../views/admin/AdminIndex.vue";
import AdminUsers from "../views/admin/AdminUsers.vue";
import AdminCreateUser from "../views/admin/AdminCreateUser.vue";
import AdminRequests from "../views/admin/AdminRequests.vue";
import AdminUserEdit from "../views/admin/AdminUserEdit.vue";
import AdminAcceptRequest from "../views/admin/AdminAcceptRequest.vue";
import AdminInDev from "../views/admin/AdminInDev.vue";
import store from "@/store";

const adminRouter = {
  path: "/admin_32xtv",
  name: "admin",
  component: AdminIndex,
  redirect: { name: "adminUsers" },
  children: [
    {
      path: "/users",
      name: "adminUsers",
      component: AdminUsers
    },
    {
      path: "/users/:id",
      name: "adminUserEdit",
      component: AdminUserEdit
    },
    {
      path: "/users/create",
      name: "adminUserCreate",
      component: AdminCreateUser
    },
    {
      path: "/requests",
      name: "adminRequests",
      component: AdminRequests
    },
    {
      path: "/requests/:id",
      name: "adminRequestsAccept",
      component: AdminAcceptRequest
    },
    {
      path: "/indev",
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
};

export default adminRouter;

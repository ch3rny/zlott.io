// admin pages
import AdminIndex from "../views/admin/AdminIndex.vue";
import AdminUsers from "../views/admin/AdminUsers.vue";
import AdminCreateUser from "../views/admin/AdminCreateUser.vue";
//import AdminInfo from "../views/admin/AdminInfo.vue";
import AdminRequests from "../views/admin/AdminRequests.vue";
import AdminUserEdit from "../views/admin/AdminUserEdit.vue";
import AdminAcceptRequest from "../views/admin/AdminAcceptRequest.vue";
import AdminInDev from "../views/admin/AdminInDev.vue";
//
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
      path: "requests/:id",
      name: "adminRequestsAccept",
      component: AdminAcceptRequest
    },
    {
      path: "in-dev",
      name: "adminJobs",
      component: AdminInDev
    }
  ]
};

export default adminRouter;

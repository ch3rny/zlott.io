import JobPage from "../views/job/JobPage.vue";
import JobCreate from "../views/job/JobCreate.vue";
import JobTalents from "../views/job/JobTalents.vue";
import JobEdit from "../views/job/JobEdit.vue";
import AdminInDev from "../views/admin/AdminInDev.vue";

const jobRouter = {
  path: "/job",
  name: "job",
  component: JobPage,
  redirect: { name: "jobTalentFeed", params: { id: 1 } },
  children: [
    {
      path: "create",
      name: "jobCreate",
      component: JobCreate
    },
    {
      path: ":id/talents",
      name: "jobTalentFeed",
      component: JobTalents
    },
    {
      path: ":id/",
      name: "jobEdit",
      component: JobEdit
    },
    {
      path: "email",
      name: "jobEmails",
      component: AdminInDev
    },
    {
      path: "manage",
      name: "jobManage",
      component: AdminInDev
    }
  ]
};

export default jobRouter;

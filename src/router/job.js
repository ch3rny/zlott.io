import JobPage from "../views/job/JobPage.vue";
import JobCreate from "../views/job/JobCreate.vue";
import JobTalents from "../views/job/JobTalents.vue";
import AdminInDev from "../views/admin/AdminInDev.vue";
const jobRouter = {
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
  ]
};

export default jobRouter;

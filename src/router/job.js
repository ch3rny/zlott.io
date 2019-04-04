import JobPage from "../views/job/JobPage.vue";
import JobCreate from "../views/job/JobCreate.vue";
import JobCandidates from "../views/job/JobCandidates.vue";
import AdminInDev from "../views/admin/AdminInDev.vue";
const jobRouter = {
  path: "/job",
  name: "job",
  component: JobPage,
  redirect: { name: "jobCandidates" },
  children: [
    {
      path: "create",
      name: "jobCreate",
      component: JobCreate
    },
    {
      path: "candidates",
      name: "jobCandidates",
      component: JobCandidates
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

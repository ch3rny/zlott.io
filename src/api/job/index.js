import axios from "axios";
import { BASE_URL } from "@/api";

const getJobs = owner => axios.get(`${BASE_URL}/job/?owner=${owner}`); //add user id filter
const getJobsAdmin = () => axios.get(`${BASE_URL}/job/`);
const postJob = payload => axios.post(`${BASE_URL}/job/`, payload);
const getJob = id => axios.get(`${BASE_URL}/job/${id}/`);
const patchJob = (id, payload) =>
  axios.patch(`${BASE_URL}/job/${id}/`, payload);
const deleteJob = (id, payload) =>
  axios.delete(`${BASE_URL}/job/${id}/`, payload);

export default {
  getJobs,
  getJobsAdmin,
  postJob,
  getJob,
  patchJob,
  deleteJob
};

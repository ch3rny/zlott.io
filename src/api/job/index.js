import axios from "axios";
import { BASE_URL } from "@/api";

const getJobs = user => axios.get(`${BASE_URL}/jobs/`); //add user id filter
const postJobs = payload => axios.post(`${BASE_URL}/jobs/`, payload);
const getJob = id => axios.get(`${BASE_URL}/jobs/${id}`);
const patchJob = id => axios.patch(`${BASE_URL}/jobs/${id}`);
const deleteJob = id => axios.delete(`${BASE_URL}/jobs/${id}`);

export default {
  getJobs,
  postJobs,
  getJob,
  patchJob,
  deleteJob
};

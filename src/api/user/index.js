import axios from "axios";
import { BASE_URL } from "@/api";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const getRequests = () => axios.get(`${BASE_URL}/api-v1/request-account/`);
const getRequest = id => axios.get(`${BASE_URL}/api-v1/request-account/${id}`);
const postRequest = payload =>
  axios.post(`${BASE_URL}/api-v1/request-account/`, payload);
const deleteRequest = id =>
  axios.delete(`${BASE_URL}/api-v1/request-account/${id}`);
///
const getUsers = () => axios.get(`${BASE_URL}/api-v1/users/`);
const getUser = id => axios.get(`${BASE_URL}/api-v1/users/${id}/`);
const deleteUser = id => axios.delete(`${BASE_URL}/api-v1/users/${id}/`);
const patchUser = (id, payload) =>
  axios.patch(`${BASE_URL}/api-v1/users/${id}/`, payload);
const registerUser = payload =>
  axios.post(`${BASE_URL}/rest-auth/registration/`, payload);

export default {
  getRequests,
  getRequest,
  postRequest,
  deleteRequest,
  getUsers,
  getUser,
  deleteUser,
  patchUser,
  registerUser
};

import axios from "axios";
import { BASE_URL } from "@/api";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const login = payload => axios.post(`${BASE_URL}/rest-auth/login/`, payload);

const logout = () => axios.post(`${BASE_URL}/rest-auth/logout/`);

const getUser = () => axios.get(`${BASE_URL}/rest-auth/user/`)

const resetAccountPassword = payload =>
  axios.post(`${BASE_URL}/rest-auth/password/reset/`, payload);

export default {
  login,
  logout,
  resetAccountPassword,
  getUser
};

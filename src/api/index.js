export const BASE_URL = "http://51.15.57.213:8000/api-v1";

import auth from "./auth";
import user from "./user";
import job from "./job";

import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
  auth,
  user,
  job
};

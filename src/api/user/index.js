import axios from "axios";
import { BASE_URL } from "@/api";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const getRequests = () => axios.get('/data/requests.json');

const getUsers = () => axios.get('/data/users.json');

export default {
  getRequests,
  getUsers
};

import api from "@/api";
import axios from "axios";
import {
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_TOKEN,
  SET_TOKEN,
  GET_USER
} from "./types";

const ADMIN_TOKEN_STORAGE_KEY = "ADMIN_TOKEN_STORAGE_KEY";
const REMEMBER_USER_FLAG = "REMEMBER_USER_FLAG";
const initialState = {
  authenticating: false,
  error: false,
  token: null,
  user: {}
};

const getters = {
  isAuthenticated: state => !!state.token,
  errorLogin: state => state.error,
  user: state => state.user,
  isSuperuser: state => state.user.is_superuser
};

const actions = {
  login({ commit }, payload) {
    commit(LOGIN_BEGIN);
    return api.auth
      .login(payload)
      .then(({ data }) => {
        commit(SET_TOKEN, data.key);
        api.auth.getUser().then(res => commit(GET_USER, res.data));
      })
      .then(() => {
        commit(LOGIN_SUCCESS);
      })

      .catch(() => commit(LOGIN_FAILURE));
  },
  logout({ commit }) {
    return api.auth
      .logout()
      .then(() => commit(LOGOUT))
      .finally(() => commit(REMOVE_TOKEN));
  },
  initialize({ commit }) {
    const token = localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY);
    if (token) {
      commit(SET_TOKEN, token);
      api.auth.getUser().then(res => commit(GET_USER, res.data));
    } else {
      commit(REMOVE_TOKEN);
    }
  },
  rememberUser({ commit }, flag) {
    commit(REMEMBER_USER, flag);
  },
  removeToken({ commit }) {
    commit(REMOVE_TOKEN);
  }
};

const mutations = {
  [LOGIN_BEGIN](state) {
    state.authenticating = true;
    state.error = false;
  },
  [LOGIN_FAILURE](state) {
    state.authenticating = false;
    state.error = true;
  },
  [LOGIN_SUCCESS](state) {
    state.authenticating = false;
    state.error = false;
  },
  [LOGOUT](state) {
    state.authenticating = false;
    state.error = false;
  },
  [SET_TOKEN](state, token) {
    localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, token);
    axios.defaults.headers.Authorization = `Token ${token}`;
    state.token = token;
  },
  [REMOVE_TOKEN](state) {
    localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY);
    delete axios.defaults.headers.Authorization;
    state.token = null;
  },
  [GET_USER](state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

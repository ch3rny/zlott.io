import api from "@/api";
import axios from "axios";
import {
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_TOKEN,
  SET_TOKEN,
  REMEMBER_USER,
  GET_USER
} from "./types";

const TOKEN_STORAGE_KEY = "TOKEN_STORAGE_KEY";
const REMEMBER_USER_FLAG = "REMEMBER_USER_FLAG";
const initialState = {
  authenticating: false,
  error: false,
  token: null,
  remember: false,
  user: {}
};

const getters = {
  isAuthenticated: state => !!state.token,
  isRemembered: state => state.remember,
  errorLogin: state => state.error,
  user: state => state.user,
  isSuperuser: state => state.user.is_superuser,
  isStaff: state => state.user.is_staff
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
    const remember = localStorage.getItem(REMEMBER_USER_FLAG);
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
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
    localStorage.setItem(REMEMBER_USER_FLAG, false);
    state.remember = false;
    state.user = {};
  },
  [SET_TOKEN](state, token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    axios.defaults.headers.Authorization = `Token ${token}`;
    state.token = token;
  },
  [REMOVE_TOKEN](state) {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    delete axios.defaults.headers.Authorization;
    state.token = null;
  },
  [REMEMBER_USER](state, flag) {
    localStorage.setItem(REMEMBER_USER_FLAG, flag);
    state.remember = flag;
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

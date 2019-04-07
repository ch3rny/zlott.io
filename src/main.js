import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "@/router/index.js";
import store from "@/store";
import "./assets/scss/main.scss";
import VeeValidate from "vee-validate";

import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

Sentry.init({
  dsn: "https://efebe1c3a488491fad1d1e052dfce5de@sentry.io/1433037",
  debug: true,
  integrations: [
    new Integrations.Vue({
      Vue,
      attachProps: true
    })
  ]
});

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

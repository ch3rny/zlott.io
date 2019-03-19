<template>
  <v-app>
    <v-layout wrap row>
      <v-flex xs12 md6 class="login-wrap">
        <v-layout align-center justify-center column>
          <router-link to="/" class="logo">
            <img :src="require('@/assets/images/logo.svg')" contain height="20" width="90">
          </router-link>
          <h1>Forgot password</h1>
          <div class="form login">
            <form role="form">
              <div
                id="complete"
                class="alert"
                v-if="emailCompleted"
              >We have received your request. Please, check your email</div>
              <div
                id="error"
                class="alert red"
                v-if="emailError"
              >Something goes wrong. Try again please</div>
              <input
                type="email"
                id="regemail"
                placeholder="Registered email"
                required="required"
                v-model="email"
                v-on:keyup.enter="submitRecover(email)"
              >
              <v-btn
                :loading="loading"
                :disabled="loading"
                color="#02b875"
                block
                depressed
                @click="submitRecover(email)"
                class="submit-button"
              >Submit</v-btn>
            </form>
          </div>
          <router-link to="/login" class="forgot">Go back to Login</router-link>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6 class="accounts-wrap" v-show="$vuetify.breakpoint.mdAndUp">
        <v-layout align-center justify-center column class="carousel-wrap">
          <zlott-carousel/>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import ZlottCarousel from "@/components/ZlottCarousel.vue";
export default {
  name: "login",
  components: {
    ZlottCarousel
  },
  data() {
    return {
      error: false,
      loader: null,
      loading: false,
      email: ""
    };
  },
  computed: mapGetters("password", ["emailCompleted", "emailError"]),
  methods: {
    submitRecover(email) {
      const payload = { email: email };
      this.$store.dispatch("password/sendPasswordResetEmail", payload);
      this.email = "";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_animations.scss";
.logo {
  padding-top: 50px;
}
h1 {
  color: $login-color;
  font-size: 36px;
  line-height: 1.1;
  font-weight: 500;
  padding: 50px 0;
  margin: 20px 0 10px;
}
.form {
  margin: 0 20px;
  max-width: 380px;
  width: 100%;
}

.login-error {
  color: #9c0e0e;
  font-size: 16px;
  padding-bottom: 10px;
  font-weight: 700;
}

.remember-me {
  margin: 0 auto 15px;
}
.swing-enter-active {
  animation: swing 1s;
}
.swing-leave-active {
  animation: swing 1s reverse;
}
.forgot,
.request {
  margin: 20px auto;
  text-decoration: none;
  color: #88898b;
  &:hover {
    text-decoration: underline;
  }
}
.accounts-wrap {
  background-color: $login-color;
}
.carousel-wrap {
  width: 290px;
  height: 475px;
  margin: 50px auto;
  background-color: #cbcbcb;
  transform: rotate(2deg);
}
.alert {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #31708f;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.red {
  background-color: #ff6961;
}
</style>

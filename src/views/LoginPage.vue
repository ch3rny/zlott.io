<template>
  <v-app>
    <v-layout wrap row>
      <v-flex xs12 md6 class="login-wrap">
        <v-layout align-center justify-center column>
          <router-link to="/" class="logo">
            <img :src="require('@/assets/images/logo.svg')" contain height="20" width="90">
          </router-link>
          <h1>Login to Zlott</h1>
          <div class="form login">
            <form role="form" id="login-form">
              <input
                class="zlott-input"
                type="email"
                id="regemail"
                v-model="email"
                placeholder="Your email address"
                required="required"
              >
              <input
                class="zlott-input"
                type="password"
                id="pwd"
                v-model="password"
                placeholder="Your password"
                required="required"
                v-on:keyup.enter="login(email, password)"
              >
              <v-checkbox
                color="#02b875"
                label="Remember me"
                class="remember-me"
                v-model="rememberUser"
                hide-details
              />
              <transition name="swing">
                <div class="login-error text-xs-center" v-if="errorLogin">
                  Invalid login credentials.
                  <br>Please enter correct details.
                </div>
              </transition>
              <v-btn
                :loading="loading"
                :disabled="loading"
                color="#02b875"
                block
                depressed
                class="submit-button"
                @click="login(email, password)"
              >Log In</v-btn>
            </form>
          </div>
          <router-link to="/recover" class="forgot">I forgot my password</router-link>
          <router-link to="/request" class="request">Need an account? Request for one</router-link>
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
  name: "LoginPage",
  components: {
    ZlottCarousel
  },
  data() {
    return {
      error: false,
      loader: null,
      loading: false,
      email: "",
      password: "",
      rememberUser: false
    };
  },
  computed: mapGetters("auth", ["errorLogin"]),
  methods: {
    login(email, password) {
      const payload = {
        email: email,
        password: password
      };
      if (this.rememberUser) {
        this.$store.dispatch("auth/rememberUser", this.rememberUser);
      }
      this.$store.dispatch("auth/login", payload).then(() => {
        if (!this.errorLogin) {
          this.$router.push("/");
        }
      });
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
  color: $zlott-blue-color;
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
  background-color: $zlott-blue-color;
}
.carousel-wrap {
  width: 290px;
  height: 475px;
  margin: 50px auto;
  background-color: #cbcbcb;
  transform: rotate(2deg);
}
</style>

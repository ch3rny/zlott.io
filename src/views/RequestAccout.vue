<template>
  <v-app>
    <v-layout wrap row>
      <v-flex xs12 md6 class="login-wrap">
        <v-layout align-center justify-center column>
          <router-link to="/" class="logo">
            <img :src="require('@/assets/images/logo.svg')" contain height="20" width="90">
          </router-link>
          <h1>Request for account</h1>
          <div class="form login">
            <form role="form">
              <div
                class="alert"
                v-if="send"
              >We have received your request and will get in touch with you within 2 days</div>
              <input
                class="zlott-input"
                type="text"
                id="regname"
                placeholder="Your username"
                required="required"
                v-model="username"
              >
              <input
                class="zlott-input"
                type="text"
                id="regecompany"
                placeholder="Company name"
                required="required"
                v-model="companyName"
              >
              <input
                class="zlott-input"
                type="email"
                id="regemail"
                placeholder="Company email"
                required="required"
                v-model="email"
                v-on:keyup.enter="submitRequest(username,companyName,email)"
              >
              <v-btn
                id="loginbutton"
                :loading="loading"
                :disabled="loading"
                color="#02b875"
                block
                depressed
                @click="submitRequest(username,companyName,email)"
                class="submit-button"
              >Submit</v-btn>
            </form>
          </div>
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
import api from "@/api";
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
      username: "",
      companyName: "",
      email: "",
      send: false
    };
  },
  methods: {
    submitRequest(username, companyName, email) {
      const payload = {
        name: username,
        company: companyName,
        email: email
      };
      api.user.postRequest(payload).then(res => {
        if (res.status == 201) {
          this.username = "";
          this.companyName = "";
          this.email = "";
          this.send = true;
        } else {
          console.log("smth goe wrong");
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
.alert {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #31708f;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>

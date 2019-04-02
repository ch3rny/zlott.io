<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Welcome to Zlott.io Dashboard</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" label="Email" v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" label="Password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-alert
                :value="alert"
                color="error"
                icon="warning"
                outline
                class="mx-3"
              >Please enter the correct username and password for the staff account. Note that both fields may be case-sensitive.</v-alert>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()" :loading="loading" :disabled="loading">
                  Login
                  <template v-slot:loader>
                    <span class="custom-loader">
                      <v-icon light>cached</v-icon>
                    </span>
                  </template>
                </v-btn>
                <v-btn color="primary" to='/'>Exit</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      alert: false
    };
  },
  computed: mapGetters("dashboard", ["errorLogin", "isSuperuser"]),
  methods: {
    login() {

      const payload = {
        email: this.email,
        password: this.password
      };
      this.loading = true;

      this.$store.dispatch("dashboard/login", payload).then(() => {
        if (this.errorLogin) {
          this.alert = true;
          this.loading = false;
        } else {
          if (this.isSuperuser) {
            this.$router.push({ name: "admin" });
          } else {
            this.alert = true;
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>


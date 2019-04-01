<template>
  <v-layout wrap>
    <v-flex xs12>
      <p class="title">Confirm User Request</p>
    </v-flex>
    <v-flex xs12 md8 lg6>
      <form>
        <v-text-field
          v-model="user.name"
          v-validate="'required|max:150'"
          :counter="150"
          :error-messages="errors.collect('username')"
          label="Username"
          data-vv-name="username"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.company"
          v-validate="'required|max:150'"
          :counter="150"
          :error-messages="errors.collect('company')"
          label="Company"
          data-vv-name="company"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.first_name"
          v-validate="'required|max:150'"
          :counter="150"
          :error-messages="errors.collect('firstName')"
          label="First Name"
          data-vv-name="firstName"
        ></v-text-field>
        <v-text-field
          v-model="user.last_name"
          v-validate="'required|max:150'"
          :counter="150"
          :error-messages="errors.collect('secondName')"
          label="Last Name"
          data-vv-name="secondName"
        ></v-text-field>
        <v-text-field
          v-model="password"
          v-validate="'required|min:6'"
          :error-messages="errors.collect('password')"
          label="Password"
          data-vv-name="password"
          required
          append-icon="sync"
          @click:append="generatePassword"
        ></v-text-field>
        <v-flex>
          <v-alert :value="error" type="error">
            <div v-for="(item, key,index) in error" :key="index">{{key}}: {{item}}</div>
          </v-alert>
        </v-flex>
        <v-btn @click="createUser()" color="#419bf9" dark>Create User</v-btn>
        <v-btn color="red" :to="{name: 'adminRequests'}" dark>Cancel</v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import api from "@/api";
import randomatic from "randomatic";
export default {
  data() {
    return {
      user: {},
      password: "",
      error: ""
    };
  },
  methods: {
    generatePassword() {
      this.password = randomatic("Aa0", 10);
    },
    createUser() {
      let payload = {
        username: this.user.name,
        email: this.user.email,
        password1: this.password,
        password2: this.password
      };
      let patchPayload = {
        company: this.company,
        first_name: this.firstName,
        last_name: this.lastName
      };
      api.user
        .registerUser(payload)
        .then(res => {
          if (res.status == 201) {
            api.user
              .patchUser(res.data.id, patchPayload)
              .then(console.log("modify"));
            api.user.deleteRequest(this.$route.params.id);
            this.$forceUpdate;
            this.$router.push({ name: "adminRequests" });
          }
        })
        .catch(err => (this.error = err.response.data));
    }
  },
  mounted() {
    api.user
      .getRequest(this.$route.params.id)
      .then(res => (this.user = res.data));
  }
};
</script>

<style scoped>
</style>
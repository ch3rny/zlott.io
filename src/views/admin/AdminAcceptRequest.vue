<template>
  <v-layout>
    <v-flex xs12 md8 lg6>
      <p class="title">Accepting User Request</p>
      <form>
        <v-text-field
          v-model="user.username"
          v-validate="'required|max:25'"
          :counter="25"
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
          v-validate="'required'"
          :error-messages="errors.collect('company')"
          label="Company"
          data-vv-name="company"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password1"
          v-validate="'required|min:6'"
          :error-messages="errors.collect('password1')"
          label="Password"
          data-vv-name="password1"
          required
          append-icon="sync"
          @click:append="generatePassword()"
        ></v-text-field>

        <v-btn @click="createUser()" color="#419bf9" dark>Create User</v-btn>
        <v-btn color="red" :to="{name: 'adminUsers'}" dark>Cancel</v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import randomatic from "randomatic";
export default {
  data() {
    return {
      user: { username: "", email: "", company: "", password1: "" }
    };
  },
  methods: {
    generatePassword() {
      this.$set(this.user, 'password1', randomatic("Aa0!", 10));
      this.$set(this.user, 'password2', this.user.password1);
      console.log('fgdf');
    },
    createUser() {
      console.log(this.user);
      
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.user);
  }
};
</script>

<style scoped>
</style>
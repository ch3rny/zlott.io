<template>
  <v-layout>
    <v-flex xs12 md8 lg6>
      <form>
        <v-text-field
          v-model="username"
          v-validate="'required|max:25'"
          :counter="25"
          :error-messages="errors.collect('username')"
          label="Username"
          data-vv-name="username"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="firstName"
          v-validate="'required|max:25'"
          :counter="25"
          :error-messages="errors.collect('firstName')"
          label="First Name"
          data-vv-name="firstName"
          required
        ></v-text-field>
        <v-text-field
          v-model="secondName"
          v-validate="'required|max:25'"
          :counter="25"
          :error-messages="errors.collect('secondName')"
          label="Second Name"
          data-vv-name="secondName"
          required
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
      username: "",
      email: "",
      firstName: "",
      secondName: "",
      password: ""
    };
  },
  methods: {
    generatePassword() {
      this.password = randomatic("Aa0!", 10);
    },
    createUser() {
      let payload = {
        username: this.username,
        email: this.email,
        first_name: this.firstName,
        second_name: this.secondName,
        password: this.password
      };
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <v-layout wrap>
    <v-flex xs12>
      <p class="title">Edit User Info</p>
    </v-flex>
    <v-flex xs12 md8 lg6>
      <form>
        <v-text-field
          v-model="user.username"
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
          required
        ></v-text-field>
        <v-text-field
          v-model="user.last_name"
          v-validate="'required|max:150'"
          :counter="150"
          :error-messages="errors.collect('lastName')"
          label="Last Name"
          data-vv-name="lastName"
          required
        ></v-text-field>
        <v-flex mb-4>
          <v-checkbox v-model="user.is_active" label="Active" hide-details/>
          <v-checkbox v-model="user.is_staff" label="Staff" hide-details/>
          <v-checkbox v-model="user.is_superuser" label="SUPERUSER" hide-details/>
        </v-flex>
        <v-btn @click="patchUser()" color="#419bf9" dark>Save</v-btn>
        <v-btn color="red" :to="{name: 'adminUsers'}" dark>Cancel</v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    patchUser() {
      api.user
        .patchUser(this.user.id, this.user)
        .then(this.$router.push({ name: "adminUsers" }))
        .catch(console.log("error on creating user"));
    }
  },
  mounted() {
    //api.user.getUsers().then(res => (this.user = res.data[0]));
    api.user.getUser(this.$route.params.id).then(res => (this.user = res.data));
  }
};
</script>

<style scoped>
</style>
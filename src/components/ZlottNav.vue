<template>
  <v-toolbar flat color="#f0f0f0">
    <v-layout>
      <v-container align-center justify-space-between row fill-height>
        <router-link to="/">
          <img :src="require('@/assets/images/logo.svg')" contain height="20" width="90">
        </router-link>
        <div class="links">
          <router-link class="nav-link" to="/">Team</router-link>
          <router-link class="nav-link" v-if="!isAuthenticated" to="/login">Login</router-link>
          <span v-else class="nav-link" @click="logout()">Logout</span>
        </div>
      </v-container>
    </v-layout>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ZlottNav",
  computed: mapGetters("auth", ["isAuthenticated"]),
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {

  max-width: 1170px;
}
</style>

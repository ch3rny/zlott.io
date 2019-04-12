<template>
  <span>
    <router-link class="nav-link" v-if="!isAuthenticated" to="/login">Login</router-link>
    <span v-else class="nav-link">
      {{user.username}}
      <v-menu bottom left offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>expand_more</v-icon>
          </v-btn>
        </template>
        <v-list class="elevation-0 py-0">
          <v-list-tile @click="logout()">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </span>
  </span>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserPanel",
  computed: mapGetters("auth", ["isAuthenticated", "user"]),
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
span {
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}
.menu_icon {
  margin-left: 10px;
}
</style>
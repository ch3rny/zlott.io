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
          <span v-else class="nav-link">
            {{user.username}}
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon large>expand_more</v-icon>
                </v-btn>
              </template>
              <v-list class="elevation-0">
                <v-list-tile :to="{name: 'admin'}">
                  <v-list-tile-action>
                    <v-icon>supervised_user_circle</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>Admin Page</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="logout()">
                  <v-list-tile-action>
                    <v-icon>input</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>Logout</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </span>
        </div>
      </v-container>
    </v-layout>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ZlottNav",
  computed: mapGetters("auth", ["isAuthenticated", "user"]),
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
.links {
  display: flex;
}
.nav-link {
  line-height: 48px !important;
}
</style>

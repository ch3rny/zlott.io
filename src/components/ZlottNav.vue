<template>
  <v-toolbar flat color="#f0f0f0">
    <v-layout fill-height>
      <v-container align-center justify-space-between row fill-height py-0>
        <router-link to="/">
          <img :src="require('@/assets/images/logo.svg')" contain height="20" width="90">
        </router-link>
        <div class="links">
          <router-link class="nav-link" to="/">Team</router-link>
          <user-panel></user-panel>
        </div>
      </v-container>
    </v-layout>
  </v-toolbar>
</template>

<script>
import UserPanel from "@/components/UserPanel.vue";
export default {
  name: "ZlottNav",
  components: {
    UserPanel
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1170px;
}
.links {
  display: flex;
  height: 100%;
  align-items: center;
}
</style>

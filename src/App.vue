<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("auth", ["isRemembered", "user"]),
  created() {
    this.$store.dispatch("auth/initialize");
  }
};
</script>

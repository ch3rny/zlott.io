<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("auth", ["isRemembered"]),
  created() {
    this.$store.dispatch("auth/initialize");
    if (!this.isRemembered) {
      this.$store.dispatch("auth/logout");
    }
  },
  
};
</script>

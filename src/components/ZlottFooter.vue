<template>
  <v-footer color="#3d4752" dark class="py-4">
    <v-layout>
      <v-container align-center justify-space-between row fill-height>
        <span>Copyright Zlott @ 2017</span>
        <img :src="require('@/assets/images/logo-white.svg')" contain height="20">
      </v-container>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: "ZlottFooter"
};
</script>

<style lang="scss" scoped>
.container {
  padding: 12px 24px;
  max-width: 1170px;
}
</style>

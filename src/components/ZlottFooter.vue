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


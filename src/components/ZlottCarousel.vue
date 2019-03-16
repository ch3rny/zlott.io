<template>
  <div class="carousel">
    <img v-if="index==1" :src="require('@/assets/images/accounts/profile-1.png')">
    <img v-if="index==2" :src="require('@/assets/images/accounts/profile-2.png')">
    <img v-if="index==3" :src="require('@/assets/images/accounts/profile-3.png')">
    <img v-if="index==4" :src="require('@/assets/images/accounts/profile-4.png')">
    <img v-if="index==5" :src="require('@/assets/images/accounts/profile-5.png')">
  </div>
</template>

<script>
export default {
  name: "ZlottCarousel",
  props: {
    interval: { type: Number, default: 2000 }
  },
  data() {
    return {
      index: 1,
      timer: null
    };
  },
  methods: {
    nextSlide() {
      this.index < 5 ? (this.index += 1) : (this.index = 1);
      this.timer = setTimeout(this.nextSlide, this.interval);
    }
  },
  mounted() {
    this.timer = setTimeout(this.nextSlide, this.interval);
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_animations.scss";
.carousel {
  transform: rotate(-2deg);
  background-color: #fff;
  position: relative;
  width: 290px;
  height: 475px;
  top: 0;
  left: 0;
  animation: rotating_card 2s infinite linear;
}
img {
  animation: blink 2s infinite;
}
</style>



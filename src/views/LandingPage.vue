<template>
  <v-app>
    <zlott-nav/>
    <v-content>
      <div class="banner">
        <v-container class="zlott-container">
          <v-layout wrap>
            <v-flex xs12 sm5 order-sm1 order-xs2>
              <v-layout align-left justify-center column fill-height>
                <h1 class="text-xs-center text-sm-left">
                  Build top engineering
                  teams 80% faster
                </h1>
                <v-btn
                  to="/job"
                  depressed
                  color="#0d97ff"
                  :class="{'demo_button my-5': true,
                  centered: $vuetify.breakpoint.smAndDown}"
                >Play demo</v-btn>
              </v-layout>
            </v-flex>
            <v-flex xs12 sm7 order-sm2 order-xs1>
              <v-img :src="require('@/assets/images/home1.png')" aspect-ratio="1.47"></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div class="testimonial">
        <v-container class="zlott-container">
          <v-layout wrap justify-center>
            <v-flex xs12 class="text-xs-center">
              <h3>Leading brands trust Zlott</h3>
            </v-flex>
            <v-flex xs12 sm5 md4 v-for="item in testimonials" :key="item.title">
              <zlott-testimonial v-bind="item"/>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div class="intro">
        <v-container class="zlott-container">
          <v-layout wrap justify-center>
            <v-flex xs12 class="text-xs-center">
              <h3>Leading brands trust Zlott</h3>
            </v-flex>
            <v-flex xs12 class="mb-5">
              <v-img
                max-width="900"
                :src="require('@/assets/images/zlott_intro.gif')"
                aspect-ratio
                contain
              ></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div class="build">
        <v-container class="zlott-container">
          <v-layout wrap justify-center>
            <v-flex xs12 class="text-xs-center">
              <h3>Let's build great teams with Zlott</h3>
            </v-flex>
            <v-flex xs12 class="mb-5">
              <v-layout wrap justify-center>
                <v-btn to="/job" depressed color="#0d97ff" class="demo_button">Play demo</v-btn>
                <v-btn
                  to="/request"
                  depressed
                  outline
                  color="#0d97ff"
                  class="demo_button"
                >Request account</v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-content>
    <zlott-footer/>
  </v-app>
</template>

<script>
import ZlottTestimonial from "@/components/ZlottTestimonial.vue";
import ZlottNav from "@/components/ZlottNav.vue";
import ZlottFooter from "@/components/ZlottFooter.vue";
export default {
  name: "LandingPage",
  components: {
    ZlottTestimonial,
    ZlottNav,
    ZlottFooter
  },
  data() {
    return {
      testimonials: [
        {
          title: "Skill quantified talent",
          text:
            "I instantly get all the <strong>intelligence on potential hires</strong> without having to scan through everybody’s <strong>open source contributions</strong>.",
          author: {
            avatar: "avatars/rahul_chari.png",
            name: "Rahul Chari",
            company: "CTO-PhonePe, Built Flipkart"
          }
        },
        {
          title: "Super Fast",
          text:
            "I accessed real top <strong>quality talent</strong> in <strong>less than 2 mins</strong>. Outbound hiring is the key to great team building and Zlott really helps with that.",
          author: {
            avatar: "avatars/sanjay_suri.png",
            name: "Sanjay Suri",
            company: "CTO - Nykaa"
          }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.demo_button {
  border-width: 2px;
  border-radius: 5px;
  font-size: 20px;
  width: 300px;
  height: 57px;
  color: #fff;
  z-index: 5;
}
.centered,
.v-image {
  margin: 0 auto;
}
.banner {
  border-bottom: 1px solid $border-color;
}

.build {
  background-color: #f4f4f4;
}
</style>

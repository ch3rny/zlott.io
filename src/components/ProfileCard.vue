<template>
  <v-card class="elevation-2 mb-4">
    <v-layout wrap>
      <v-flex xs12 sm2 align-center py-4 pl-4>
        <div class="title text-xs-center mt-5">{{user.name}}</div>
        <div class="profile__avatar">
          <img :src="user.avatar" alt="Avatar">
        </div>
      </v-flex>
      <v-flex xs12 sm7 lg8 pa-4>
        <div v-for="(summary, index) in user.summary" :key="index">
          <v-layout justify-start>
            <div class="progress">
              <v-progress-circular
                :value="summary.value"
                :color="getColor(summary.value)"
                :size="60"
                :width="6"
              >
                <span>{{summary.value}}%</span>
              </v-progress-circular>
            </div>
            <v-flex class="summary__info">
              <div class="title mb-2">{{summary.name}}</div>
              <ul>
                <li v-for="(item,index) in summary.items" :key="index" v-html="item"></li>
              </ul>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12 sm3 lg2 class="service-block">
        <v-layout column justify-center>
          <v-divider></v-divider>
          <v-flex py-2 px-3 @click="addToShortlist(user.name)" class="rigth-menu__item">
            <v-icon :class="{'active': addedToShortList}">bookmark_border</v-icon>
            <span :class="{'service-block__title': true, 'active': addedToShortList}">Shortlisted</span>
          </v-flex>
          <v-divider></v-divider>
          <v-flex py-2 px-3 @click="setNotInteressed()" class="rigth-menu__item">
            <v-icon :class="{'not-interessed': notInteressed}">cancel</v-icon>
            <span
              :class="{'service-block__title':true, 'not-interessed':notInteressed}"
            >Not interessed</span>
          </v-flex>
          <v-divider></v-divider>
          <v-flex pt-2 px-3>
            <a href="https://www.linkedin.com/" target="_blank" id="linkedin">
              <v-icon>fab fa-linkedin</v-icon>
              <span class="service-block__title">LinkedIn</span>
            </a>
          </v-flex>
          <v-flex py-2 px-3>
            <a href="https://stackoverflow.com" target="_blank" id="stackoverflow">
              <v-icon>fab fa-stack-overflow</v-icon>
              <span class="service-block__title">StackOverflow</span>
            </a>
          </v-flex>
          <v-flex pb-2 px-3>
            <a href="https://stackoverflow.com" target="_blank" id="blog">
              <v-icon>far fa-window-maximize</v-icon>
              <span class="service-block__title">Blog / Website</span>
            </a>
          </v-flex>
          <v-spacer></v-spacer>
          <v-divider></v-divider>
          <v-flex pa-2 px-3>
            <div class="service-block__profile-icon">
              <v-icon color="blue">fas fa-expand-arrows-alt</v-icon>
            </div>
            <div class="service-block__profile-link">See full Zlott profile</div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    user: { type: Object }
  },
  data() {
    return {
      addedToShortList: null,
      notInteressed: null
    };
  },
  methods: {
    addToShortlist(value) {
      this.addedToShortList = !this.addedToShortList;
      if (this.notInteressed) {
        this.notInteressed = null;
      }
      this.$emit("clicked", value);
    },
    setNotInteressed() {
      this.notInteressed = !this.notInteressed;
      if (this.addedToShortList) {
        this.addedToShortList = false;
      }
      this.$emit("clicked", this.user.name);
    },
    getColor(value) {
      switch (true) {
        case value >= 0 && value <= 19:
          return "#ff0000";
        case value >= 20 && value <= 39:
          return "#ff7400";

        case value >= 40 && value <= 59:
          return "#fff400";

        case value >= 60 && value <= 79:
          return "#69bf37";

        case value >= 80:
          return "#499658";

        default:
          return "#499658";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.profile__avatar {
  margin: 10px auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px #999 solid;
  img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
  }
}
.progress {
  width: 75px;
  padding-right: 15px;
  text-align: center;
  span {
    color: #000;
    font-weight: 500;
  }
}
.summary__info {
  margin-bottom: 20px;
}
.service-block {
  border-left: 1px solid #e4e4e4;
}
.service-block__title {
  color: #999;
  font-weight: 500;
  margin-left: 7px;
}
.service-block__profile-icon {
  display: inline-flex;
}
.service-block__profile-link {
  display: inline-flex;
  color: $zlott-blue-color;
  font-weight: 500;
  margin-left: 7px;
}
.rigth-menu__item {
  cursor: pointer;
}
.active {
  color: $zlott-blue-color;
}
.not-interessed {
  color: red;
}
#linkedin:hover * {
  color: $zlott-blue-color;
}
#stackoverflow:hover * {
  color: #f48024;
}
#blog:hover * {
  color: $zlott-green-color;
}
</style>
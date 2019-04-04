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
        <div v-for="(summary, index) in profileInfo.summary" :key="index">
          <v-layout justify-start>
            <div class="progress">
              <v-progress-circular :value="summary.value" color="#499658" :size="60" :width="6">
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
          <v-flex py-2 px-3>
            <v-icon>bookmark_border</v-icon>
            <span class="service-block__title">Shortlisted</span>
          </v-flex>
          <v-divider></v-divider>
          <v-flex py-2 px-3>
            <v-icon>cancel</v-icon>
            <span class="service-block__title">Not interessed</span>
          </v-flex>
          <v-divider></v-divider>
          <v-flex pt-2 px-3>
            <v-icon>fab fa-linkedin</v-icon>
            <span class="service-block__title">LinkedIn</span>
          </v-flex>
          <v-flex py-2 px-3>
            <v-icon>fab fa-stack-overflow</v-icon>
            <span class="service-block__title">StackOverflow</span>
          </v-flex>
          <v-flex pb-2 px-3>
            <v-icon>far fa-window-maximize</v-icon>
            <span class="service-block__title">Blog / Website</span>
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
    width: 90px;
    height: 90px;
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
</style>
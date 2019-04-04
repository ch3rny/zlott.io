<template>
  <v-app>
    <v-layout pa-4 wrap row align-start justify-start>
      <v-flex xs12 md9 lg10>
        <v-layout>
          <div class="title">
            Viewing: All (10)
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>expand_more</v-icon>
                </v-btn>
              </template>

              <v-list class="elevation-0">
                <v-list-tile v-for=" i in 3" :key="i" @click>
                  <v-list-tile-title>Menu Item{{ i }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
          <v-spacer></v-spacer>
          <v-btn depressed color="white" class="load-more__button">Load 10 more profiles</v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs12 md9 lg10>
        <v-card class="elevation-2 mb-4" v-for="(profileInfo, index) in profileInfo" :key="index">
          <v-layout wrap>
            <v-flex xs12 sm2 align-center py-4 pl-4>
              <div class="title text-xs-center mt-5">{{profileInfo.name}}</div>
              <div class="profile__avatar">
                <img src="https://avatars.githubusercontent.com/u/39938?" alt="Avatar">
              </div>
            </v-flex>
            <v-flex xs12 sm7 lg8 pa-4>
              <div v-for="(summary, index) in profileInfo.summary" :key="index">
                <v-layout justify-start>
                  <div class="progress">
                    <v-progress-circular
                      :value="summary.value"
                      color="#499658"
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
      </v-flex>
      <v-flex xs12 md3 lg2 px-2>
        <v-btn block dark flat depressed class="mail_button">
          <v-icon left dark>email</v-icon>
          Craft emails to
          <br>All shortlisted (1)
        </v-btn>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      profileInfo: [
        {
          name: "Rahul Dhore",
          summary: [
            {
              name: "SKILL LEVEL",
              value: 100,
              items: [
                "Experience in Front-end, Mobile",
                "Top 5% in developer in <strong>Javascript</strong> globally. Also strong is <strong>CSS</strong>",
                "Knows frameworks: <strong>Angular, React, Backbone</strong>"
              ]
            },
            {
              name: "EXPERIENCE LEVEL",
              value: 100,
              items: [
                "Work experience: <strong>8 years</strong>",
                "<strong>90%</strong> of experience with service companies",
                "Currently: <strong>Frontend Developer with Tech9</strong>",
                "Studied from Saurashta University"
              ]
            },
            {
              name: "SWITCH PROBABILITY",
              value: 100,
              items: [
                "Currently working in: <strong>Pune</strong>",
                "Spends ~ <strong>1 year</strong> in a company",
                "In current role for ~ <strong>1 year</strong>"
              ]
            }
          ]
        },
        {
          name: "Rahul Dhore",
          summary: [
            {
              name: "SKILL LEVEL",
              value: 100,
              items: [
                "Experience in Front-end, Mobile",
                "Top 5% in developer in <strong>Javascript</strong> globally. Also strong is <strong>CSS</strong>",
                "Knows frameworks: <strong>Angular, React, Backbone</strong>"
              ]
            },
            {
              name: "EXPERIENCE LEVEL",
              value: 100,
              items: [
                "Work experience: <strong>8 years</strong>",
                "<strong>90%</strong> of experience with service companies",
                "Currently: <strong>Frontend Developer with Tech9</strong>",
                "Studied from Saurashta University"
              ]
            },
            {
              name: "SWITCH PROBABILITY",
              value: 100,
              items: [
                "Currently working in: <strong>Pune</strong>",
                "Spends ~ <strong>1 year</strong> in a company",
                "In current role for ~ <strong>1 year</strong>"
              ]
            }
          ]
        },
        {
          name: "Rahul Dhore",
          summary: [
            {
              name: "SKILL LEVEL",
              value: 100,
              items: [
                "Experience in Front-end, Mobile",
                "Top 5% in developer in <strong>Javascript</strong> globally. Also strong is <strong>CSS</strong>",
                "Knows frameworks: <strong>Angular, React, Backbone</strong>"
              ]
            },
            {
              name: "EXPERIENCE LEVEL",
              value: 100,
              items: [
                "Work experience: <strong>8 years</strong>",
                "<strong>90%</strong> of experience with service companies",
                "Currently: <strong>Frontend Developer with Tech9</strong>",
                "Studied from Saurashta University"
              ]
            },
            {
              name: "SWITCH PROBABILITY",
              value: 100,
              items: [
                "Currently working in: <strong>Pune</strong>",
                "Spends ~ <strong>1 year</strong> in a company",
                "In current role for ~ <strong>1 year</strong>"
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.load-more__button {
  border: 1px #999 solid;
  border-radius: 10px;
  color: green;
  text-transform: none;
}
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
.mail_button {
  height: 60px;
  border-radius: 10px;
  background-color: $zlott-blue-color;
  text-transform: none;
}
</style>

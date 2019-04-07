<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-layout justify-space-around column fill-height>
        <v-flex>
          <v-toolbar flat class="transparent" dense>
            <v-list class="pa-0">
              <v-list-tile avatar>
                <router-link to="/">
                  <img :src="require('@/assets/images/logo.svg')" contain height="20" width="90">
                </router-link>
                <v-spacer></v-spacer>
                <v-icon>search</v-icon>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-list class="pt-0" dense three-line>
            <v-divider></v-divider>
            <v-list-tile>
              <span class="jobs__title">Jobs ({{jobs.length}})</span>
            </v-list-tile>
            <v-list-tile v-for="(item, index) in jobs" :key="index" @click>
              <v-list-tile-content class="jobs__item">
                <v-list-tile-title>{{ item.position }}</v-list-tile-title>
                <v-list-tile-sub-title>({{ item.lang.toString()}})</v-list-tile-sub-title>
                <v-list-tile-sub-title>
                  <v-icon small>place</v-icon>
                  {{ item.location }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>

        <div class="create-button__block" v-ripple @click="createJob()">+ Create Job</div>
      </v-layout>
    </v-navigation-drawer>

    <v-toolbar flat class="transparent" dense tabs>
      <v-toolbar-side-icon @click="drawer = !drawer"/>

      <v-spacer></v-spacer>
      <div class="nav-tabs">
        <router-link to="/job/talents" tag="span">
          <a>
            <span>Talent Feed</span>
            <!-- <v-icon v-show="$vuetify.breakpoint.smAndDown">supervisor_account</v-icon> -->
          </a>
        </router-link>
        <!-- <router-link :to="{name: 'jobEmails'}" tag="span">
          <a>
            <span v-show="$vuetify.breakpoint.mdAndUp">Email shortlist</span>
            <v-icon v-show="$vuetify.breakpoint.smAndDown">email</v-icon>
          </a>
        </router-link>
        <router-link to="/job/manage-candidates" tag="span">
          <a>
            <span v-show="$vuetify.breakpoint.mdAndUp">Manage responded candidates</span>
            
            <v-icon v-show="$vuetify.breakpoint.smAndDown">import_export</v-icon>
          </a>
        </router-link>-->
      </div>
      <v-spacer></v-spacer>
      <user-panel></user-panel>
    </v-toolbar>
    <v-divider></v-divider>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import UserPanel from "@/components/UserPanel.vue";
export default {
  name: "JobPage",
  components: {
    UserPanel
  },
  data() {
    return {
      drawer: null,
      jobs: [
        {
          position: "Frontend Engeneer",
          lang: ["Javascript"],
          location: "San Francisco"
        },
        {
          position: "Technical Leader",
          lang: ["Javascript", "MySQL", "PostgreSQL"],
          location: "London"
        }
      ]
    };
  },
  methods: {
    createJob() {
      this.$router.push({
        name: "jobCreate"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.jobs__title {
  font-size: 18px;
  color: #999;
  font-weight: 500;
}
.jobs__item {
  color: #999;
  font-weight: 500;
}
.nav-bar__user-panel {
  font-size: 18px;
  font-weight: 500;
}
.create-button__block {
  height: 48px !important;
  line-height: 48px;
  padding-left: 24px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: $zlott-blue-color;
}
.nav-tabs {
  span {
    a {
      color: #999;
      font-size: 18px;
      text-decoration: none;
      padding: 0 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
    }

    &.router-link-exact-active {
      a {
        color: #000;
        font-weight: 500;
        &:after {
          position: absolute;
          content: "";
          height: 4px;
          bottom: -14px;
          left: 0;
          right: 0;
          width: 100%;
          background: #000;
        }
      }
    }
  }
}
</style>
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
            <v-list-tile
              v-for="(item, index) in jobs"
              :key="index"
              @click="goToCandidates(index, item.id)"
              :class="{'active': index==currentJob.index}"
            >
              <v-list-tile-content
                :class="{'jobs__item': true,
              'text-active': index==currentJob.index}"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>({{ item.data.role.toString()}})</v-list-tile-sub-title>
                <v-list-tile-sub-title>
                  <v-icon small :class="{'text-active': index==currentJob.index}">place</v-icon>
                  {{ item.data.location.toString() }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="index==currentJob.index" class="job_actions">
                <v-btn icon ripple @click.stop="goToJobEdit(item.id)">
                  <v-icon color="#419bf9">edit</v-icon>
                </v-btn>
                <v-btn icon ripple @click="openRemoveDialog(item.id)">
                  <v-icon color="red">delete</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-dialog v-model="removeDialog" max-width="320">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete selected Job?</v-card-title>
            <v-card-text>This operation can`t be canceled</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" flat="flat" @click="deleteJob(currentJob.id)">Yes</v-btn>
              <v-btn color="primary" flat="flat" @click="removeDialog = false">No</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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

import api from "@/api";
export default {
  name: "JobPage",
  components: {
    UserPanel
  },
  data() {
    return {
      drawer: null,
      jobs: [],
      currentJob: {
        index: 0,
        id: null
      },
      removeDialog: false
    };
  },
  //computed: mapGetters("auth", ["user"]),
  watch: {
    $route() {
      api.job.getJobs(this.user.id).then(res => (this.jobs = res.data)),
        this.$forceUpdate();
    }
  },
  methods: {
    createJob() {
      this.$router.push({
        name: "jobCreate"
      });
    },
    deleteJob(id) {
      const payload = {
        owner: this.user.id
      };
      api.job
        .deleteJob(id, payload)
        .then(
          this.jobs.splice(this.currentJob.index, 1),
          (this.removeDialog = false)
        );
    },
    openRemoveDialog(id) {
      this.removeDialog = true;
      this.currentJob.id = id;
    },
    goToJobEdit(id) {
      this.$router.push({
        name: "jobEdit",
        params: { id: id }
      });
    },
    goToCandidates(index, id) {
      this.currentJob.index = index;
      this.currentJob.id = id;

      this.$router.push({
        name: "jobTalentFeed",
        params: {
          id: id
        }
      });
    }
  },
  mounted() {
    api.auth.getUser().then(res => {
      api.job.getJobs(res.data.id).then(res => (this.jobs = res.data));
    });
  }
};
</script>
<style lang="scss" scoped>
.jobs__title {
  font-size: 18px;
  color: #999;
  font-weight: 500;
}
.active {
  background-color: #f5f5f5;
}
.text-active {
  color: $zlott-blue-color !important;
}
.jobs__item {
  color: #999;
  font-weight: 500;
}
.job_actions {
  flex-direction: row;
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
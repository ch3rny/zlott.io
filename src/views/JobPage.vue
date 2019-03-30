<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute>
      <v-layout justify-space-around column fill-height>
        <v-flex>
          <v-toolbar flat class="transparent">
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
            <v-list-tile v-for="(item, index) in jobs" :key="index" @click>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.position }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.lang.toString() }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>
                  <v-icon small>place</v-icon>
                  {{ item.location }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <div class="create-button__block" v-ripple>+ Create Job</div>
      </v-layout>
    </v-navigation-drawer>
    <v-container>
      <v-toolbar flat class="transparent">
        <v-toolbar-side-icon v-show="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer"/>
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
      <div class="gvo pa-4">gfsdgdf</div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "JobPage",
  data() {
    return {
      drawer: true,
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
  }
};
</script>
<style lang="scss" scoped>
div {
  font-family: "Roboto", sans-serif;
}
.create-button__block {
  height: 48px !important;
  line-height: 48px;
  text-align: center;
  cursor: pointer;
  color: white;
  background-color: $login-color;
}
.gvo {
  background-color: red;
}
</style>
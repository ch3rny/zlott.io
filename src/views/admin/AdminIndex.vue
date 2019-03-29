<template>
  <v-app>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :to="item.route">
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      height="56px"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      fixed
      flat
      color="#419bf9"
      dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>
        <router-link :to="{name: 'admin'}" tag="span" style="cursor: pointer">{{title}}</router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn flat large color="white" to="/">Log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: null,
      title: "Zlott.io Dashboard",
      items: [
        {
          icon: "supervisor_account",
          title: "Users",
          route: { name: "adminUsers" }
        },
        {
          icon: "group_add",
          title: "Requests",
          route: { name: "adminRequests" }
        },
        {
          icon: "work",
          title: "Jobs",
          route: { name: "adminJobs" }
        }
      ]
    };
  },
  computed: {},
  methods: {},
  created() {}
};
</script>
<style scoped>
</style>

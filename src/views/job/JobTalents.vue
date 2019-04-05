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
        <v-flex v-for="(item,index) in users" :key="index">
          <profile-card :user="item" @clicked="addToShortList"/>
        </v-flex>
      </v-flex>
      <v-flex xs12 md3 lg2 px-2>
        <v-btn :disabled="shortlist.length==0" block dark flat depressed class="mail_button">
          <v-icon left dark>email</v-icon>Craft emails to
          <br>
          All shortlisted ({{shortlist.length}})
        </v-btn>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import ProfileCard from "@/components/ProfileCard.vue";
import axios from "axios";
export default {
  components: {
    ProfileCard
  },
  data() {
    return {
      users: [],
      shortlist: []
    };
  },
  methods: {
    addToShortList(value) {
      const index = this.shortlist.indexOf(value);
      index >= 0 ? this.shortlist.splice(index, 1) : this.shortlist.push(value);
    }
  },
  mounted() {
    axios.get("/data/profiles.json").then(res => (this.users = res.data));
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

.mail_button {
  height: 60px;
  border-radius: 10px;
  background-color: $zlott-blue-color;
  text-transform: none;
}
</style>

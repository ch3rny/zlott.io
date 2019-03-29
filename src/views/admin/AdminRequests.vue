<template>
  <v-container grid-list-md pa-3>
    <v-layout>
      <v-flex>
        <p class="title">Users Requests</p>
        <v-card>
          <v-card-title>
            Search users
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="users" :search="search" >
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.pk }}</td>
              <td class="text-xs-left">{{ props.item.username}}</td>
              <td class="text-xs-left">{{ props.item.company }}</td>
              <td class="text-xs-left">{{ props.item.email }}</td>
              <td class="text-xs-left">
                <v-icon small class="mr-2" @click="editItem(props.item)" color="blue">person_add</v-icon>
                <v-icon small @click="deleteItem(props.item)" color="red">delete</v-icon>
              </td>
            </template>
            <v-alert
              v-slot:no-results
              :value="true"
              color="error"
              icon="warning"
            >Your search for "{{ search }}" found no results.</v-alert>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", align: "left", value: "pk" },
        { text: "User Name", align: "left", value: "username" },
        { text: "Company", align: "left", value: "company" },
        { text: "Company Mail", align: "left", value: "email" },
        { text: "Actions", align: "left", sortable: false }
      ],
      users: []
    };
  },
  methods: {
    editItem(item) {
      localStorage.user = JSON.stringify(item);
      this.$router.push({name: "adminRequestsAccept"})
    },
    deleteItem(item) {
      this.users.splice(this.users.indexOf(item), 1);
      localStorage.requests = JSON.stringify(this.users);
    }
  },
  mounted() {
    if (localStorage.requests) {
      this.users = JSON.parse(localStorage.requests);
    } else api.user.getRequests().then(res => (this.users = res.data));
  }
};
</script>
<style lang="scss" scoped>
</style>

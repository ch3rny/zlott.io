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
          <v-data-table :headers="headers" :items="users" :search="search" :loading="loading">
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.id }}</td>
              <td class="text-xs-left">{{ props.item.name}}</td>
              <td class="text-xs-left">{{ props.item.company }}</td>
              <td class="text-xs-left">{{ props.item.email }}</td>
              <td class="text-xs-left">
                <v-icon small class="mr-2" @click="editItem(props.item.id)" color="blue">person_add</v-icon>
                <v-icon small @click="openRemoveDialog(props.item)" color="red">delete</v-icon>
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
    <v-flex>
      <v-dialog v-model="removeDialog" max-width="320">
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete selected request?</v-card-title>

          <v-card-text>This operation can`t be canceled</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="red" flat="flat" @click="deleteItem(selectedUser)">Yes</v-btn>

            <v-btn color="primary" flat="flat" @click="removeDialog = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-container>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", align: "left", value: "id" },
        { text: "User Name", align: "left", value: "name" },
        { text: "Company", align: "left", value: "company" },
        { text: "Company Mail", align: "left", value: "email" },
        { text: "Actions", align: "left", sortable: false }
      ],
      users: [],
      selectedUser: {},
      removeDialog: false,
      loading: true
    };
  },
  methods: {
    editItem(id) {
      this.$router.push({ name: "adminRequestsAccept", params: { id: id } });
    },
    deleteItem(item) {
      api.user
        .deleteRequest(item.id)
        .then(
          this.users.splice(this.users.indexOf(item), 1),
          (this.removeDialog = false)
        );
    },
    openRemoveDialog(item) {
      this.selectedUser = item;
      this.removeDialog = true;
    }
  },
  mounted() {
    api.user.getRequests().then(res => {
      this.users = res.data;
      this.loading = false;
    });
  },
};
</script>
<style lang="scss" scoped>
</style>

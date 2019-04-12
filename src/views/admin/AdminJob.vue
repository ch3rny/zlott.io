<template>
  <v-container grid-list-md pa-3>
    <v-layout>
      <v-flex>
        <p class="title">Jobs</p>
        <v-card>
          <div class="text-xs-center pt-2">
            <v-btn color="primary" :to="{name: 'adminJobCreate'}">Add New Job</v-btn>
          </div>
          <v-card-title>
            Search job
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="jobs" :search="search" :loading="loading">
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.id }}</td>
              <td class="text-xs-left">{{ props.item.title}}</td>
              <td class="text-xs-left">{{ props.item.owner}}</td>
              <td class="text-xs-left">{{ props.item.data.role.toString()}}</td>
              <td class="text-xs-left">{{ props.item.data.location.toString()}}</td>
              <td class="text-xs-left">{{ props.item.creation_time}}</td>
              <td class="text-xs-left">
                <v-icon small class="mr-2" @click="editItem(props.item.id)" color="blue">edit</v-icon>
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
          <v-card-title class="headline">Are you sure you want to delete this job?</v-card-title>

          <v-card-text>This operation can`t be canceled</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="red" flat="flat" @click="deleteJob(selectedJob.id)">Yes</v-btn>

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
        { text: "Title", align: "left", value: "title" },
        { text: "Owner", align: "left", value: "owner" },
        { text: "Roles", align: "left", value: "data.role" },
        { text: "Location", align: "left", value: "data.location" },
        { text: "Created", align: "left", value: "creation_time" },
        { text: "Actions", align: "left", sortable: false }
      ],
      jobs: [],
      selectedJob: {},
      removeDialog: false,
      loading: true
    };
  },
  methods: {
    editItem(id) {
      this.$router.push({ name: "adminJobEdit", params: { id: id } });
    },
    deleteJob(id) {
      api.job
        .deleteJob(id)
        .then(
          this.jobs.splice(this.jobs.indexOf(this.selectedJob), 1),
          (this.removeDialog = false)
        );
    },
    openRemoveDialog(item) {
      this.selectedJob = item;
      this.removeDialog = true;
    }
  },
  mounted() {
    api.job.getJobsAdmin().then(res => {
      this.jobs = res.data;
      this.loading = false;
    });
  }
};
</script>
<style lang="scss" scoped>
</style>

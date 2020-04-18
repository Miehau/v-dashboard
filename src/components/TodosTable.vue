<template>
  <div>
    <v-card>
      <v-card-title>
        Todo table
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="fas fa-search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="fields"
        :items="tableItems"
        :items-per-page="30"
        :loading="!tasks.length"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon class="mr-2" @click="markDone(item)">mdi-check</v-icon>
          <v-icon class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import TodosService from "@/services/TodosService";
export default {
  name: "TodosTable",
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: "",
      isBusy: false,
      fields: [
        { text: "Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Actions", value: "actions" }
      ],
      editedIndex: -1
    };
  },
  computed: {
    tableItems() {
      return this.tasks.slice();
    }
  },
  methods: {
    markDone(item) {
      let updatedItem = item;
      let editedIndex = this.tasks.indexOf(item);
      updatedItem.done = true;
      TodosService.update(updatedItem)
        .then(() => (this.tasks[editedIndex].done = true))
        .catch(error => console.log(error));
      console.log("Marking done: " + JSON.stringify(item));
    },
    editItem(item) {
      console.log("Editing item: " + JSON.stringify(item));
    },
    deleteItem(item) {
      console.log("Deleting item " + JSON.stringify(item));
      let editedIndex = this.tasks.indexOf(item);
      TodosService.delete(item.id)
        .then(() => this.tasks.splice(editedIndex, 1))
        .catch(error => console.log(error));
    }
  },
  created() {
    this.isBusy = true;
  }
};
</script>

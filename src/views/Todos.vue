<template>
  <div class="about">
    <v-container fluid>
      <v-row>
        <v-col cols="9">
          <TodosTable :tasks="items" />
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <TodosForm @task-added="addNewTask" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TodosTable from "@/components/TodosTable.vue";
import TodosForm from "@/components/TodosForm.vue";
import TodosService from "@/services/TodosService.js";

export default {
  name: "Todos",
  components: {
    TodosTable,
    TodosForm
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    addNewTask(task) {
      TodosService.add(task)
        .then(response => {
          this.items.push(response.data.data[0].attributes.task);
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    console.log("Created moment!");
    TodosService.getAllTodos()
      .then(response => {
        response.data.data.forEach(element => {
          this.items.push(element.attributes.task);
        });
        console.log(this.items);
      })
      .catch(error => console.log(error));
  }
};
</script>

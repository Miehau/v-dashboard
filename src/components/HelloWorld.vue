<template>
  <v-card class="mx-auto" max-width="344">
    <ListComponent listName="Tasks for today" :items="todos" />
  </v-card>
</template>

<script>
import ListComponent from "@/components/ListComponent.vue";
import TodosService from "@/services/TodosService.js";

export default {
  components: {
    ListComponent
  },
  name: "HelloWorld",

  data: () => ({
    todos: []
  }),
  mounted() {
    TodosService.getAllTodos()
      .then(response => {
        response.data.data.forEach(element => {
          this.todos.push(element.attributes.task);
        });
      })
      .catch(error => console.log(error));
  }
};
</script>

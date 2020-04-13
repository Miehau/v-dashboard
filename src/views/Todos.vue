<template>
  <div class="about">
    <TodosTable :tasks="items" />
    <TodosForm @task-added="addNewTask" />
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
    addNewTask() {}
  },
  mounted() {
    console.log("Created moment!");
    TodosService.getAllTodos().then(response => {
      console.log(response.data);
      response.data.data.forEach(element => {
        this.items.push(element.attributes.task);
      });
    });
  }
};
</script>

<template>
  <div class="about">
    <b-container fluid>
      <b-row>
        <b-col>
          <TodosTable :tasks='items' />
        </b-col>
        <b-col md="3">
          <TodosForm @task-added="addNewTask" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TodosTable from "@/components/TodosTable.vue";
import TodosForm from "@/components/TodosForm.vue";
import axios from "axios";

export default {
  name: "Todos",
  components: {
    TodosTable,
    TodosForm
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    addNewTask() {
      
    }
  },
  mounted() {
    console.log("Created moment!");
    axios.get(`${process.env.VUE_APP_BACKEND_SERVER_HOST}/tasks/all`).then(response => {
      console.log(response.data);
      response.data.data.forEach(element => {
        this.items.push(element.attributes.task);
      });
    });
  }
};
</script>
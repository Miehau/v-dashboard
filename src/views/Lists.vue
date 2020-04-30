<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col class="d-none d-sm-flex inline-flex">
          <ItemListList />
        </v-col>
        <v-col xs="12" sm="12" lg="7">
          <ListComponent :items="items" />
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="d-none d-sm-flex inline-flex">
          <TodosForm @task-added="addNewTask" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TodosForm from "@/components/TodosForm.vue";
import TodosService from "@/services/TodosService.js";
import ListComponent from "@/components/ListComponent.vue";
import ItemListList from "@/components/ItemListList.vue";

export default {
  name: "Lists",
  components: {
    TodosForm,
    ListComponent,
    ItemListList
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    addNewTask(task) {
      if (!task.name) {
        return;
      }
      TodosService.add(task)
        .then(response => {
          console.log(response)
          this.items.push(response.data.data[0].attributes.task);
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    console.log("Created moment!");
    TodosService.getAllTodos()
      .then(response => {
        console.log(response);
        response.data.data.forEach(element => {
          this.items.push(element.attributes.task);
        });
        console.log(this.items);
      })
      .catch(error => console.log(error));
  }
};
</script>

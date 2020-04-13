<template>
  <div>
    <v-data-table
      :headers="fields"
      :items="tasks"
      :items-per-page="5"
      :loading="!tasks.length"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
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
      isBusy: false,
      fields: [
        { text: "Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Done", value: "done" },
        { text: "Actions", value: "actions" }
      ]
    };
  },
  methods: {},
  created() {
    this.isBusy = true;
  }
};
</script>

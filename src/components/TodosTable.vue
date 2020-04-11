<template>
  <div>
    <b-table small :items="tasks" :fields="fields" :busy="!tasks.length" class="mt-3" hover bordered outlined>
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "TodosTable",
    props: {
      tasks:{
          type:Array,
          required : true
      }
  },
  data() {
    return {
      isBusy: false,
      fields: ["name", "description", "done", "actions"]
    };
  },
  methods: {},
  created() {
    this.isBusy = true;
  }
};
</script>

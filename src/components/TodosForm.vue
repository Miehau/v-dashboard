<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="name-group-1" label="Task:" v-if="show" label-for="task-name-input">
        <b-form-input
          id="task-name-input"
          v-model="form.taskName"
          placeholder="What do you want to do?"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="description-group-1"
        label="Description:"
        label-for="task-description-input"
      >
        <b-form-input
          id="task-description-input"
          v-model="form.taskDescription"
          placeholder="Details ...?"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        taskName: "",
        taskDescription: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      alert(JSON.stringify(this.form));
      this.$emit("task-added", this.form);
      this.form.taskName = "";
      this.form.taskDescription = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
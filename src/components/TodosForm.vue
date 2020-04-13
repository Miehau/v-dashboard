<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-text-field
            v-model="form.taskName"
            label="What do you want to do?"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="form.taskDescription"
            label="Details ...?"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-btn class="mr-4" @click="submit">submit</v-btn>
        </v-row>
      </v-container>
    </v-form>
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
    submit(e) {
      e.preventDefault();
      let task = {
        name: this.form.taskName,
        description: this.form.taskDescription
      };
      this.$emit("task-added", task);
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

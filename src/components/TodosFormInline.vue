<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="form.taskName" label="What do you want to do?" required></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="form.taskDescription" label="Details ...?" required></v-text-field>
          </v-col>
          <v-col>
            <v-combobox
              v-model="form.tags"
              chips
              clearable
              label="Tags"
              :items="previouslyUsedTags"
              multiple
              solo
            >
              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip v-bind="attrs" :input-value="selected" close @click="remove(item)">
                  <strong>{{ item }}</strong>
                </v-chip>
              </template>
            </v-combobox>
          </v-col>
          <v-btn class="mr-4" @click="submit">submit</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  // props: {
  //   tags: {
  //     type: Array
  //   }
  // },
  data() {
    return {
      form: {
        taskName: "",
        taskDescription: "",
        tags: []
      },
      show: true,
      previouslyUsedTags: ["ciastko", "karmel", "czekolada"]
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
    },
    remove(item) {
      this.form.tags.splice(this.form.tags.indexOf(item), 1);
      this.form.tags = [...this.form.tags];
    }
  }
};
</script>

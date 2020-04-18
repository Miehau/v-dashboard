<template>
  <v-container fluid style="max-width: 900px">
    <v-divider class="mt-4"></v-divider>
    <v-card>
      <v-card-title>
        {{ listName }}
        <v-spacer></v-spacer>
        <v-progress-circular :value="progress" :color="progressColor()" class="mr-2"></v-progress-circular>
      </v-card-title>
      <v-divider></v-divider>
      <v-row justify="space-around" no-gutters>
        <v-col cols="auto" align-self="center">
          <strong class="mx-4 success--text">Completed: {{ completedItems }}</strong>
        </v-col>
        <v-col cols="auto">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="auto" align-self="center">
          <strong class="mx-4 info--text">Remaining: {{ remainingItems }}</strong>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-slide-y-transition class="py-0" group>
        <template v-for="(item, i) in items">
          <v-divider v-if="i != 0" :key="`${i}-divider`"></v-divider>
          <v-list-item :key="`${i}-${item.name}`" @click="markDone(item)" two-line>
            <v-list-item-content>
              <v-list-item-title>
                <div
                  :class="{'grey--text' : item.done,'text-decoration: line-through': item.done,'primary--text': !item.done}"
                  v-text="item.name"
                ></div>
              </v-list-item-title>
              <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-scroll-x-transition>
              <v-icon v-if="item.done" color="success">mdi-check</v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
import TodosService from "@/services/TodosService";
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    listName: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  methods: {
    markDone(item) {
      let updatedItem = item;
      let editedIndex = this.items.indexOf(item);
      updatedItem.done = !updatedItem.done;
      TodosService.update(updatedItem)
        .then(() => {
          this.items[editedIndex].done = updatedItem.done;
        })
        .catch(error => console.log(error));
      console.log("Marking done: " + JSON.stringify(item));
    },
    progressColor() {
      let currentProgress = this.progress;
      if (currentProgress < 30) return "error";
      if (currentProgress < 60) return "orange";
      if (currentProgress < 80) return "blue";
      return "success";
    }
  },
  computed: {
    remainingItems() {
      return this.items.filter(item => !item.done).length;
    },
    completedItems() {
      return this.items.length - this.remainingItems;
    },
    progress() {
      return (this.completedItems / this.items.length) * 100;
    }
  }
};
</script>

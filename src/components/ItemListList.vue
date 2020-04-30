<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Lists:
        <v-spacer></v-spacer>
        <v-btn>
          <v-icon>fas fa-plus</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-slide-y-transition class="py-0" group>
        <template v-for="(list, i) in listNames">
          <v-list-item :key="`${i}-itemList`">
            <v-text-field
              @keydown.enter="submitChange(list)"
              v-if="editable"
              v-model="list.name"
            />
            <v-list-item-title v-if="!editable" @click="listSelected(list)">{{
              list.name
            }}</v-list-item-title>
            <v-divider vertical></v-divider>
            <v-list-item-action @click="edit(list)">
              <div>
                <v-icon>far fa-trash-alt</v-icon>
              </div>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
import ItemListService from "@/services/ItemListService.js";
export default {
  name: "ItemListList",
  data: () => ({
    listNames: [],
    editable: false
  }),
  methods: {
    listSelected(list) {
      console.log(`Selected ${JSON.stringify(list)}`);
    },
    deleteList(list) {
      console.log(`Deleting: ${JSON.stringify(list)}`);
    },
    edit() {
      this.editable = !this.editable;
    },
    submitChange(list) {
      console.log(`Changing list name: ${list.name}`);
      this.editable = !this.editable;
    }
  },
  mounted() {
    console.log("Created moment!");
    ItemListService.getAll()
      .then(response => {
        console.log(response);
        response.data.data.forEach(element => {
          this.listNames.push(element.attributes.itemList);
        });
        console.log(this.listNames);
      })
      .catch(error => console.log(error));
  }
};
</script>

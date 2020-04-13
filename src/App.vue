<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <div>
        <router-link :to="{name: 'Home'}">
          <v-btn color="primary" depressed>
            <v-icon>fas fa-braille</v-icon>
          </v-btn>
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'About'}">
          <v-btn color="primary" depressed>About</v-btn>
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'Todos'}">
          <v-btn color="primary" depressed>
            <v-icon>fas fa-list-ul</v-icon>
          </v-btn>
        </router-link>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>

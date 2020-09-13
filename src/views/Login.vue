<template>
  <main>
    <v-container fluid>
      <v-row align-content="center" justify="center">
        <v-col cols="3">
          <v-card>
            <v-form>
              <v-text-field counter v-model="form.username" label="Username" required></v-text-field>
              <v-text-field
                counter
                v-model="form.password"
                label="Password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                required
              ></v-text-field>
              <v-btn @click.prevent="login()">Login</v-btn>
            </v-form>
          </v-card>
          <v-card>
            <div class="container unauthenticated">
              With Google:
              <a href="http://localhost:9090/oauth2/authorize/google">click here</a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import LoginService from "@/services/LoginService.js";
export default {
  data: () => ({
    form: {
      username: "",
      password: ""
    },
    showPassword: false
  }),
  methods: {
    login() {
      console.log(this.form);
      this.form = {};
      LoginService.login().then(resp => console.log(resp));
    }
  }
};
</script>

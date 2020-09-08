<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left elevation="2">
      <v-toolbar-title>
        Scio Code
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="isDark = !isDark">
        <v-icon>{{ isDark ? "mdi-weather-night" : "mdi-weather-sunny" }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app clipped dark color="navDrawer">
      <v-row no-gutters justify="center">
        <v-list width="100%" dense rounded>
          <v-list-item-group v-model="currentRoute">
            <v-list-item v-for="route in routes"
                         v-bind:key="route.name"
                         @click="$router.push({path : route.path})"
                         :disabled="isCurrent(route)"
                         style="width: 90%; margin: auto"
                         dense
                         class="mb-2">
              <v-list-item-icon>
                <v-icon>{{ route.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ route.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-row>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import {RouteConfig} from "vue-router";

export default Vue.extend({
  name: "App",
  components: {},
  data: () => {
    return {
      currentRoute: 0,
    }
  },
  computed: {
    isDark: {
      get(): boolean {
        return this.$vuetify.theme.dark;
      },
      set(value: boolean) {
        this.$vuetify.theme.dark = value;
      }
    },
    routes: {
      get() {
        return this.$router.options.routes;
      }
    }
  },
  methods: {
    isCurrent(route: RouteConfig) {
      return this.$router.currentRoute.path === route.path
    }
  },
  mounted() {
    //set the initial route
    this.currentRoute = this.routes?.findIndex(item => item.path === this.$router.currentRoute.path) ?? 0;
  }
});
</script>

<style lang="css" scoped>
</style>

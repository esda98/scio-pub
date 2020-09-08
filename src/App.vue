<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left elevation="2">
      <v-app-bar-nav-icon @click="isSidebarCollapsed = !isSidebarCollapsed"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Scio Code
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="isDark = !isDark">
        <v-icon>{{ isDark ? "mdi-weather-night" : "mdi-weather-sunny" }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app clipped dark color="navDrawer" :mini-variant="isSidebarCollapsed">
      <v-row no-gutters justify="center">
        <v-list width="100%" dense rounded>
          <v-list-item-group v-model="currentRoute">
            <v-list-item v-for="route in routes"
                         v-bind:key="route.name"
                         @click="$router.push({path : route.path})"
                         :disabled="isCurrent(route)"
                         style="width: 100%;"
                         class="mb-2 pl-2">
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
      isSidebarCollapsed: false
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
  watch: {
    '$route' (to) {
      //update the current route when routing occurs. This does overwrite existing values done by the v-model (values will be equivalent) on the group
      //but is needed in case of refreshing on pages that are not "/". Without this, even on mounted for App.vue the value for the current route
      //will not be the route at the end of the refresh
      this.currentRoute = this.routes?.findIndex(item => item.path === to.path) ?? 1;
    }
  }
});
</script>

<style lang="css" scoped>
</style>

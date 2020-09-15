<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-tooltip bottom nudge-top="30">
            <template v-slot:activator="{ on, attrs }">
              <v-card-title v-on="on" v-bind="attrs">
                {{isDark ? 'Dark' : 'Light'}} Theme Colors
              </v-card-title>
            </template>
            <span>Use the icon in the top right to change the theme!</span>
          </v-tooltip>

          <v-list>
            <v-list-item  v-for="(x,key ) in (isDark ? $vuetify.theme.themes.dark : $vuetify.theme.themes.light)  " :key="key">
              <v-row dense>
                <v-menu bottom offset-y :close-on-content-click="false" max-width="300px">
                  <template v-slot:activator="{ on }">
                    <v-col>
                      <v-btn v-on="on" :style="`background-color:${x}; color:${getTextColorForHex(x)}; width: 100%; height: 65px;`" class="mb-1">{{ key }} : {{ x }}</v-btn>
                    </v-col>
                  </template>
                  <v-color-picker :value="x" mode="hexa" @input="changeColor($event,key)"></v-color-picker>
                </v-menu>
              </v-row>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col xs="12" md="6">
        <v-card>
          <v-card-title>Vuetify Theme Object</v-card-title>
          <pre class="px-4">{{themeObj}}</pre>

          <v-card-actions>
            <v-btn icon @click="copyThemeObj"><v-icon>mdi-content-copy</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
        v-model="showCopiedTextNotif"
        :timeout="timeout">
      Theme Copied!
      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="showCopiedTextNotif = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Color = require('color');

export default Vue.extend({
  name: "ThemeEditor",
  data: () => {
    return {
      timeout: 1500,
      showCopiedTextNotif: false
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
    themeObj: {
      get(): string {
        return JSON.stringify({
          theme: {
            themes: {
              light: this.$vuetify.theme.themes.light,
              dark: this.$vuetify.theme.themes.dark
            }
          }
        }, null, 2);
      }
    }
  },
  methods: {
    changeColor(value: string, key: string) {
      if (this.$vuetify.theme.dark) {
        const updateStr = ` this.$vuetify.theme.themes.dark.${key} = '${value}'`;
        eval(updateStr);
      } else {
        const updateStr = ` this.$vuetify.theme.themes.light.${key} = '${value}'`;
        eval(updateStr);
      }
    },
    getTextColorForHex(hex: string): string {
      const hexColor = Color(hex);
      const rgbVals = hexColor.rgb().array();
      let max = rgbVals[0];
      for (const val of rgbVals) {
        if (val > max) {
          max = val;
        }
      }
      if (max > 105) {
        return "black";
      } else {
        return "white";
      }
    },
    async copyThemeObj() {
      await this.$copyText(this.themeObj);
      this.showCopiedTextNotif = true;
    }
  }
})
</script>

<style scoped>

</style>
<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="headline" style="text-align: center">Welcome to Scio Code!</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" d-flex flex-column v-for="card in descriptionCards" v-bind:key="card.title">
        <scio-card :data="card"></scio-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" d-flex flex-column>
        <div class="headline" style="height: 100%; display: flex; justify-content: center; align-items: center;">Demos:</div>
      </v-col>
      <v-col cols="2" d-flex flex-column v-for="card in demoCards" v-bind:key="card.title">
        <scio-card :data="card"></scio-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ScioCard from "@/components/ScioCard.vue";
import {ScioCardData} from "@/classes/ComponentData/ScioCardData";
import {LinkButtonData} from "@/classes/ComponentData/LinkButtonData";

export default Vue.extend({
  name: "Home",
  components: { ScioCard },
  data: () => {
    return {
      descriptionCards: [
          new ScioCardData('Open Source',
            'Everything in Scio Code is fully open source on my GitHub! I am not currently accepting pull requests but the code is fully available under a GPLv3 license. You\'re able to pull all of the code, modify it however you\'d like, and use it however you like!',
            [new LinkButtonData('github', 'My GitHub', 'https://github.com/esda98')],
            true),
          new ScioCardData('Having Fun',
            'This platform is a lot of fun to develop and is a little hobby project of my own. I love programming and love doing these demos to show off the power of the frameworks available today!',
            [],
            true),
          new ScioCardData('Showing Off',
            'Scio Code is a collection of demos written as a portfolio for myself (Erik Abramczyk) to demonstrate the power of a Serverless architecture. You can learn more about Scio Code\'s Purpose, myself, and more on the About page!',
            [new LinkButtonData('help', 'About', '/about', true)],
          true)
      ],
      demoCards: [
          new ScioCardData('Theme Editor',
              'This demo shows how to modify the current Vuetify theme colors with an interactive color picker in real time! It also outputs the object for easy dropping into the Vueitfy object',
            [new LinkButtonData('palette', 'Theme Editor', '/theme-editor', true)],
          true)
      ]
    }
  },
});
</script>

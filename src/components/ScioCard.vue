<template>
  <v-card :style="`${locUniform ? 'height:100%' : ''}`" :class="`${locUniform ? 'flex d-flex flex-column' : '' }`">
    <v-card-title>{{ locTitle }}</v-card-title>
    <v-card-text class="flex"> {{ locBody }} </v-card-text>
    <v-card-actions>
      <link-button v-for="button in locButtons" v-bind:key="button.text" :data="button"></link-button>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import LinkButton from "@/components/LinkButton.vue";
import {ScioCardData} from "@/classes/ComponentData/ScioCardData";

export default Vue.extend({
  name: "ScioCard",
  components: { LinkButton },
  props: {
    title: String,
    body: String,
    linkButtons: Array,
    uniform: {
      type: Boolean,
      default: false
    },
    data: ScioCardData
  },
  data: () => {
    return {
      locTitle: '',
      locBody: '',
      locButtons: [] as any[],
      locUniform: false
    }
  },
  mounted() {
    if (this.data) {
      this.locTitle = this.data.title;
      this.locBody = this.data.body;
      this.locButtons = this.data.linkButtons;
      this.locUniform = this.data.uniform;
    } else {
      this.locTitle = this.title;
      this.locBody = this.body;
      this.locButtons = this.linkButtons;
      this.locUniform = this.uniform;
    }
  }
});
</script>


<style scoped>

</style>
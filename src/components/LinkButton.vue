<template>
  <v-btn v-if="locIsInternal" tile color="primary" @click="$router.push({path : locLink})">
    <v-icon left>mdi-{{ locIcon }}</v-icon>
    {{ locText }}
  </v-btn>
  <v-btn v-else tile color="primary" :href="locLink" target="_blank">
    <v-icon left>mdi-{{ locIcon }}</v-icon>
    {{ locText }}
  </v-btn>
</template>

<script lang="ts">
  import Vue from "vue";
  import { LinkButtonData } from "@/classes/ComponentData/LinkButtonData";

  export default Vue.extend({
    name: "LinkButton",
    components: {},
    props: {
      internal: Boolean,
      link: String,
      text: String,
      icon: String,
      data: LinkButtonData
    },
    data: () => {
      return {
        locIsInternal: false,
        locLink: '',
        locText: '',
        locIcon: '',
      }
    },
    mounted() {
      //use data object if provided, otherwise use props to drive this component
      if (this.data) {
        this.locIsInternal = this.data.isInternal;
        this.locLink = this.data.link
        this.locText = this.data.text
        this.locIcon = this.data.icon
      } else {
        this.locIsInternal = this.internal;
        this.locLink = this.link
        this.locText = this.text
        this.locIcon = this.icon
      }
    }
  });
</script>

<style scoped>

</style>
<template>
  <v-btn tile color="primary" :href="link" target="_blank">
    <v-icon left>mdi-{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "LinkButton",
    components: {},
    props: {
      icon: String,
      text: String,
      link: String
    }
    // data: () => {
    //   return {
    //     icon: 'help',
    //     text: false,
    //     link: 'https://www.sciocode.com'
    //   }
    // },
  });
</script>

<style scoped>

</style>
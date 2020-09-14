<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pt-0">
        <v-row>
          <v-col cols="4" class="py-1">
            <v-btn style="width: 100%">Reset</v-btn>
          </v-col>
          <v-col cols="4" class="py-1">
            <v-btn style="width: 100%">Load</v-btn>
          </v-col>
          <v-col cols="4" class="py-1">
            <v-btn style="width: 100%">tootles</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-treeview style="width: 100%" :items="rootNodes" item-children="children" item-key="name" item-text="displayLabel" activatable></v-treeview>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {Tree} from "@/classes/Tree/Tree";
import { Employee } from "@/classes/Tree/Nodes/Employee";

export default Vue.extend({
  name: "TreeDemo",
  data: () => {
    return {
      rootNodes: [] as Tree<Employee>[]
    }
  },
  mounted() {
    const root1 = new Tree(new Employee("Billy", "Bob", "CTO"));
    this.rootNodes.push(root1)
    //add a child to test
    root1.addChild(new Employee("Scott", "Smith", "Project Lead"))
  }
})
</script>

<style scoped>

</style>
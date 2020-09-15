<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pt-0">
        <v-row>
          <v-col cols="3" class="py-0 px-1 pl-2">
            <v-btn :disabled="selectedIndexes.length === 0" style="width: 100%" @click="showAddDialog = true">Add To Selected</v-btn>
          </v-col>
          <v-col cols="3" class="py-0 px-1">
            <v-btn style="width: 100%" @click="reset">Reset</v-btn>
          </v-col>
          <v-col cols="3" class="py-0 px-1">
            <v-btn style="width: 100%">Sort</v-btn>
          </v-col>
          <v-col cols="3" class="py-0 px-1 pr-2">
            <v-btn style="width: 100%">Load</v-btn>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-treeview style="width: 100%" :items="rootNodes" item-children="children" item-key="name" item-text="displayLabel" activatable :active.sync="selectedIndexes"></v-treeview>
    </v-row>
    <v-dialog v-model="showAddDialog" max-width="500">
      <v-card>
        <v-card-title>New Employee</v-card-title>
        <v-card-text>
          <v-form ref="newEmployeeForm" v-model="addValid">
            <v-text-field v-model="addFirstName" placeholder="First Name" clearable :rules="textRules"></v-text-field>
            <v-text-field v-model="addLastName" placeholder="Last Name" clearable :rules="textRules"></v-text-field>
            <v-text-field v-model="addJobTitle" placeholder="Job Title" clearable :rules="textRules"></v-text-field>
          </v-form>
          <div v-if="showNotUniqueMessage" style="color: red">This Employee Already Exists</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="addEmployee">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
        v-model="showAddedBar"
        :timeout="1500">
      Added Child!
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
import {Tree} from "@/classes/Tree/Tree";
import { Employee } from "@/classes/Tree/Nodes/Employee";

export default Vue.extend({
  name: "TreeDemo",
  data: () => {
    return {
      rootNodes: [] as Tree<Employee>[],
      showAddDialog: false,
      addFirstName: "",
      addLastName: "",
      addJobTitle: "",
      selectedIndexes: [],
      textRules: [
          (v: string) => !!v || 'Must have a value'
      ],
      addValid: false,
      showNotUniqueMessage: false,
      showAddedBar: false
    }
  },
  mounted() {
    this.reset()
  },
  methods: {
    reset() {
      const ceo = new Tree(new Employee("Billy", "Bob", "CEO"));
      const founder1 = new Tree(new Employee("Bobby", "Brown", "Co-Founder"))
      const founder2 = new Tree(new Employee("Francis", "Scott", "Co-Founder"))
      this.rootNodes = [ceo, founder1, founder2]
      //add a child to test
      ceo.addChild(new Employee("Scott", "Smith", "CTO"))
    },
    addEmployee() {
      this.showNotUniqueMessage = false;
      console.log('Add: ', this.addFirstName, this.addLastName, this.addJobTitle);
      console.log('Add to: ', this.selectedIndexes);
      // eslint-disable-next-line
      //@ts-ignore
      this.$refs.newEmployeeForm.validate();
      if(!this.addValid) { return; }
      //build the object for the entered values
      const newEmployeeObj = new Employee(this.addFirstName, this.addLastName, this.addJobTitle);
      const newEmployeeName = newEmployeeObj.getName()
      for(const r of this.rootNodes) {
        if (r.findByName(newEmployeeName)) {
          this.showNotUniqueMessage = true;
          return;
        }
      }
      //new employee is unique, lets add them!
      //find selected hierarchy
      if (this.selectedIndexes.length != 1) { return; }
      const selectedName = this.selectedIndexes[0];
      let selectedTree: Tree<Employee> | null = null;
      for (const r of this.rootNodes) {
        const res = r.findByName(selectedName)
        if (res) {
          selectedTree = res
          break;
        }
      }
      if (!selectedTree) { return; }
      //got the selected tree, add this as a child
      selectedTree.addChild(newEmployeeObj);
      this.showAddDialog = false;
      this.showAddedBar = true;
    }
  },
  watch: {
    showAddDialog (to) {
      if (to) {
        this.addJobTitle = "";
        this.addFirstName = "";
        this.addLastName = "";
      }
    }
  }
})
</script>

<style scoped>

</style>
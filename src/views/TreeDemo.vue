<template>
  <v-container fluid>
    <v-row>
      <v-treeview style="width: 100%" :items="rootNodes" item-children="children" item-key="name" item-text="displayLabel" activatable :active.sync="selectedIndexes">
        <template v-slot:append="{ item }">
          <v-btn icon @click="addTo(item)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-treeview>
    </v-row>
    <v-speed-dial
        v-model="speedDialOpen"
        :bottom="true"
        :right="true"
        direction="top"
        fixed
        transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn color="primary" dark fab>
          <v-icon v-if="speedDialOpen">mdi-close</v-icon>
          <v-icon v-else>mdi-dots-horizontal</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="primary" @click="reset">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn fab dark small color="primary" @click="sortAll">
        <v-icon>mdi-sort-alphabetical-ascending</v-icon>
      </v-btn>
<!--      <v-btn fab dark small color="indigo">-->
<!--        <v-icon>mdi-download</v-icon>-->
<!--      </v-btn>-->
    </v-speed-dial>
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
      showAddedBar: false,
      addToTree: null as Tree<Employee> | null,
      speedDialOpen: false
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
      //ensure the tree to add to is present and set
      if (!this.addToTree) { return; }
      //got the selected tree, add this as a child
      this.addToTree.addChild(newEmployeeObj);
      this.showAddDialog = false;
      this.showAddedBar = true;
    },
    sortAll() {
      for (const r of this.rootNodes) {
        r.sortByDisplay();
      }
    },
    // eslint-disable-next-line
    addTo(item: any) {
      this.addToTree = item;
      this.showAddDialog = true;
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
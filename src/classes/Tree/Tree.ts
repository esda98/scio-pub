import {ScioNode} from "@/classes/Tree/ScioNode";

export class Tree<T extends ScioNode> {
  public name: string;
  public data: T;
  public displayLabel: string;
  public children: Tree<T>[];
  public parent: Tree<T> | null;

  constructor(data: T, children: Tree<T>[] = [], parent: Tree<T> | null = null) {
    this.name = data.getName();
    this.data = data;
    this.children = children;
    this.parent = parent;
    this.displayLabel = data.getDisplayText();
  }

  addChild(data: T, children: Tree<T>[] = []) {
    this.children.push(new Tree<T>(data, children, this));
  }

  addChildTo(parentName: string, newData: T, newChildren: Tree<T>[]): boolean {
    //find a tree in this tree matching the specified name
    const matchingTree = this.findByName(parentName);
    if (!matchingTree) { return false; }
    matchingTree.addChild(newData, newChildren);
    return true;
  }

  remove(name: string): boolean {
    //attempt to find a tree in this hierarchy that matches the name for removal
    const matchingTree = this.findByName(name);
    if (!matchingTree || !matchingTree.parent) { return false; }
    //use the parent's remove immediate child method to remove this tree from it's children array
    return matchingTree.parent.removeImmediate(name);
  }

  removeImmediate(name: string): boolean {
    let indexOfImmediate = -1;
    //find the index of an immediate child matching this name
    for (let i = 0; i < this.children.length; i++) {
      const c = this.children[i];
      if (c.name === name) {
        indexOfImmediate = i;
        break;
      }
    }
    if (indexOfImmediate == -1) { return false; }
    //remove the child element at the index found from the child array
    this.children = this.children.splice(indexOfImmediate, 1);
    return true;
  }

  findByName(name: string): Tree<T> | null {
    //determine if this node is the matching one
    if (this.name === name) {
      return this;
    }
    for(const child of this.children) {
      //recurse through each child to see if they have someone by the name in their hierarchy
      if (child.findByName(name)) {
        return child;
      }
    }
    return null;
  }
  sortByDisplay() {
    this.children.sort((item1, item2) => item1.displayLabel.localeCompare(item2.displayLabel));
  }

}
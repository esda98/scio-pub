import {ScioNode} from "@/classes/Tree/ScioNode";

export class Employee implements ScioNode {
  public firstName: string;
  public lastName: string;
  public jobTitle: string;

  constructor(firstName: string, lastName: string, jobTitle: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
  }

  getName(): string {
    return `${this.jobTitle}${this.firstName}${this.lastName}`
  }

  getDisplayText(): string {
    return `${this.jobTitle}: ${this.firstName} ${this.lastName}`;
  }
}
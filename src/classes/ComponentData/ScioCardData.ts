import { LinkButtonData } from "@/classes/ComponentData/LinkButtonData";

export class ScioCardData {
  public title: string;
  public body: string;
  public linkButtons: LinkButtonData[];
  public uniform: boolean;

  constructor(title: string, body: string, linkButtons: LinkButtonData[], uniform = false) {
    this.title = title;
    this.body = body;
    this.linkButtons = linkButtons;
    this.uniform = uniform
  }

}
export class LinkButtonData {
  public icon: string;
  public text: string;
  public link: string
  public isInternal: boolean;

  constructor(icon: string, text: string, link: string, isInternal = false) {
    this.icon = icon;
    this.text = text;
    this.link = link;
    this.isInternal = isInternal;
  }
}
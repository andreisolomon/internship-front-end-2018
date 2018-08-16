export class Category {

  private id: number;
  private title: string;
  private background: string;

  constructor(id: number, title: string, background: string) {
    this.setId(id);
    this.setTitle(title);
    this.setBackground(background);
  }

  setId(id: number) {
    this.id = id;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setBackground(background: string) {
    this.background = background;
  }

  getId(){
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getBackground() {
    return this.background;
  }

}

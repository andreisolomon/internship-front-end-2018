export class CourseList {

  private id: number;
  private title: string;

  constructor(id: number, title: string) {
    this.setId(id);
    this.setTitle(title);
  }

  setId(id: number) {
    this.id = id;
  }

  setTitle(title: string) {
    this.title = title;
  }

  getId(){
    return this.id;
  }

  getTitle() {
    return this.title;
  }

}

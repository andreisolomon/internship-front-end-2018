export class Chapter {

  private id: number;
  private course_id: number;
  private title: string;
  private content: string;

  constructor(id: number, course_id: number, title: string, content: string) {

    this.setId(id);
    this.setCourseId(course_id);
    this.setTitle(title);
    this.setContent(content);

  }

  setId(id: number) {
    this.id = id;
  }

  setCourseId(course_id: number) {
    this.course_id = course_id;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setContent(content: string) {
    this.content = content;
  }

  getId() {
    return this.id;
  }

  getCourseId() {
    return this.course_id;
  }

  getTitle() {
    return this.title;
  }
  getContent() {
    return this.content;
  }

}

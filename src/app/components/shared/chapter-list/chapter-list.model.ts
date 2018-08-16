export class Chapter {

  private id: number;
  private course_id: number;
  private title: string;
  private description: string;
  private img: string;

  constructor(id: number, course_id: number, title: string, description: string, img: string) {

    this.setId(id);
    this.setCourseId(course_id);
    this.setTitle(title);
    this.setDescription(description);
    this.setImg(img);

  }

  setId(id: number){
    this.id = id;
  }

  setCourseId(course_id: number){
    this.course_id = course_id;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setDescription(description: string){
    this.description = description;
  }

  setImg(img: string){
    this.img = img;
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

  getDescription() {
    return this.description;
  }

  getImg() {
    return this.img;
  }

}

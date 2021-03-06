export class Course {

  private id: number;
  private category_id: number;
  private title: string;
  private minDescription: string;
  private description: string;
  private img: string;
  private score: number;

  constructor(id: number, category_id: number, title: string, minDescription: string, description: string, img: string, score: number) {

    this.setId(id);
    this.setCategoryId(category_id);
    this.setTitle(title);
    this.setMinDescription(minDescription);
    this.setDescription(description);
    this.setImg(img);
    this.setScore(score);
  }
  setId(id: number) {
    this.id = id;
  }
  setCategoryId(category_id: number) {
    this.category_id = category_id;
  }

  setTitle(title: string) {
    this.title = title;
  }
  setMinDescription(minDescription: string) {
    this.minDescription = minDescription;
  }

  setDescription(description: string) {
    this.description = description;
  }
  setScore(score: number) {
    this.score = score;
  }
  setImg(img: string) {
    this.img = img;
  }
  getScore() {
    return this.score;
  }

  getId() {
    return this.id;
  }

  getCategoryId() {
    return this.category_id;
  }

  getTitle() {
    return this.title;
  }

  getMinDescription() {
    return this.minDescription;
  }

  getDescription() {
    return this.description;
  }

  getImg() {
    return this.img;
  }

}

export class User {
private isAdmin: number;
  private id: number;
  private image: string;
  private name: string;
  private tags: string;
  private date: string;
  private score: number;


  constructor(isAdmin: number, id: number, image: string, name: string, tags: string, score: number, date: string) {
    this.setAdmin(isAdmin);
    this.setId(id);
    this.setScore(score);
    this.setImage(image);
    this.setName(name);
    this.setTags(tags);
    this.setDate(date);

  }
  setAdmin(isAdmin: number) {
    this.isAdmin = isAdmin;
  }
  setScore(score: number) {
    this.score = score;
  }
  setId(id: number) {
    this.id = id;
  }

  setImage(image: string) {
    this.image = image;
  }
  setName(name: string) {
    this.name = name;
  }
  setTags(tags: string) {
    this.tags = tags;
  }
  setDate(date: string) {
    this.date = date;
  }

  getAdmin() {
    return this.isAdmin;
  }
  getId() {
    return this.id;
  }
  getScore() {
    return this.score;
  }
  getImage() {
    return this.image;
  }
  getName() {
    return this.name;
  }
  getTags() {
    return this.tags;
  }
  getDate() {
    return this.date;
  }


}

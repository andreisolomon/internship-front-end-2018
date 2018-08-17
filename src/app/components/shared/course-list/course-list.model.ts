export class Course {

  private id: number;
  private category_id: number;
  private title: string;
  private minDescription: string;
  private description: string;
  private img: string;

  constructor(id: number, category_id: number, title: string, minDescription: string, description: string, img: string) {


  }

  setId(id: number){
    this.id = id;
  }

  setCategoryId(category_id: number){
    this.category_id = category_id;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setMinDescription(minDescription: string) {
    this.minDescription = minDescription;
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

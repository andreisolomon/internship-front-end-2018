export class Question {

  private id: number;
  private chapter_id: number;
  private text: string;

  constructor(id: number, chapter_id: number, text: string) {

    this.setId(id);
    this.setChapterId(chapter_id);
    this.setText(text);

  }

  setId(id: number) {
    this.id = id;
  }

  setChapterId(chapter_id: number) {
    this.chapter_id = chapter_id;
  }

  setText(text: string) {
    this.text = text;
  }

  getId() {
    return this.id;
  }

  getChapterId() {
    return this.chapter_id;
  }

  getText() {
    return this.text;
  }

}

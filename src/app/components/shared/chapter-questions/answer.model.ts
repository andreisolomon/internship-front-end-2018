export class Answer {

  private id: number;
  private question_id: number;
  private text: string;
  private correct: boolean;

  constructor(id: number, question_id: number, text: string, correct: boolean) {

    this.setId(id);
    this.setQuestionId(question_id);
    this.setText(text);
    this.setCorrect(correct);

  }

  setId(id: number) {
    this.id = id;
  }

  setQuestionId(question_id: number) {
    this.question_id = question_id;
  }

  setText(text: string) {
    this.text = text;
  }

  setCorrect(correct: boolean) {
    this.correct = correct;
  }

  getId() {
    return this.id;
  }

  getQuestionId() {
    return this.question_id;
  }

  getText() {
    return this.text;
  }

  getCorrect() {
    return this.correct;
  }

}

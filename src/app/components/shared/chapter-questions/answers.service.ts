import { Answer } from './answer.model';

export class AnswersService {

  constructor() {}

  private data: Answer[] = [
    new Answer(1, 1, 'Da', true),
    new Answer(2, 1, 'Nu', false),
    new Answer(3, 1, 'Nu stiu', false),
    new Answer(4, 2, 'Da', false),
    new Answer(5, 2, 'Teoria relativitatii nu a putut demonstra acest fapt', true),
    new Answer(6, 2, 'Doar pe vremea bunica-mii', false),
    new Answer(7, 3, 'Acesta este un raspuns care nu este necorect', false),
    new Answer(8, 3, 'Virgil e pe garla', false),
    new Answer(10, 4, 'Nu se poate aduce in discutie', false),
    new Answer(11, 4, 'Da', false),
    new Answer(12, 4, 'Exact asa', true),
    new Answer(13, 5, 'Poate ca da', false),
    new Answer(14, 5, 'Poate ca nu', true),
    new Answer(15, 5, 'Poate ca da daca nu', false),
    new Answer(16, 6, 'Cu siguranta da', true),
    new Answer(17, 6, 'False', false),
    new Answer(18, 6, '!!!True', false),
    new Answer(19, 7, 'e fals acest raspuns', false),
    new Answer(20, 7, 'truuuu (fara e)', true),
    new Answer(21, 7, 'acest raspuns e adevarat', false),
    new Answer(22, 8, 'www.gugal.ro', true),
    new Answer(23, 8, 'w.w.w.g.u.g.a.l.r.o', false),
    new Answer(9, 3, 'Raspunsurile de mai sus sunt capcane', true),
    new Answer(24, 8, 'google.romania', false),
    new Answer(25, 9, 'depinde', false),
    new Answer(26, 9, 'depinde de nimic', false),
    new Answer(27, 9, 'independent de dependenta', true)
  ];

  getAnswersFromQuestion(question_id: number) {
    let answers: Answer[] = [];
    for (let answer of this.data) {
      if (answer.getQuestionId() === question_id) {
        answers.push(answer);
      }
    }
    return answers;
  }

  getAnswers() {
    return this.data;
  }

}

import { Question } from './question.model';

export class QuestionsService {

  constructor() { }

  private data: Question[] = [
    new Question(1, 1, 'Are Ana are mere?'),
    new Question(2, 1, 'Are Ana  mere?'),
    new Question(3, 1, 'Ana are mere?'),
    new Question(4, 1, 'Ana are pere?'),
    new Question(5, 1, 'Ana are bube?'),
    new Question(6, 1, 'Ana are gutui?'),
    new Question(7, 1, 'Gigel are mere?'),
    new Question(8, 1, 'Care este adresa gugle?'),
    new Question(9, 1, 'Gigel e pe net?')
  ];

  getQuestionsFromChapter(id: number) {
    let questions: Question[] = [];
    for (let question of this.data) {
      if (question.getChapterId() === id) {
        questions.push(question);
      }
    }
    return questions;
  }

}

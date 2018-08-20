import { Question } from './question.model';

export class QuestionsService {

  constructor() { }

  private data: Question[] = [
    new Question(1, 1, 'Are Ana are mere?'),
    new Question(2, 2, 'Are Ana  mere?'),
    new Question(3, 3, 'Ana are mere?'),
    new Question(4, 3, 'Ana are pere?'),
    new Question(5, 1, 'Ana are bube?'),
    new Question(6, 2, 'Ana are gutui?'),
    new Question(7, 2, 'Gigel are mere?'),
    new Question(8, 1, 'Care este adresa gugle?'),
    new Question(9, 3, 'Gigel e pe net?')
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

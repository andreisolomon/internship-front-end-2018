import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from './answer';
import { api } from '../../../../assets/data/apiUrl';

@Injectable()
export class AnswersService {

  constructor(private http: HttpClient) { }

  getAnswers(category_id: number, course_id: number, chapter_id: number, question_id: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(api.base + '/quizzes/quizOptions');
  }

}

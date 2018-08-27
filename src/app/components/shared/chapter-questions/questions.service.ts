import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Injectable } from '@angular/core';
import { Question } from './question';
import { api } from '../../../../assets/data/apiUrl';

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(category_id: number, course_id: number, chapter_id: number): Observable<Question[]> {
    return this.http.get<Question[]>(api.base + 'quiz?chapterId=' + chapter_id);
  }


}

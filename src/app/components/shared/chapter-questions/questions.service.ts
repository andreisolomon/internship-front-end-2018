import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Injectable } from '@angular/core';
import { Question } from './question';
import {api} from '../../../../assets/data/routes.service';

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(api.base + '/questions');
  }


}

import {Injectable} from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {Answer} from './answer';

@Injectable()
export class AnswersService {

  constructor(private http: HttpClient) { }

  getAnswers(): Observable<Answer[]>{
    return this.http.get<Answer[]>('http://localhost:3000/answers');
  }

}

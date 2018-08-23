import {Injectable} from '@angular/core';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {Answer} from './answer';
import {api} from '../../../../assets/data/routes.service';

@Injectable()
export class AnswersService {

  constructor(private http: HttpClient) { }

  getAnswers(): Observable<Answer[]>{
    return this.http.get<Answer[]>(api.base_front + 'answers');
  }

}

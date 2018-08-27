import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {api} from '../../../../assets/data/apiUrl';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getInfo(): Observable<any> {
    return this.http.get(api.base + '/user/about');
  }

  getAdmin() {
    return this.getInfo().map(data => data.Admin);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../assets/data/apiUrl';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getInfo(): Observable<User> {
    return this.http.get<User>(api.base + '/user/about');
  }

  getAdmin() {
    return this.getInfo().map(data => data.Admin);
  }

}

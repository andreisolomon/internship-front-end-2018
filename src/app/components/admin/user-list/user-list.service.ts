import {User} from '../user/user.model';
import {Observable} from 'rxjs';
import {api} from '../../../../assets/data/apiUrl';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {logging} from 'selenium-webdriver';

// export interface Config {
//   FirstName: string;
//   LastName: string;
//   Mail: string;
//   Admin: boolean;
//   Points: number;
//   createdAt: string;
// }
@Injectable()

export class UserListService {
  constructor(private http: HttpClient) { }

// getConfig(){
//
// }
//   private data: User[] = [
//     // /home/anca/projects/internship-front-end-2018/src/assets
//
//     new User(false, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice1', ' bla ', '15 OCT 2018', ' ', 'bla ', 3, '15 OCT 2018'),
//     new User(true, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice2', ' bla ', '15 OCT 2018', ' ', 'hgh', 3, '15 OCT 2018'),
//     new User(true, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice3', ' bla ', '15 OCT 2018', ' ', 'hghg', 3, '15 OCT 2018'),
//   ];

  // getData() {
  //   return this.data;
  // }

  getUsers(): Observable<any> {
    return this.http.get(api.user);
  }

  getUserById(id: number) {
    return this.getUsers().map(data => data.find(item => item.id === id));
  }

  getFirstNameById(id: number) {
    return this.getUsers().map(data => data.find(item => item.id === id).FirstName);
  }
  getPatheById(id: number) {
    return this.getUsers().map(data => data.find(item => item.id === id).path);
  }
  getLastNameById(id: number) {
    return this.getUsers().map(data => data.find(item => item.id === id).LastName);
  }
  getDateById(id: number) {
    return this.getUsers().map(data => data.find(item => item.id === id).createdAt);
  }
  getAdminById(id: number) {
    return this.getUsers().map(data => data.find(item => item.id === id).Admin);
  }
  getMailById(id: number) {
    return this.getUsers().map(data => data.find(item => item.id === id).Mail);
  }
  getPointsById(id: number) {
    return this.getUsers().map(data => data.find(item => item.id === id).Points);
  }
  // getInfo() {
  //   return this.http.get( api.user );
  // }
  // <Config>
  deleteUser(id: number ) {
    return this.http.delete(api.user + `?userId=${id}`);
  }
}



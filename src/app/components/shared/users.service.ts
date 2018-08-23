import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
 
export class UsersService {

    private users: User[];
    constructor(private http: HttpClient) {

        this.getUsers().subscribe(data => this.users = data);

    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('http://192.168.151.36:8000/api/user');
    }
// login(): Observable<User[]>{
      // return this.http.post<
// }


}

import {User} from '../user/user.model';
import {UserListService} from './user-list.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {api} from '../../../../assets/data/apiUrl';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
// tags: ['bla', 'bla']
export class UserListComponent implements OnInit {
  public users: User[];
  // public scores: Score[];
  constructor(private route: Router, private userListService: UserListService
              // private CourseScoreService
  ) { }
  // constructor() { }
  // public users: User[] = [
  //   {id: 1, email: 'user@assist.ro', firstName: 'ana', lastName: 'abc', password: 'assist', active: 1, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 2, email: 'user@assist.ro', firstName: 'radu', lastName: 'abcc', password: 'assist', active: 0, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 3, email: 'user@assist.ro', firstName: 'test', lastName: 'test', password: 'assist', active: 1, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 4, email: 'user@assist.ro', firstName: 'unu', lastName: 'doi', password: 'assist',  active: 0, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 5, email: 'user@assist.ro', firstName: 'trei', lastName: 'patru', password: 'assist', active: 0, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 6, email: 'user@assist.ro', firstName: 'cinci', lastName: 'sase', password: 'assist', active: 1, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  // ];
  ngOnInit() {

    this.users = this.userListService.getData();
  // getAllUsers() {
    // return this.users;

  }

  // ngOnInit() {
  //   this.getAllUsers();
  // }
// private userList
}

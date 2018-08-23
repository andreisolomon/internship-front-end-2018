import {User} from '../user/user.model';
import {UserListService} from './user-list.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {api} from '../../../../assets/data/apiUrl';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

// tags: ['bla', 'bla']
export class UserListComponent  {
  // public users: User[];
  // employees: Employee[];
  edit = false;
  // config: Config;
  // public scores: Score[];
  constructor(private route: Router, private userListService: UserListService) { }

  // private CourseScoreService
  // ) {this.employees = [{name: 'test'}]; }
  // constructor() { }
  // public users: User[] = [
  //   {id: 1, email: 'user@assist.ro', firstName: 'ana', lastName: 'abc', password: 'assist', active: 1, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 2, email: 'user@assist.ro', firstName: 'radu', lastName: 'abcc', password: 'assist', active: 0, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 3, email: 'user@assist.ro', firstName: 'test', lastName: 'test', password: 'assist', active: 1, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 4, email: 'user@assist.ro', firstName: 'unu', lastName: 'doi', password: 'assist',  active: 0, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 5, email: 'user@assist.ro', firstName: 'trei', lastName: 'patru', password: 'assist', active: 0, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  //   {id: 6, email: 'user@assist.ro', firstName: 'cinci', lastName: 'sase', password: 'assist', active: 1, image: '../../../../../assets/images/img3.jpeg', tags: 'bla'},
  // ];
  // ngOnInit() {
  //
  //   this.users = this.userListService.ge+tData();
  // // getAllUsers() {
  //   // return this.users;
  //
  // }
  // delete(us: User) {
  //   this.users.splice(this.users.indexOf(us), 1);
  // }

  edity() {
    if (this.edit === false) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  makeAdmin(admin) {
    admin.isAdmin = admin.isAdmin !== true;
    // deleteUser(user) {
    //   (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    // }

    //   if (isAdmin == false)
    //   {
    //
    //   }
  }

  showData() {
    this.userListService.getInfo().subscribe((response: Response) => {
        const data = response.json();
        console.log(data);
      }
    );
  }
}

// }
// ngOnInit() {
//   this.getAllUsers();
// }
// private userList


export class Employee {
  name: string;
}


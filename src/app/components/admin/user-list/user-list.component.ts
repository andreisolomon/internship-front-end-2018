import {User} from '../user/user.model';
import {UserListService} from './user-list.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {api} from '../../../../assets/data/apiUrl';
import index from '../../../../../node_modules/@angular/cli/lib/cli';
import {Observable} from 'rxjs';
import {Category} from '../../shared/category-list/category';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // public users: User[];
  // // employees: Employee[];
  open = false;
  edit = false;
  deleteAll = false;
  id1: number[];
  // config: Config;
  // public scores: Score[];
  public error: boolean = false;
  public data: Observable<User[]>;
  public id: number;
  public link: string;

  constructor(private route: ActivatedRoute, private userListService: UserListService, private router: Router) {
  }

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
  ngOnInit() {
    // this.users = this.userListService.getData();
    // getAllUsers() {
    //   return this.users;
    //
    this.data = this.userListService.getUsers().map(data => data.slice(0));

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['userId'];
        this.link = '';
        if (this.userListService.getUserById(this.id)) {
          this.error = params['userId'] != null;
        }
      }
    );

    if (this.error === true) {
      this.link = '../../';
      setTimeout(() => {
        this.id = 0;
        this.error = false;
      }, 10000);
    }
  }

  openMenu() {
    this.open = this.open === false;
  }

  delete(id: number, ind: number) {
    console.log(this.data);
    // this.data.splice(ind, 1);
    this.userListService.deleteUser(id).subscribe(response => {
      console.log(response);
    });
  }

  edity(id) {
    this.router.navigate(['users/edit/' + id]);
  }

  makeAdmin(admin) {
    admin.Admin = !admin.Admin;
  }

  //
  // showData() {
  //   this.userListService.getInfo().subscribe((response: Response) => {
  //       const data = response.json();
  //       console.log(data);
  //     }
  //   );
  // }

  // passId(index: number) {
  //   this.id1.push(index);
  // }

  // check(e) {
  //   this.deleteAll = !!e.target.checked;
  //   if (e.target.checked) {
  //     this.deleteAll = true;
  //     this.passId.push(index);
  //   } else {
  //     this.deleteAll = false;
  //     this.passId.delete(index);
  //   }
  // }

  showButton() {
    if (document.getElementById('checked').valueOf() === true) {
      document.getElementById('ok').innerHTML = 'asa';
    }
    this.deleteAll = true;
  }
}


import {User} from '../user/user.model';
import {UserListService} from './user-list.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {api} from '../../../../assets/data/apiUrl';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  open = false;
  edit = false;
  id1: number[];
  public error: boolean = false;
  public data: Observable<User[]>;
  public id: number;
  public link: string;
  public array = [];
  public array1 = [];
  public int: number;
  public title: Observable<string>;
public ceva : number;
public dellAll =false;
  constructor(private http: HttpClient, private route: ActivatedRoute, private userListService: UserListService, private router: Router) {
  }


  ngOnInit() {

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

  edity(user) {
    // user.isSeleced = true;

    // this.router.navigate(['users/edit/' + id]);
  }

  makeAdmin(user) {
    user.Admin = !user.Admin;
    // this.http.put(api.user + '/change/' + user.id, user.Admin).subscribe();
    this.http.put(api.user + `/change/${user.id}`, user.Admin).subscribe();
    // console.log(userAdmin);
  }
  userId(id){
    return this.ceva = id;
  }
  check(inde: number, selected, id) {
    console.log(selected);
    // this.deleteAll = !this.deleteAll;
    if (selected) {
      this.array.push(inde);
      this.array1.push(id);
    } else {
      for (this.int = 0; this.int < this.array.length; this.int++) {
        if (inde === this.array[this.int]) {
          this.array.splice(this.int, 1);
          this.array1.splice(this.int, 1);
        }
      }
    }
    console.log(this.array);
    console.log(this.array1);
    if (this.array.length !== 0) {
      this.dellAll = true;
    } else {this.dellAll = false; }
  }

  showButton() {
    if (document.getElementById('checked').valueOf() === true) {
      document.getElementById('ok').innerHTML = 'asa';
    }
    // this.deleteAll = true;
  }

  delete(id) {
    console.log(id);
    const url = 'http://192.168.151.36:8000/api/user/' + id;
    return this.http.delete(url).subscribe();
  }

  deleteAll() {
    // console.log()
    for (this.int = 0; this.int < this.array.length; this.int++) {
      console.log(this.array1[this.int]);
      this.delete(this.array1[this.int]);
    }
    location.reload();
  }

}

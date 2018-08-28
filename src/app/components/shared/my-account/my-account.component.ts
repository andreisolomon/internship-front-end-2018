import {Component, Input, OnInit} from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute, Params} from '@angular/router';
import { Course } from '../course-list/course-list.model';
import { CourseListService } from '../course-list/course-list.service';
import {NgForm} from '@angular/forms';
import { UserListService} from '../../admin/user-list/user-list.service' ;
import {User} from '../../admin/user/user.model';
import {Observable} from 'rxjs';
// import { CourseScoreService} from './course-score.service';
// import {Score} from './score-model';

@Component ({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
@Input() user: User;
  open = false;
  edit = false;
  deleteAll = false;
  id1: number[];
  // config: Config;
  // public scores: Score[];
  public error = false;
  public data: Observable<User[]>;
  public id: number;
  public link: string;
  public courses: Course[];
url = '';
  // public scores: Score[];
  constructor( private courseListService: CourseListService, private route: ActivatedRoute,
               private userListService: UserListService, private router: Router
              // private courseScoreService: CourseScoreService
              ) { }
// public
  ngOnInit(): void {
    this.getUser();
    // this.courses = this.courseListService.getData();
    // this.scores = this.courseScoreService.getData();
    // hr
    // this.data = this.userListService.getUsers().map(data => data.slice(0));
    //
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params['userId'];
    //     this.link = '';
    //     if (this.userListService.getUserById(this.id)) {
    //       this.error = params['userId'] != null;
    //     }
    //   }
    // );
    //
    // if (this.error === true) {
    //   this.link = '../../';
    //   setTimeout(() => {
    //     this.id = 0;
    //     this.error = false;
    //   }, 10000);
    // }
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userListService.getUser(id).subscribe(user => this.user = user);
  }
  toLogout() {
      if (confirm('Are you sure you want to log out?')) {
        localStorage.clear();
        this.router.navigate(['login']);
      } else {
    }
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = ( fre: any ) => {
        // debugger;
        this.url = fre.currentTarget.result ? fre.currentTarget.result : '';
      };
    }
  }
reset() {
    document.getElementById('exampleInputEmail1').innerText = '';
    document.getElementById('exampleInputEmail1').innerText = '';

}
}

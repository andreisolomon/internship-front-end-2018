import {Component, Input, OnInit} from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute, Params} from '@angular/router';
import { Course } from '../course-list/course-list.model';
import { CourseListService } from '../course-list/course-list.service';
import {NgForm} from '@angular/forms';
// import {User} from '../../admin/user/user.model';
import {Observable} from 'rxjs';
import {UserService} from '../../../user.service';
import { User } from '../../../user';
import {api} from '../../../../assets/data/apiUrl';
import {HttpClient} from '@angular/common/http';
// import { CourseScoreService} from './course-score.service';
// import {Score} from './score-model';

@Component ({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
// @Input() user: User;
  open = false;
  edit = false;
  deleteAll = false;
  id1: number[];
  // config: Config;
  // public scores: Score[];
  public title: Observable<string>;
  public error = false;
  // public data: Observable<User[]>;
  public id: number;
  public link: string;
  public user_id: number;
  public courses: Course[];
url = '';
  // public scores: Score[];
  public user: User;
  constructor( private courseListService: CourseListService, private route: ActivatedRoute,
                private router: Router, private userService: UserService, private http: HttpClient
              // private courseScoreService: CourseScoreService
              ) { }
// public
  ngOnInit() {
    // this.userService.getInfo().subscribe(data =>  this.user = data);
    this.userService.getInfo().subscribe(data => this.user = data);
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
        return this.http.post(api.user + '/image', this.url).subscribe();
      };
    }
  }
reset() {
    document.getElementById('exampleInputEmail1').innerText = '';
    document.getElementById('exampleInputEmail1').innerText = '';

}
}

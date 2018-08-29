import {Component, Input, OnInit} from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute, Params} from '@angular/router';
import {Course} from '../course-list/course-list.model';
import {CourseListService} from '../course-list/course-list.service';
import {NgForm} from '@angular/forms';
// import {User} from '../../admin/user/user.model';
import {Observable} from 'rxjs';
import {UserService} from '../../../user.service';
import {User} from '../../../user';
import {api} from '../../../../assets/data/apiUrl';
import {HttpClient} from '@angular/common/http';
import {Category} from '../category-list/category';
import {CategoryListService} from '../category-list/category-list.service';
import {CourseScoreService} from './course-score.service';
// import { CourseListService } from './course-list.service';
// import { Course } from './course';
// import { CourseScoreService} from './course-score.service';
// import {Score} from './score-model';

@Component({
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
  // public title: Observable<string>;
  public error = false;
  public id: number;
  public link: string;
  public user_id: number;
  // public courses: Course[];
  url = '';
  public user: User;
  public data1: Observable<Course[]>;
  public text: string = 'Discover more';
  public title: string = 'Browse through best learning course for Alexa';
  public subtitle: string = 'Pick the one you like and start learning';
  // public error: boolean = false;
  // public id1: number;
  private found: any;
  public course_id: number;
  public delete: boolean;
  public add: boolean;

  // public link: string;
  constructor(private route: ActivatedRoute,
              private router: Router, private userService: UserService, private http: HttpClient,
              // private courseScoreService: CourseScoreService
  ) {
  }

// public
  ngOnInit() {
    this.userService.getInfo().subscribe(data => this.user = data);
    // this.userService.getInfo().subscribe(data => this.user = data);
    // this.data1 = this.courseScoreService.getCourses().map(data1 => data1.slice(0));
    //
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params['courseId'];
    //     this.link = '';
    //     if (this.courseScoreService.getCourseById(this.id)) {
    //       this.error = params['courseId'] != null;
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
  }

  // this.userService.getAdmin().subscribe(data1 => this.admin = data1);
  //
  // this.route.params.subscribe(
  //   (params: Params) => {
  //     this.id = +params['categoryId'];
  //     this.link = '';
  //     this.categoryListService.getCategoryById(this.id).subscribe(data1 => {
  //       // this.found = data1;
  //       // if (this.found === undefined) {
  //       //   this.router.navigate(['/category/', this.id, 'notfound']);
  //       // }
  //     });
  //     if (params['courseId'] != null) {
  //       this.course_id = +params['courseId'];
  //
  //       // if (params['message'] != null) {
  //       //
  //       //   if (params['message'] === 'notfound') {
  //       //     this.error = true;
  //       //   } else if (params['message'] === 'delete') {
  //       //     this.delete = true;
  //       //   } else if (params['message'] === 'add') {
  //       //     this.add = true;
  //       //   }
  //       // }
  //     }


  toLogout() {
    if (confirm('Are you sure you want to log out?')) {
      localStorage.clear();
      this.router.navigate(['login']);
    } else {
    }
  }

  save(FirstName, LastName, Mail) {
    return this.http.put(api.user, {
      FirstName,
      LastName,
      Mail
    }).subscribe(success => alert('Your data has been updated'), error => console.log('error', error));
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (fre: any) => {
        // debugger;
        this.url = fre.currentTarget.result ? fre.currentTarget.result : '';
        return this.http.post(api.user + '/image', this.url).subscribe();
      };
    }
  }

  reset() {
    return this.http.get(api.user).subscribe();

  }
}

import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { Course } from '../course-list/course-list.model';
import { CourseListService } from '../course-list/course-list.service';
import {NgForm} from '@angular/forms';
// import { CourseScoreService} from './course-score.service';
// import {Score} from './score-model';

@Component ({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public courses: Course[];
url = '';
  // public scores: Score[];
  constructor(private route: Router, private courseListService: CourseListService,
              // private courseScoreService: CourseScoreService
              ) { }
// public
  ngOnInit() {
    // this.courses = this.courseListService.getData();
    // this.scores = this.courseScoreService.getData();
  }

  toLogout() {
      if (confirm('Are you sure you want to log out?')) {
        this.route.navigate(['login']);
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

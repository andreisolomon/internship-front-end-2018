import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { Course } from '../course-list/course-list.model';
import { CourseListService } from '../course-list/course-list.service';
import {CourseScoreService} from './course-score.service';

@Component ({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public courses: Course[];
  // public scores: Score[];
  constructor(private route: Router, private courseListService: CourseListService
              // private CourseScoreService
              ) { }
// public
  ngOnInit() {
    this.courses = this.courseListService.getData();
    // this.scores = this.CourseScoreService.getData();
  }

  toLogout() {
    this.route.navigate(['login']);
  }

}

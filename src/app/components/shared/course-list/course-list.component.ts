import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryListService } from '../category-list/category-list.service';
import { CourseListService } from './course-list.service';
import { Course } from './course';
import {from, Observable} from 'rxjs';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: Observable<Course[]>;
  public title: string = 'Browse through all Finance courses for Alexa';
  public subtitle: string = 'Pick the one you like and start learning';
  public id: number;
  public categoryTitle: Observable<string>;
  public categoryBackground: Observable<string>;
  public text: string = 'Discover more';
  public size: Observable<number>;
  public error: boolean;
  public course_id: number;
  public link: string;



  constructor(private route: ActivatedRoute, private courseListService: CourseListService, private router: Router, private categoryListService: CategoryListService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.link = '';
        if (this.categoryListService.categoryExist(this.id) === Observable.of(false)) {
          this.router.navigate(['/courses/', this.id, 'notfound']);
        }
        if (params['courseId'] != null) {
          this.course_id = +params['courseId'];
          this.error = true;
        }
      }
    );

    this.courses = this.courseListService.getCoursesFromCategory(this.id).map(data => data.slice(0, 6));

    this.size = this.courses.map(data => data.length);

    this.categoryTitle = this.categoryListService.getCategoryTitleById(this.id);

    this.categoryBackground = this.categoryListService.getCategoryBackgroundById(this.id);

    if (this.error === true) {
      this.link = '../../';
      setTimeout(() => {
        this.id = 0;
        this.error = false;
      }, 10000);
    }

  }

  load() {
    if (this.text === 'Discover more') {

      this.courses = this.courseListService.getCoursesFromCategory(this.id);
      this.text = 'Looks less';

    } else {

      this.courses = this.courseListService.getCoursesFromCategory(this.id).map(data => data.slice(0, 6));
      this.text = 'Discover more';

    }
  }

  compare(value: number) {
    if (value === 0 && this.size.subscribe(number => number === value)) {
      return true;
    } else if (value !== 0 && this.size.subscribe(number => number > value)) {
      return true;
    }
    return false;
  }

}

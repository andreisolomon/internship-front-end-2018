import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { CourseListService } from '../../shared/course-list/course-list.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  public id: number;
  public course_id: number;
  public course;

  constructor( private http: HttpClient,
               private router: Router,
               private route: ActivatedRoute,
               private courseService: CourseListService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.course_id = +params['courseId'];
        this.courseService.getCourseById(this.id, this.course_id).subscribe(data => console.log(this.course = data));
      }
    );

  }

}

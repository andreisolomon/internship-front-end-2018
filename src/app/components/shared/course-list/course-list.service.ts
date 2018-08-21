import { Course } from './course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseListService {

  constructor(private http: HttpClient) {  }

  getCourses(): Observable<any> {
    return this.http.get('http://localhost:3000/courses');
  }

  getCoursesFromCategory(id: number) {
    return this.getCourses().map(data => data.filter(item => item.category_id === id));
  }

  getCourseById(id: number) {
    return this.getCourses().map(data => !!data.find(item => item.id === id));
  }

  getCourseTitleById(id: number) {
    return this.getCourses().map(data => data.find(item => item.id === id).title);
  }

  getCourseSummaryById(id: number) {
    return this.getCourses().map(data => data.find(item => item.id === id).summary);
  }

  courseInCategoryById(id: number, category_id: number) {
    return this.getCourses().map(data => data.find(item => item.id === id && item.category_id === category_id));
  }

}

import { Course } from './course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {api} from '../../../../assets/data/routes.service';

@Injectable()
export class CourseListService {

  constructor(private http: HttpClient) {  }

  getCourses(id: number): Observable<any> {
    return this.http.get(api.base + '/category/' + id + '/course');
  }

  getCourseTitleById(category_id: number, id: number) {
    return this.getCourses(category_id).map(data => data.find(item => item.id === id).Title);
  }

  getCourseSummaryById(category_id: number, id: number) {
    return this.getCourses(category_id).map(data => data.find(item => item.id === id).Summary);
  }

  courseInCategory(category_id: number, course_id: number) {
    return this.getCourses(category_id).map(data => data.find(item => item.id === course_id && item.categoryId === category_id));
  }

  getSize(id: number) {
    return this.getCourses(id).map(data => data.length);
  }

}

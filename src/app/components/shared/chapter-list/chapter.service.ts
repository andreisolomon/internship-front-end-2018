import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from '../../../../../node_modules/rxjs/Observable';
import {Injectable} from '@angular/core';
import {Chapter} from './chapter';
import {from} from 'rxjs';
import {api} from '../../../../assets/data/apiUrl';

@Injectable()
export class ChapterService {

  constructor(private http: HttpClient) {  }

  getChapters(category_id: number, course_id: number): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(api.base + '/chapters?courseId=' + course_id);
/*    192.168.151.36:8000/api/category/2/course/1/chapter*/
  }

  getChapterTitleById(category_id: number, course_id: number, chapter_id: number) {
    return this.getChapters(category_id, course_id).map(data => data.find(item => item.id === chapter_id).Title);
  }

  getChapterContentById(category_id: number, course_id: number, chapter_id: number) {
    return this.getChapters(category_id, course_id).map(data => data.find(item => item.id === chapter_id).Content);
  }

  noOfChapterInCourse(category_id: number, course_id: number, chapter_id: number) {
    return this.getChapters(category_id, course_id).map(data => data.findIndex(item => item.id === chapter_id));
  }

  getNext(category_id: number, course_id: number, chapter_id: number) {
    return this.getChapters(category_id, course_id).map(data => data.find(item => item.id > chapter_id && item.courseId === course_id).id);
  }

  getPrev(category_id: number, course_id: number, chapter_id: number) {
    return this.getChapters(category_id, course_id)
      .map(data => data.filter(item => item.courseId === course_id).reverse().find(item => item.id < chapter_id).id);
  }

  chapterInCourse(category_id: number, course_id: number, chapter_id: number) {
    return this.getChapters(category_id, course_id).map(data => data.find(item => item.courseId === course_id && item.id === chapter_id));
  }

  getSize(category_id: number, course_id: number) {
    return this.getChapters(category_id, course_id).map(data => data.length);
  }

}

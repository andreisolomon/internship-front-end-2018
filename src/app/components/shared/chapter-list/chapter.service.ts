import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from '../../../../../node_modules/rxjs/Observable';
import {Injectable} from '@angular/core';
import {Chapter} from './chapter';
import {from} from 'rxjs';

@Injectable()
export class ChapterService {

  constructor(private http: HttpClient) {  }

  getChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>('http://localhost:3000/chapters');
  }

  getChaptersFromCourseById(id: number) {
    return this.getChapters().map(data => data.filter(item => item.course_id === id));
  }

  getChapterCourseById(id: number) {
    return this.getChapters().map(data => data.find(item => item.id === id).course_id);
  }

  getChapterTitleById(id: number) {
    return this.getChapters().map(data => data.find(item => item.id === id).title);
  }

  getChapterContentById(id: number) {
    return this.getChapters().map(data => data.find(item => item.id === id).content);
  }

  noOfChapterInCourse(chapter_id: number) {
    return this.getChapters().map(data => data.findIndex(item => item.id === chapter_id));
  }

  getNext(course_id: number, chapter_id: number) {
    return this.getChapters().map(data => data.find(item => item.id > chapter_id && item.course_id === course_id).id);
  }

  getPrev(course_id: number, chapter_id: number) {
    return this.getChapters()
      .map(data => data.filter(item => item.course_id === course_id).reverse().find(item => item.id < chapter_id).id);
  }

  chapterInCourse(course_id: number, chapter_id: number) {
    return this.getChapters().map(data => data.find(item => item.course_id === course_id && item.id === chapter_id));
  }

  getSize(id: number) {
    return this.getChapters().map(data => data.filter(item => item.course_id === id).length);
  }

}

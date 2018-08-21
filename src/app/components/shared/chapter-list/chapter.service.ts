import {HttpClient} from '../../../../../node_modules/@angular/common/http';
import {Observable} from '../../../../../node_modules/rxjs/Observable';
import {Injectable} from '@angular/core';
import {Chapter} from './chapter';

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

  /*getPrevNext(course_id: number, chapter_id: number, type: number) {

    const chapters: Chapter[] = this.getChaptersFromCourseById(course_id);

    let len = chapters.length;

    let pos = this.noOfChapterInCourse(course_id, chapter_id) - 1;

    if ( type === 1 ) {
      if (pos === 0)
        return -1;
      return chapters[pos - 1].getId();
    } else {
      if (pos === len - 1)
        return -1;
      return chapters[pos + 1].getId();
    }

  }
  */

}

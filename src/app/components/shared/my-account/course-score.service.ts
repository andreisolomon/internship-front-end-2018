import {Score} from './score-model';
import {Observable} from 'rxjs';
import {api} from '../../../../assets/data/apiUrl';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class CourseScoreService {
  constructor(private http: HttpClient) {}
  getCourses(): Observable<any> {
    return this.http.get('192.168.151.36:8000/api/course/all');
  }
  getCourseById(id: number) {
    return this.getCourses().map(dataCourse => dataCourse.find(item => item.id === id));
  }
  // getData() {
  //   return this.data;
  // }
  //
  // getScoreById(id: number) {
  //   for (let score of this.data) {
  //     if (score.getId() === id) {
  //       return score;
  //     }
  //   }
  //   return false;
  // }
  //
  //
  // getScoreUser_idById(id: number) {
  //   for (let score of this.data) {
  //     if (score.getId() === id) {
  //       return score.getUser_id();
  //     }
  //   }
  // }
  // getScoreCourse_idById(id: number) {
  //   for (let score of this.data) {
  //     if (score.getId() === id) {
  //       return score.getCourse_id();
  //     }
  //   }
  // }
  // getScoreScoreById(id: number) {
  //   for (let score of this.data) {
  //     if (score.getId() === id) {
  //       return score.getScore();
  //     }
  //   }
  // }
  // getScoreScore_maxxById(id: number) {
  //   for (let score of this.data) {
  //     if (score.getId() === id) {
  //       return score.getScore_max();
  //     }
  //   }
  // }
}

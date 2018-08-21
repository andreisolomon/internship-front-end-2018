import {Score} from './score-model';

export class CourseScoreService {
  constructor() {}
  private data: Score[] = [
    new Score(1, 1, 1, 10, 100),
    new Score(2, 2, 1, 10, 100),
    new Score(3, 3, 1, 10, 100),
  ];


  getData() {
    return this.data;
  }

  getScoreById(id: number) {
    for (let score of this.data) {
      if (score.getId() === id) {
        return score;
      }
    }
    return false;
  }


  getScoreUser_idById(id: number) {
    for (let score of this.data) {
      if (score.getId() === id) {
        return score.getUser_id();
      }
    }
  }
  getScoreCourse_idById(id: number) {
    for (let score of this.data) {
      if (score.getId() === id) {
        return score.getCourse_id();
      }
    }
  }
  getScoreScoreById(id: number) {
    for (let score of this.data) {
      if (score.getId() === id) {
        return score.getScore();
      }
    }
  }
  getScoreScore_maxxById(id: number) {
    for (let score of this.data) {
      if (score.getId() === id) {
        return score.getScore_max();
      }
    }
  }
}

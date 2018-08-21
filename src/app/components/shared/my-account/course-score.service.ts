
export class Score {
  private id: number;
  private user_id: number;
  private course_id: number;
  private score: number;

  constructor(id: number, user_id: number, course_id: number, score: number) {
    this.setId(id);
    this.setScore(score);
    this.setUser_id(user_id);
    this.setCourse_id(course_id);
  }

  setScore(score: number) {
    this.score = score;
  }

  setId(id: number) {
    this.id = id;
  }

  setCourse_id(course_id: number) {
    this.course_id = course_id;
  }

  setUser_id(user_id: number) {
    this.user_id = user_id;
  }

  getId() {
    return this.id;
  }

  getCourse_id() {
    return this.course_id;
  }

  getUser_id() {
    return this.user_id;
  }

  getScore() {
    return this.score;
  }
}

export class CourseScoreService {
  private data: Score[] = [
    new Score(1, 1, 1, 10)
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

  getScoreId(id: number) {
    for (let score of this.data) {
      if (score.getId() === id) {
        return score.getScore();
      }
    }
  }

  getCourse_idIdById(id: number) {
    for (let score of this.data) {
      if (score.getId() === id) {
        return score.getCourse_id();
      }
    }
  }

  getUser_idIdById(id: number) {
    for (let score of this.data) {
      if (score.getId() === id) {
        return score.getUser_id();
      }
    }
  }

  getScoreIdById(id: number) {
    for (let score of this.data) {
      if (score.getId() === id) {
        return score.getId();
      }
    }
  }
}

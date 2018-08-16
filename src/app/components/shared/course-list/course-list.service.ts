import { Course } from './course-list.model';

export class CourseListService {

  constructor(){}

  private data: Course[] = [

    new Course(1, 'title 1', 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'),
    new Course(2, 'title 2', 'linear-gradient(to right, #bc4e9c, #f80759)'),
    new Course(3, 'title 3', 'linear-gradient(to right, #59c173, #a17fe0, #5d26c1)'),
    new Course(4, 'title 4', 'linear-gradient(to right, #c31432, #240b36)'),
    new Course(5, 'title 5', 'linear-gradient(to right, #1f4037, #99f2c8)'),
    new Course(6, 'title 6', 'linear-gradient(to right, #fc4a1a, #f7b733)'),
    new Course(7, 'title 7', 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'),
    new Course(8, 'title 8', 'linear-gradient(to right, #000000, #0f9b0f)'),
    new Course(9, 'title 9', 'linear-gradient(to right, #200122, #6f0000)'),
    new Course(10, 'title 10', 'linear-gradient(to right, #000428, #004e92)')

  ];

  getData(){
    return this.data;
  }

  getCourseById(id: number) {
    for (let course of this.data) {
      if (course.getId() === id) {
        return course;
      }
    }
    return false;
  }

}

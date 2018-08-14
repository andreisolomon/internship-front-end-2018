import { CourseList } from './course-list.model';

export class CourseListService {

  constructor(){}

  private datas: CourseList[] = [

    new CourseList(1, 'title 1'),
    new CourseList(2, 'title 2'),
    new CourseList(3, 'title 3'),
    new CourseList(4, 'title 4'),
    new CourseList(5, 'title 5'),
    new CourseList(6, 'title 6'),
    new CourseList(7, 'title 7'),
    new CourseList(8, 'title 8'),
    new CourseList(9, 'title 9'),
    new CourseList(10, 'title 10')

  ];

  getDatas(){
    return this.datas;
  }

}

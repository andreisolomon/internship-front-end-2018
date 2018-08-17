import { Course } from './course-list.model';

export class CourseListService {

  constructor() {}

  private data: Course[] = [

    new Course(1, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(2, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(3, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(4, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(5, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(6, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(7, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(8, 4, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(9, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(10, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(11, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(12, 3, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(13, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(14, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(15, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(16, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(17, 5, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(18, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(19, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(20, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Course(21, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun.','In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg')

  ];

  getData() {
    return this.data;
  }

  getCoursesFromCategory(course_id: number) {
    let courses: Course[] = [];

    for (let course of this.data) {
      if (course.getCategoryId() === course_id) {
        courses.push(course);
      }
    }

    return courses;
  }

  getCourseById(id: number) {
    for (let course of this.data) {
      if (course.getId() === id) {
        return course;
      }
    }
    return false;
  }

  getSizeById(id: number) {
    return this.getCoursesFromCategory(id).length;
  }

  getCourseTitleById(id: number){
    for (let course of this.data) {
      if (course.getId() === id) {
        return course.getTitle();
      }
    }
  }

  getCourseMinDescriptionById(id: number){
    for (let course of this.data) {
      if (course.getId() === id) {
        return course.getMinDescription();
      }
    }
  }

  courseInCategoryById(id: number, category_id: number) {
    for (let course of this.data) {
      if (course.getId() === id && course.getCategoryId() === category_id){
        return true;
      }
    }
    return false;
  }

}

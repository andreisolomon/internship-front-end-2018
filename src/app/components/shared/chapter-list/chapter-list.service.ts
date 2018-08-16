import { Chapter } from './chapter-list.model';

export class ChapterListService {

  constructor() {}

  private data: Chapter[] = [

    new Chapter(1, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(2, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(3, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(4, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(5, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(6, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(7, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(8, 4, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(9, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(10, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(11, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(12, 3, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(13, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(14, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(15, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(16, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(17, 5, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(18, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(19, 2, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(20, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg'),
    new Chapter(21, 1, 'Internet banner Advertisting Most Reliable Forms of Web Advertisting', 'In order to discuss the general function of the logo, we must fistrly identify and define the environment where this will have to fulfill its function.', '/../../../../../assets/images/tree.jpeg')

  ];

  getData() {
    return this.data;
  }

  getChaptersFromCourse(course_id: number) {
    let chapters: Chapter[] = [];

    for (let chapter of this.data) {
      if (chapter.getCourseId() === course_id) {
        chapters.push(chapter);
      }
    }

    return chapters;
  }

  getChapterById(id: number) {
    for (let chapter of this.data) {
      if (chapter.getId() === id) {
        return chapter;
      }
    }
    return false;
  }

}

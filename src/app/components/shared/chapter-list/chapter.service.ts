import { Chapter } from './chapter.model';
import index from '../../../../../node_modules/@angular/cli/lib/cli';

export class ChapterService {

  constructor() {}

  private content = 'It s hard to say when in our lives each of us become aware of this thing called "astronomy". But it is safe to say that at some point on our lives, each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe that we see in the night sky.';

  private data: Chapter[] = [
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(2, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(3, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(4, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(5, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(6, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(7, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(8, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(9, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(10, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(11, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content)
  ];

  getData() {
    return this.data;
  }

  getChaptersFromCourseById(id: number) {
    const chapters: Chapter[] = [];
    for (const chapter of this.data) {
      if (chapter.getCourseId() === id) {
        chapters.push(chapter);
      }
    }
    return chapters;
  }

  getSize(id = 0) {
    return this.data.length;
  }

  getSizeById(id: number) {
    return this.getChaptersFromCourseById(id).length;
  }

  getChapterCourseById(id: number) {
    for (const chapter of this.data) {
      if (chapter.getId() === id) {
        return chapter.getCourseId();
      }
    }
  }

  getChapterTitleById(id: number) {
    for (let chapter of this.data) {
      if (chapter.getId() === id) {
        return chapter.getTitle();
      }
    }
  }

  noOfChapterInCourse(course_id: number, chapter_id: number) {

    const chapters: Chapter[] = this.getChaptersFromCourseById(course_id);

    for (let i = 0; i < chapters.length; i++) {
      if(chapters[i].getId() === chapter_id) {
        return i + 1;
      }
    }

  }

  getPrevNext(course_id: number, chapter_id: number, type: number) {

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

}

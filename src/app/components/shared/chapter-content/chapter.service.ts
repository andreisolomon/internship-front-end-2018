import { Chapter } from './chapter.model';

export class ChapterService {

  constructor() {}

  private content = 'It s hard to say when in our lives each of us become aware of this thing called "astronomy". But it is safe to say that at some point on our lives, each and every one of us has that moment when we are suddenly stunned when we come face to face with the enormity of the universe that we see in the night sky.';

  private data: Chapter[] = [
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content)
  ];

  getData() {
    return this.data;
  }

  getChaptersFromCourseById(id: number) {
    let chapters: Chapter[] = [];
    for (let chapter of this.data){
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
    for (let chapter of this.data){
      if (chapter.getId() === id) {
        return chapter.getCourseId();
      }
    }
  }

}

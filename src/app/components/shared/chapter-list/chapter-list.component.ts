import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChapterListService } from '../chapter-list/chapter-list.service';
import { Chapter } from './chapter-list.model';
import { CourseListService } from '../course-list/course-list.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  public chapters: Chapter[];
  public title: string = 'Browse through all Finance courses for Alexa';
  public subtitle: string = 'Pick the one you like and start learning';
  public id: number;
  public courseTitle: string;
  public courseBackground: string;
  public text: string = 'Discover more';

  constructor(private route: ActivatedRoute, private chapterListService: ChapterListService, private router: Router, private courseListService: CourseListService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if (this.chapterListService.getChapterById(this.id) === false) {
          this.router.navigate(['/courses/', this.id, 'notfound']);
        }
      }
    );

    this.chapters = this.chapterListService.getChaptersFromCourse(this.id).slice(0, 6);

    this.courseTitle = this.courseListService.getCourseById(this.id).getTitle();

    this.courseBackground = this.courseListService.getCourseById(this.id).getBackground();

  }

  load() {
    if (this.text === 'Discover more'){

      this.chapters = this.chapterListService.getChaptersFromCourse(this.id);
      this.text = 'Looks less';

    } else {

      this.chapters = this.chapterListService.getChaptersFromCourse(this.id).slice(0, 6);
      this.text = 'Discover more';

    }

  }

}

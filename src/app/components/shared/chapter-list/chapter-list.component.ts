import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryListService } from '../category-list/category-list.service';
import { CourseListService } from '../course-list/course-list.service';
import { Chapter} from './chapter';
import { ChapterService } from './chapter.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-course',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  public id: number;
  public title: Observable<string>;
  public subtitle: Observable<string>;
  public categoryTitle: Observable<string>;
  public categoryBackground: Observable<string>;
  public course_id: number;
  public chapters: Observable<Chapter[]>;
  public size: number;
  public text: string = 'See the full curriculum';
  public random;

  constructor(private router: Router, private categoryListService: CategoryListService, private route: ActivatedRoute, private courseListService: CourseListService, private chapterListService: ChapterService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.course_id = +params['courseId'];
        /*if (!this.courseListService.courseInCategoryById(this.course_id, this.id)) {
          this.router.navigate(['/courses/', this.id, this.course_id, 'notfound']);
        }*/
        this.categoryTitle = this.categoryListService.getCategoryTitleById(this.id);
        this.categoryBackground = this.categoryListService.getCategoryBackgroundById(this.id);
      }
    );

    this.title = this.courseListService.getCourseTitleById(this.course_id);
    this.subtitle = this.courseListService.getCourseSummaryById(this.course_id);

    this.chapters = this.chapterListService.getChaptersFromCourseById(this.course_id).map(data => data.slice(0, 4));

  }

  load() {
    if (this.text === 'See the full curriculum') {

      this.chapters = this.chapterListService.getChaptersFromCourseById(this.course_id);
      this.text = 'Looks less';

    } else {

      this.chapters = this.chapterListService.getChaptersFromCourseById(this.course_id).map(data => data.slice(0, 4));
      this.text = 'See the full curriculum';

    }
  }

  loadPage(id: number){
    this.router.navigate(['courses', this.id, this.course_id, id]);
  }

}

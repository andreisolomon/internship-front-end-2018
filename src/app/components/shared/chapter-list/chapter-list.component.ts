import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryListService } from '../category-list/category-list.service';
import { CourseListService } from '../course-list/course-list.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public categoryTitle: string;
  public categoryBackground: string;
  public course_id: number;

  constructor(private categoryListService: CategoryListService, private route: ActivatedRoute, private courseListService: CourseListService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.course_id = +params['courseId'];
        this.categoryTitle = this.categoryListService.getCategoryTitleById(id);
        this.categoryBackground = this.categoryListService.getCategoryBackgroundById(id);

      }
    );

    this.title = this.courseListService.getCourseTitleById(this.course_id);
    this.subtitle = this.courseListService.getCourseMinDescriptionById(this.course_id);

  }

}

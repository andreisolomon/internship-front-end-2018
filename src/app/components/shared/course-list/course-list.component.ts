import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryListService } from '../category-list/category-list.service';
import { CourseListService } from './course-list.service';
import { Course } from './course-list.model';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: Course[];
  public title: string = 'Browse through all Finance courses for Alexa';
  public subtitle: string = 'Pick the one you like and start learning';
  public id: number;
  public categoryTitle: any;
  public categoryBackground: any;
  public text: string = 'Discover more';
  public size: number;

  constructor(private route: ActivatedRoute, private courseListService: CourseListService, private router: Router, private categoryListService: CategoryListService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        if (this.courseListService.getCourseById(this.id) === false) {
          this.router.navigate(['/courses/', this.id, 'notfound']);
        }
      }
    );

    this.courses = this.courseListService.getCoursesFromCategory(this.id).slice(0, 6);

    this.size = this.courseListService.getSizeById(this.id);

    this.categoryTitle = this.categoryListService.getCategoryTitleById(this.id);

    this.categoryBackground = this.categoryListService.getCategoryBackgroundById(this.id);

  }

  load() {
    if (this.text === 'Discover more'){

      this.courses = this.courseListService.getCoursesFromCategory(this.id);
      this.text = 'Looks less';

    } else {

      this.courses = this.courseListService.getCoursesFromCategory(this.id).slice(0, 6);
      this.text = 'Discover more';

    }

  }

}

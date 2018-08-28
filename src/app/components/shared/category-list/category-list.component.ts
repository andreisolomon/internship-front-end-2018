import { Component, OnInit } from '@angular/core';
import { CategoryListService } from './category-list.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Category } from './category';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import {CourseListService} from '../course-list/course-list.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public data: Observable<Category[]>;
  public text: string = 'Discover more';
  public title: string = 'Browse through best learning course for Alexa';
  public subtitle: string = 'Pick the one you like and start learning';
  public error: boolean = false;
  public id: number;
  public link: string;
  public moke: Category[];

  constructor(private categoryListService: CategoryListService, private route: ActivatedRoute, private router: Router, private courseListService: CourseListService) {}

  ngOnInit() {
    this.data = this.categoryListService.getCategories().map(data => data.slice(0, 6));
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.link = '';
        if (this.categoryListService.getCategoryById(this.id)) {
          this.error = params['categoryId'] != null;
        }
      }
    );

    if (this.error === true) {
      this.link = '../../';
      setTimeout(() => {
        this.id = 0;
        this.error = false;
      }, 10000);
    }

  }

  load() {
    if (this.text === 'Discover more') {

      this.data = this.categoryListService.getCategories();
      this.text = 'Looks less';

    } else {

      this.data = this.categoryListService.getCategories().map(data => data.slice(0, 6));
      this.text = 'Discover more';

    }

  }

  setBackground(background) {
    return {'background': background };
  }

  search(form: NgForm) {
    const name = form.value.name;

    this.categoryListService.getCategoryIdByTitle(name).subscribe(data => {
      if (data !== undefined){
        this.router.navigate(['category/' + data]);
      }
    });



  }

}

import { Component, OnInit } from '@angular/core';
import { CategoryListService } from './category-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from './category';

@Component({
  selector: 'app-course-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public data: Category[];
  public text: string = 'Discover more';
  public title: string = 'Browse through best learning course for Alexa';
  public subtitle: string = 'Pick the one you like and start learning';
  public error: boolean = false;
  public id: number;
  public link: string;

  constructor(private categoryListService: CategoryListService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.categoryListService.getCategories().subscribe(data => this.data = data.slice(0, 6));

    this.data = this.categoryListService.getData();

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.link = '';
        if (this.categoryListService.getCategoryById(this.id) === false) {
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

      this.data = this.categoryListService.getData();
      this.text = 'Looks less';

    } else {

      this.data = this.categoryListService.getData().slice(0, 6);
      this.text = 'Discover more';

    }

  }

  setBackground(background) {
    return {'background': background };
  }



}

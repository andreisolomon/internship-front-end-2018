import { Component, OnInit } from '@angular/core';
import { CourseListService } from './course-list.service';
import { Course } from './course-list.model';
import {ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public datas: Course[];
  public text: string = 'Discover more';
  public title: string = 'Browse through best learning course for Alexa';
  public subtitle: string = 'Pick the one you like and start learning';
  public error: boolean = false;
  public id: number;

  constructor(private courseListService: CourseListService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.datas = this.courseListService.getData().slice(0, 6);

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if (this.courseListService.getCourseById(this.id) === false) {
          this.error = params['id'] != null;
        }
      }
    );

    if (this.error === true) {
      setTimeout(() => {
        this.id = 0;
        this.error = false;
      }, 10000);
    }

  }

  load() {
    if (this.text === 'Discover more'){

      this.datas = this.courseListService.getData();
      this.text = 'Looks less';

    } else {

      this.datas = this.courseListService.getData().slice(0, 6);
      this.text = 'Discover more';

    }

  }

  setBackground(background) {
    return {'background': background };
  }



}

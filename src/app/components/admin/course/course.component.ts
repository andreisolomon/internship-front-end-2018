import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { ActivatedRoute, Params, Router} from '@angular/router';
import {CourseListService} from '../../shared/course-list/course-list.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public url: string;
  public id: number;

  constructor(
              private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private courseService: CourseListService
  ) {}

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
      }
    );

  }

  onSubmit(form: NgForm) {
    form.value.categoryId = this.id;
    const url = 'http://192.168.151.36:8000/api/courses?categoryId=' + this.id;
    this.http.post(url, form.value).subscribe();
    const id = 0;
    const red = 'category/' + this.id + '/course/' + id + '/add';
    this.router.navigate([red]);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = ( fre: any ) => {
        this.url = fre.currentTarget.result ? fre.currentTarget.result : '';
      };
    }
  }

}



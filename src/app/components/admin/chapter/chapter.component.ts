import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  public id: number;
  public course_id: number;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.course_id = +params['courseId'];
      }
    );
  }

  onSubmit(form: NgForm) {
    const url = 'http://192.168.151.36:8000/api/chapter?courseId=' + this.course_id;
    form.value.courseId = this.course_id;
    this.http.post(url, form.value).subscribe();
    this.router.navigate(['category/' + this.id + '/courses/' + this.course_id + '/chapters/' + 0 + '/add']);
  }

}

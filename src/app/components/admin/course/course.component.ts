import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public url: string;
  public id: number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
      }
    );

  }

  onSubmit(form: NgForm) {
    const url = 'http://192.168.151.36:8000/api/courses?categoryId=' + this.id;
    form.value.categoryId = this.id;
    this.http.post(url, form.value).subscribe();
    this.router.navigate(['category/' + this.id + '/course/' + 0 + '/add']);
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



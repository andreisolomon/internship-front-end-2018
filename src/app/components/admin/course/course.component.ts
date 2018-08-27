import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public url;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() { }

  onSubmit(form: NgForm) {
    const url = 'http://192.168.151.36:8000/api/courses?categoryId=' + form.value.categoryId;
    const id = form.value.categoryId;
    this.http.post(url, form.value).subscribe();
    this.router.navigate(['category/' + id + '/courses/' + 0 + '/add']);
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

  /*addChapter() {
    const chapter = new FormControl(null, Validators.required);
    (<FormArray>this.courseForm.get('chapters')).push(chapter);
  }
  addQuestion() {
    const questions = new FormControl(null, Validators.required);
    (<FormArray>this.courseForm.get('questions')).push(questions);
  }*/

}



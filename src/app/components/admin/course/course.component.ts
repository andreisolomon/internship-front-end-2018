import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {$} from 'protractor';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseForm: FormGroup;

  constructor() {
  }

  ngOnInit() {

    this.courseForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'summary': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'chapters': new FormArray([]),
      'questions': new FormArray([])
    });

  }

  onSubmit() {
    console.log(this.courseForm);
  }

  onAddChapter() {
    const chapter = new FormControl(null, Validators.required);
    (<FormArray>this.courseForm.get('chapters')).push(chapter);
  }
  onAddQuestions() {
    const questions = new FormControl(null, Validators.required);
    (<FormArray>this.courseForm.get('questions')).push(questions);
  }

}



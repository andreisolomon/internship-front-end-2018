import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { AnswersService } from './answers.service';
import { Question } from './question';
import { Answer } from './answer';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChapterService } from '../chapter-list/chapter.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css'],
})
export class ChapterQuestionsComponent implements OnInit {
  edit=false;
  public id: number;
  public course_id: number;
  public chapter_id: number;
  public noChapter: number;
  public title: Observable<string>;
  public chapter: true;
  public prev: number;
  public next: number;
  public questions: Question[];
  public answers: Answer[];
  private found;
  public editbtn: string = 'Edit';
  public dispq: string = 'none';
  public dispc: string = 'none';
  public delq: string = 'Delete';
  public admin: boolean;
  constructor(
      private http: HttpClient,
      private questionsService: QuestionsService,
      private answersService: AnswersService,
      private route: ActivatedRoute,
      private chapterService: ChapterService,
      private router: Router,
      private userService: UserService
    ) {}

  ngOnInit() {
    this.userService.getAdmin().subscribe(data => this.admin = data);

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.course_id = +params['courseId'];
        this.chapter_id = +params['chapterId'];
        this.chapterService.chapterInCourse(this.id, this.course_id, this.chapter_id).subscribe(data => {
          this.found = data;
          if (this.found === undefined) {
            this.router.navigate(['/category/', this.id, 'course', this.course_id , 'chapter', this.chapter_id, 'notfound']);
          }
        });
      }
    );
    this.title = this.chapterService.getChapterTitleById(this.id, this.course_id, this.chapter_id);
    this.loadPageInfo();
  }

  load(type: number) {
    if (type === 1) {
      window.location.replace(`/category/${this.id}/course/${this.course_id}/chapter/${this.prev}/exam/quiz`);
    } else if (type === 2) {
      window.location.replace(`/category/${this.id}/course/${this.course_id}/chapter/${this.next}/exam/quiz`);
    } else {
      window.location.replace('/finished');
    }
  }

  loadPageInfo() {
    this.chapterService.noOfChapterInCourse(this.id, this.course_id, this.chapter_id).subscribe(number => this.noChapter = number);
    this.questionsService.getQuestions(this.id, this.course_id, this.chapter_id).subscribe(data => this.questions = data);
    this.answersService.getAnswers(this.id, this.course_id, this.chapter_id, 1).subscribe(data => this.answers = data);
    this.chapterService.getNext(this.id, this.course_id, this.chapter_id).subscribe(next => this.next = next);
    this.chapterService.getPrev(this.id, this.course_id, this.chapter_id).subscribe(prev => this.prev = prev);
  }

    editor() {
    if (this.edit === false) {
      this.edit = true;
      this.editbtn = 'Save';
    } else {
      for (let question of this.questions) {
        const url = 'http://192.168.151.36:8000/api/quiz?chapterId=' + this.chapter_id + '&quizId=' + question.id;
        this.http.put(url, question).subscribe(
          data => console.log(data)
        );
      }
      for (let answer of this.answers) {
        const url = 'http://192.168.151.36:8000/api/quizOptions?quizId=' + answer.quizId + '&quizOptionsId=' + answer.id;
        this.http.put(url, answer).subscribe(
          data => console.log(data)
        );
      }
      this.edit = false;
      this.editbtn = 'Edit';
    }
  }

  deleteq(){
    if( this.dispq === 'none'){
        this.dispq = '';
        this.delq = 'Cancel';

      } else {
        this.dispq = 'none';
        this.delq = 'Delete';
      }
  }

  delete(id) {
    console.log(id);
    const url = 'http://192.168.151.36:8000/api/quiz?chapterId=' + this.chapter_id + '&quizId=' + id;
    this.http.delete(url).subscribe();
    location.reload();
  }

  createquiz(){
    if (this.dispc === 'none') {
      this.dispc = '';
    } else {
      this.dispc = 'none';
    }
  }

  push(form: NgForm, quizId: number){

  }

}

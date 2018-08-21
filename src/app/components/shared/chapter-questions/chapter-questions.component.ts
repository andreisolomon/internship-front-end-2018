import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { AnswersService } from './answers.service';
import { Question } from './question';
import { Answer } from './answer';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChapterService } from '../chapter-list/chapter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css'],
})
export class ChapterQuestionsComponent implements OnInit {

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

  constructor(private questionsService: QuestionsService, private answersService: AnswersService, private route: ActivatedRoute, private chapterService: ChapterService, private router: Router) {}

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.course_id = +params['courseId'];
        this.chapter_id = +params['chapterId'];
      }
    );

    /*this.prev = this.chapterService.getPrevNext(this.course_id, this.chapter_id, 1);
    this.next = this.chapterService.getPrevNext(this.course_id, this.chapter_id, 2);*/
    this.title = this.chapterService.getChapterTitleById(this.chapter_id);
    this.loadPageInfo();

  }

  load(type: number) {
    if (type === 1) {
      window.location.replace(`/courses/${this.id}/${this.course_id}/${this.prev}/quiz`);
    } else if (type === 2) {
      window.location.replace(`/courses/${this.id}/${this.course_id}/${this.next}/quiz`);
    } else {
      window.location.replace('/finished');
    }
  }

  loadPageInfo() {
    this.chapterService.noOfChapterInCourse(this.chapter_id).subscribe(number => this.noChapter = number);
    this.questionsService.getQuestions().subscribe(data => this.questions = data.filter( item => item.chapter_id === this.chapter_id));
    this.answersService.getAnswers().subscribe(data => this.answers = data);
    this.chapterService.getNext(this.course_id, this.chapter_id).subscribe(next => this.next = next);
  }

  isNumber(val) { return typeof val === 'undefined'; }

}

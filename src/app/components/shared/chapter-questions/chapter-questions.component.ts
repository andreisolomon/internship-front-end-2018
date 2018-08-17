import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { AnswersService } from './answers.service';
import { Question } from './question.model';
import { Answer } from './answer.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChapterService } from '../chapter-list/chapter.service';

@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css']
})
export class ChapterQuestionsComponent implements OnInit {

  public questions: Question[] = [];

  public id: number;
  public course_id: number;
  public chapter_id: number;
  public noChapter: number;
  public title: string;
  public chapter: true;
  public prev: number;
  public next: number;

  constructor(private questionsService: QuestionsService, private answersService: AnswersService, private route: ActivatedRoute, private chapterService: ChapterService, private router: Router) {

  }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.course_id = +params['courseId'];
        this.chapter_id = +params['chapterId'];
      }
    );

    this.prev = this.chapterService.getPrevNext(this.course_id, this.chapter_id, 1);
    this.next = this.chapterService.getPrevNext(this.course_id, this.chapter_id, 2);
    this.noChapter = this.chapterService.noOfChapterInCourse(this.course_id, this.chapter_id);
    this.title = this.chapterService.getChapterTitleById(this.chapter_id);
    this.questions = this.questionsService.getQuestionsFromChapter(this.chapter_id);
    this.loadAnswers();

  }

  loadAnswers() {
    let answer: Answer[];

    for (let i = 0; i < this.questions.length; i++) {

        answer = this.answersService.getAnswersFromQuestion(this.questions[i].getId());
        this.questions[i]['answer'] = answer;

    }
  }

  load(type: number) {
    if (type === 1){
      window.location.replace(`/courses/${this.id}/${this.course_id}/${this.prev}/quiz`);
    } else if (type === 2){
      window.location.replace(`/courses/${this.id}/${this.course_id}/${this.next}/quiz`);
    } else {
      window.location.replace('/finished');
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { AnswersService } from './answers.service';
import { Question } from './question.model';
import { Answer } from './answer.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css']
})
export class ChapterQuestionsComponent implements OnInit {

  public questions: Question[] = [];
  public answers: Answer[] = [];

  public id: number;
  public course_id: number;
  public chapter_id: number;

  constructor(private questionsService: QuestionsService, private answersService: AnswersService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.course_id = +params['courseId'];
        this.chapter_id = +params['chapterId'];
      }
    );

    this.questions = this.questionsService.getQuestionsFromChapter(this.chapter_id);
    this.answers = this.answersService.getAnswersFromQuestion(this.questions[0].getId());

  }

  loadAnswersFromQuestion(id: number) {
    this.answers = this.answersService.getAnswersFromQuestion(id);
  }

  log(id) {
    console.log(id);
  }


}

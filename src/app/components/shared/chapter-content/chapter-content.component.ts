import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {QuestionsService} from '../chapter-questions/questions.service';
import {AnswersService} from '../chapter-questions/answers.service';
import {ChapterService} from '../chapter-list/chapter.service';

@Component({
  selector: 'app-chapter-content',
  templateUrl: './chapter-content.component.html',
  styleUrls: ['./chapter-content.component.css']
})
export class ChapterContentComponent implements OnInit {

  public id: number;
  public course_id: number;
  public chapter_id: number;
  public noChapter: number;
  public title: string;
  public chapter: true;
  public prev: number;
  public next: number;

  constructor(private questionsService: QuestionsService, private answersService: AnswersService, private route: ActivatedRoute, private chapterService: ChapterService, private router: Router) { }

  ngOnInit() {
    /*this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.course_id = +params['courseId'];
        this.chapter_id = +params['chapterId'];
      }
    );

    this.prev = this.chapterService.getPrevNext(this.course_id, this.chapter_id, 1);
    this.next = this.chapterService.getPrevNext(this.course_id, this.chapter_id, 2);
    this.noChapter = this.chapterService.noOfChapterInCourse(this.course_id, this.chapter_id);
    this.title = this.chapterService.getChapterTitleById(this.chapter_id);*/
  }

}

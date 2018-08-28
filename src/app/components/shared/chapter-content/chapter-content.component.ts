import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {QuestionsService} from '../chapter-questions/questions.service';
import {AnswersService} from '../chapter-questions/answers.service';
import {ChapterService} from '../chapter-list/chapter.service';
import {Observable} from 'rxjs';
import {Chapter} from '../chapter-list/chapter';
import {UserService} from '../../../user.service';
import {HttpClient} from '@angular/common/http';

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
  public title: Observable<string>;
  public chapter: true;
  public prev: number;
  public next: number;
  public content: Observable<string>;
  private found;
  public isAdmin: boolean;

  constructor(private questionsService: QuestionsService,
              private answersService: AnswersService,
              private route: ActivatedRoute,
              private chapterService: ChapterService,
              private router: Router,
              private userService: UserService,
              private http: HttpClient
              ) { }

  ngOnInit() {

    this.userService.getAdmin().subscribe(data => this.isAdmin = data);

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
    this.content = this.chapterService.getChapterContentById(this.id, this.course_id, this.chapter_id);

    this.loadPageInfo();

  }

  load(type: number) {
    if (type === 1){
      window.location.replace(`/category/${this.id}/course/${this.course_id}/chapter/${this.prev}`);
    } else if (type === 2) {
      window.location.replace(`/category/${this.id}/course/${this.course_id}/chapter/${this.next}`);
    } else if (type === 3) {
      window.location.replace(`/category/${this.id}/course/${this.course_id}/chapter/${this.chapter_id}/exam/quiz`);
    } else {
      window.location.replace(`/category/${this.id}/course/${this.course_id}/chapter/${this.chapter_id}/exam/quiz`);
    }
  }

  admin(type: number) {
    if (type === 1) {
      const url = 'http://192.168.151.36:8000/api/chapters?chapterId=' + this.chapter_id;
      this.http.delete(url).subscribe(data => console.log(data));
      const red = 'category/' + this.id + '/course/' + this.course_id + '/chapter/' + this.chapter_id + '/delete';
      this.router.navigate([red]);
    } else if (type === 2) {
      window.location.reload();
    } else if (type === 3) {
      window.location.replace(`/category/${this.id}/course/${this.course_id}/chapter/${this.next}`);
    }
  }

  loadPageInfo() {
    this.chapterService.noOfChapterInCourse(this.id, this.course_id, this.chapter_id).subscribe(number => this.noChapter = number);
    this.chapterService.getNext(this.id, this.course_id, this.chapter_id).subscribe(next => this.next = next);
    this.chapterService.getPrev(this.id, this.course_id, this.chapter_id).subscribe(prev => this.prev = prev);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryListService } from '../category-list/category-list.service';
import { CourseListService } from '../course-list/course-list.service';
import { Chapter} from './chapter';
import { ChapterService } from './chapter.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-single-course',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  public id: number;
  public title: Observable<string>;
  public subtitle: Observable<string>;
  public categoryTitle: Observable<string>;
  public categoryBackground: Observable<string>;
  public course_id: number;
  public chapters: Observable<Chapter[]>;
  public len: number;
  public text: string = 'See the full curriculum';
  private found: any;
  public error: boolean = false;
  public chapter_id: number;
  public link: string;
  public admin: boolean;
  public add: boolean;
  public delete: boolean;

  constructor(private router: Router,
              private categoryListService: CategoryListService,
              private route: ActivatedRoute,
              private courseListService: CourseListService,
              private chapterListService: ChapterService,
              private userService: UserService,
              private http: HttpClient
              ) { }

  ngOnInit() {
    this.userService.getAdmin().subscribe(data => this.admin = data);

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['categoryId'];
        this.course_id = +params['courseId'];
        this.courseListService.courseInCategory(this.id, this.course_id).subscribe(data => {
          this.found = data;
          if (this.found === undefined) {
            this.router.navigate(['/category/', this.id, 'course', this.course_id , 'notfound']);
          }
        });
        if (params['chapterId'] !== null) {
          this.chapter_id = +params['chapterId'];
          if (params['message'] !== null) {
            if (params['message'] === 'notfound') {
              this.error = true;
            } else if (params['message'] === 'delete') {
              this.delete = true;
            } else if (params['message'] === 'add'){
              this.add = true;
            }
          }
        }
        this.categoryTitle = this.categoryListService.getCategoryTitleById(this.id);
        this.categoryBackground = this.categoryListService.getCategoryBackgroundById(this.id);
      }
    );

    this.chapterListService.getSize(this.id, this.course_id).subscribe(data => this.len = data);

    this.title = this.courseListService.getCourseTitleById(this.id, this.course_id);
    this.subtitle = this.courseListService.getCourseSummaryById(this.id, this.course_id);

    this.chapters = this.chapterListService.getChapters(this.id, this.course_id).map(data => data.slice(0, 4));

    if (this.error === true) {
      this.link = '../../../../';
      setTimeout(() => {
        this.id = 0;
        this.error = false;
      }, 10000);
    }

  }

  load() {
    if (this.text === 'See the full curriculum') {

      this.chapters = this.chapterListService.getChapters(this.id, this.course_id);
      this.text = 'Looks less';

    } else {

      this.chapters = this.chapterListService.getChapters(this.id, this.course_id).map(data => data.slice(0, 4));
      this.text = 'See the full curriculum';

    }
  }

  loadPage(id: number){
    this.router.navigate(['category', this.id, 'course', this.course_id, 'chapter', id]);
  }

  adminOp(command) {
    if (command === 1) {
      const cnf = confirm('Are you sure to delete this course?');
      if (cnf === true) {
        const url = 'http://192.168.151.36:8000/api/courses?courseId=' + this.course_id;
        this.http.delete(url).subscribe();
        this.router.navigate(['category/' + this.id + '/course/' + this.course_id + '/delete']);
      }
    } else if (command === 3) {
      this.router.navigate(['admin/add/chapter/' + this.id + '/' + this.course_id]);
    }
  }

}

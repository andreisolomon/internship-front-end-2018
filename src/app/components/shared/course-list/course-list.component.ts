import { Component, OnInit } from '@angular/core';
import { CourseListService } from './course-list.service';
import {CourseList} from './course-list.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public datas: CourseList[];
  public discover: boolean = true;
  public text: string = 'Discover more';

  constructor(private courseListService: CourseListService) { }

  ngOnInit() {

    this.datas = this.courseListService.getDatas().slice(0, 6);

  }

  load() {
    if (this.text === 'Discover more'){

      this.datas = this.courseListService.getDatas();
      this.text = 'Looks less';

    } else {

      this.datas = this.courseListService.getDatas().slice(0, 6);
      this.text = 'Discover more';

    }

  }

}

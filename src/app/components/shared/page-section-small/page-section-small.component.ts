import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-section-small',
  templateUrl: './page-section-small.component.html',
  styleUrls: ['./page-section-small.component.css']
})
export class PageSectionSmallComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() courseBackground: string;
  @Input() courseTitle: string;
  @Input() showCourse: boolean;

  constructor() { }

  ngOnInit() {

  }

}

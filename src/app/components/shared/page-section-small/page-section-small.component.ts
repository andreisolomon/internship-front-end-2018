import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-section-small',
  templateUrl: './page-section-small.component.html',
  styleUrls: ['./page-section-small.component.css']
})
export class PageSectionSmallComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() categoryBackground: string;
  @Input() categoryTitle: string;
  @Input() showCourse: boolean;
  @Input() noChapter: number;
  @Input() chapter: boolean;

  constructor() { }

  ngOnInit() {

  }

}

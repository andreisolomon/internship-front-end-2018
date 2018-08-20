import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  public isLoggedIn: boolean = true;
  public isAdmin: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}

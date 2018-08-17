import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  toLogout() {
    this.route.navigate(['login']);
  }

}

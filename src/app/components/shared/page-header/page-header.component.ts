import { Component, OnInit } from '@angular/core';
import { UserService } from '../../admin/user/user.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  public isLoggedIn: boolean = true;
  public isAdmin: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}

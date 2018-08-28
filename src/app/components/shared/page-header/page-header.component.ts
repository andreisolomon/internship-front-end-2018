import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { User } from '../../../user';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getInfo().subscribe(data => this.user = data);

  }

}

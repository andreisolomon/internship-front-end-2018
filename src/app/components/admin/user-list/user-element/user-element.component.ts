import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../user/user.model';
import { UserListService } from '../user-list.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user-element',
  templateUrl: './user-element.component.html',
  styleUrls: ['./user-element.component.css']
})
export class UserElementComponent implements OnInit {
  public user;
  public id;

  constructor(private userList: UserListService, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );

    this.userList.getUserById(this.id).subscribe(data => console.log(this.user = data));

  }

}

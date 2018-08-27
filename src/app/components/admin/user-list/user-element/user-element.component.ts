import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../user/user.model';

@Component({
  selector: 'app-user-element',
  templateUrl: './user-element.component.html',
  styleUrls: ['./user-element.component.css']
})
export class UserElementComponent implements OnInit {
  @Input() user: User[];

  constructor() { }

  ngOnInit() {
  }

}

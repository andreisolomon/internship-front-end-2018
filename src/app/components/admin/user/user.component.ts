import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any [];

  constructor() {
    this.users = [
      {id: 11, name: 'Mr. Nice', isAdmin: 1, score: 3},
      {id: 12, name: 'Narco', isAdmin: 0, score: 3},
      {id: 13, name: 'Bombasto', isAdmin: 0, score: 3},
      {id: 14, name: 'Celeritas', isAdmin: 0, score: 3},
      {id: 15, name: 'Magneta', isAdmin: 0, score: 3},
      {id: 16, name: 'RubberMan', isAdmin: 0, score: 3},
      {id: 17, name: 'Dynama', isAdmin: 0, score: 3},
      {id: 18, name: 'Dr IQ', isAdmin: 0, score: 3},
      {id: 19, name: 'Magma', isAdmin: 0, score: 3},
      {id: 20, name: 'Tornado', isAdmin: 0, score: 3}
    ];
  }


  ngOnInit() {

  }

}

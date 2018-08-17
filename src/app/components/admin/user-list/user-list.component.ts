import { Component, OnInit } from '@angular/core';
import {User} from '../user/user.model';
import { UserListService} from './user-list.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // users: any [];
  public users: User[];
  constructor(private userListService: UserListService) {

    // this.users = [
    //   {id: 11, name: 'Mr. Nice', isAdmin: 1, score: 3, tags: ['bla', 'bla'], date: '15 OCT 2018' },
    //   {id: 12, name: 'Narco', isAdmin: 0, score: 3, tags: ['bla'], date: '15 OCT 2018' },
    //   {id: 13, name: 'Bombasto', isAdmin: 0, score: 3, tags: ['bla'], date: '15 OCT 2018' },
    //   {id: 14, name: 'Celeritas', isAdmin: 0, score: 3, tags: ['bla'], date: '15 OCT 2018' },
    //   {id: 15, name: 'Magneta', isAdmin: 0, score: 3, tags: ['bla'], date: '15 OCT 2018' },
    //   {id: 16, name: 'RubberMan', isAdmin: 0, score: 3, tags: ['bla'], date: '15 OCT 2018' },
    //   {id: 17, name: 'Dynama', isAdmin: 0, score: 3, tags: ['bla'], date: '15 OCT 2018' },
    //   {id: 18, name: 'Dr IQ', isAdmin: 0, score: 3, tags: ['bla'], date: '15 OCT 2018' },
    //   {id: 19, name: 'Magma', isAdmin: 0, score: 3, tags: ['bla'], date: '15 OCT 2018' },
    //   {id: 20, name: 'Tornado', isAdmin: 0, score: 3, tags: ['bla'], date: '15 OCT 2018' }
    // ];
  }

  ngOnInit() {
    this.users = this.userListService.getData();
  }

}

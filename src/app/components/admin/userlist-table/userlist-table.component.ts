import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatIconRegistry, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DomSanitizer} from '@angular/platform-browser';
// import {User} from '../components/admin/user/user.model';
// import {UserListService} from '../components/admin/user-list/user-list.service';
// import {User} from '../components/admin/user/user.model';

export interface PeriodicElement {
  isAdmin: boolean;
  image : string,
  name: string;
  date: string;
  score: number;
  tags: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {isAdmin: false, image: '../../../../../assets/images/img3.jpeg', name: 'Mr. Nice', tags : 'bla', score: 3, date: '15 oct 2018'},
  {isAdmin: false, image: '../../../../../assets/images/img3.jpeg', name: 'Mr. Nice', tags : 'bla', score: 3, date: '15 oct 2018'},
  {isAdmin: false, image: '../../../../../assets/images/img3.jpeg', name: 'Mr. Nice', tags : 'bla', score: 3, date: '15 oct 2018'},
];
@Component({
  selector: 'app-userlist-table',
  templateUrl: './userlist-table.component.html',
  styleUrls: ['./userlist-table.component.css'],
encapsulation: ViewEncapsulation.None
})
export class UserlistTableComponent {
  displayedColumns: string[] = ['select', 'image', 'name', 'tags', 'score', 'date', 'button'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
<<<<<<< HEAD:src/app/components/admin/userlist-table/userlist-table.component.ts

  

=======
>>>>>>> 6451cd2680e6eabe4098d9e2985563fd5e56ad78:src/app/components/admin/userlist-table/userlist-table.component.ts
}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatIconRegistry, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DomSanitizer} from '@angular/platform-browser';
import {User} from '../components/admin/user/user.model';
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
// const USER_DATA : User[]=
// 1, 1, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ', 3, '15 OCT 2018'),
// new User(0 , 2, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ', 3, '15 OCT 2018'),
//   new User(0 , 3, '../../../../../assets/images/img3.jpeg', 'Mr. Nice', ' bla ', 3, '15 OCT 2018')
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

  // public users: User[];
  // constructor(private userListService: UserListService) {
  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // }
  // ngOnInit() {
    // this.users = this.userListService.getData();
    // }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    // masterToggle() {
    //   this.isAllSelected() ?
    //     this.selection.clear() :
    //     this.dataSource.data.forEach(row => this.selection.select(row));
    // }

}

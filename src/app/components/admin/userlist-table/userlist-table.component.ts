import {Component, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  isAdmin: boolean;
  image: string;
  name: string;
  date: string;
  score: number;
  tags: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {isAdmin: false, image: '../../../../../assets/images/img3.jpeg', name: 'Mr. Nice', tags : 'bla', score: 3, date: '15 oct 2018'},
  {isAdmin: false, image: '../../../../../assets/images/img3.jpeg', name: 'Mr. Nice', tags : 'bla', score: 3, date: '15 oct 2018'},
  {isAdmin: false, image: '../../../../../assets/images/img3.jpeg', name: 'Mr. Nice', tags : 'bla', score: 3, date: '15 oct 2018'}
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

}

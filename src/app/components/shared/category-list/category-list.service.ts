import { Category } from './category';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
import {api} from '../../../../assets/data/apiUrl';


@Injectable()
export class CategoryListService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(api.base + '/categories');
  }

  getCategoryById(id: number) {
    return this.getCategories().map(data => data.find(item => item.id === id));
  }

  getCategoryTitleById(id: number) {
    return this.getCategories().map(data => data.find(item => item.id === id).CategoryName);
  }

  getCategoryBackgroundById(id: number) {
    return this.getCategories().map(data => data.find(item => item.id === id).Background);
  }

  getCategoryIdByTitle(title: string) {
    return this.getCategories().map(data => data.find(item => item.CategoryName.toLocaleLowerCase() === title).id);
  }

  categoryExist(id: number) {
    return this.getCategories().map(data => !!data.find(item => item.id === id));
  }

}

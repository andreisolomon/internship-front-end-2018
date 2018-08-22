import { Category } from './category';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';


@Injectable()
export class CategoryListService {

  private data: Category[] = [];

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get('http://localhost:3000/categories');
  }

  getCategoryById(id: number) {
    return this.getCategories().map(data => data.find(item => item.id === id));
  }

  getCategoryTitleById(id: number) {
    return this.getCategories().map(data => data.find(item => item.id === id).title);
  }

  getCategoryBackgroundById(id: number) {
    return this.getCategories().map(data => data.find(item => item.id === id).background);
  }

  categoryExist(id: number) {
    return this.getCategories().map(data => !!data.find(item => item.id === id));
  }

}

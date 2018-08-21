import { Category } from './category';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class CategoryListService {

  private data: Category[] = [];

  constructor(private http: HttpClient) {

    this.getCategories().subscribe(data => this.data = data);

  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('./assets/categories.json');
  }

  getData() {
    return this.data;
  }

  getCategoryById(id: number) {
    for (let category of this.data) {
      if (category.id === id) {
        return category;
      }
    }
    return false;
  }

  getCategoryTitleById(id: number) {
    for (let category of this.data) {
      if (category.id === id) {
        return category.title;
      }
    }
  }

  getCategoryBackgroundById(id: number) {
    for (let category of this.data) {
      if (category.id === id) {
        return category.background;
      }
    }
  }

}

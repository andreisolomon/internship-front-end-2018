import { Category } from './category-list.model';

export class CategoryListService {

  constructor() {}

  private data: Category[] = [

    new Category(1, 'title 1', 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'),
    new Category(2, 'title 2', 'linear-gradient(to right, #bc4e9c, #f80759)'),
    new Category(3, 'title 3', 'linear-gradient(to right, #59c173, #a17fe0, #5d26c1)'),
    new Category(4, 'title 4', 'linear-gradient(to right, #c31432, #240b36)'),
    new Category(5, 'title 5', 'linear-gradient(to right, #1f4037, #99f2c8)'),
    new Category(6, 'title 6', 'linear-gradient(to right, #fc4a1a, #f7b733)'),
    new Category(7, 'title 7', 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'),
    new Category(8, 'title 8', 'linear-gradient(to right, #000000, #0f9b0f)'),
    new Category(9, 'title 9', 'linear-gradient(to right, #200122, #6f0000)'),
    new Category(10, 'title 10', 'linear-gradient(to right, #000428, #004e92)')

  ];

  getData() {
    return this.data;
  }

  getCategoryById(id: number) {
    for (let category of this.data) {
      if (category.getId() === id) {
        return category;
      }
    }
    return false;
  }

  getCategoryTitleById(id: number) {
    for (let category of this.data) {
      if (category.getId() === id) {
        return category.getTitle();
      }
    }
  }

  getCategoryBackgroundById(id: number) {
    for (let category of this.data) {
      if (category.getId() === id) {
        return category.getBackground();
      }
    }
  }

}

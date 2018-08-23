export const api = {
  base: 'http://192.168.151.36:8000/api',
  get user() {return this.base + '/users'},
  get register() {return this.base + '/register'},
  get category() {return this.base + '/category'},

  course : 'category/:categoryId/course/:courseId',
  // toate capitolele
  chapter : 'category/:categoryId/course/:courseId/chapter',

  quiz : 'category/:categoryId/course/:courseId/chapter/:chapterId/quiz',

  answer : 'category/:categoryId/course/:courseId/chapter/:chapterId/quiz/:quizId/quizOption/:quizOptionId/answer',

};

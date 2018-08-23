export const api = {
  base: 'http://192.168.151.36:8000/api',
  user: '/user',
  registerer : '/register',
  changeRole : '/user/change/:userId',
  category : '/category',
  // toate cursurile
  categoryIdCourse : 'category/:categoryId/course',
  // un curs
  course : 'category/:categoryId/course/:courseId',
  // toate capitolele
  chapter : 'category/:categoryId/course/:courseId',
  chapterId : 'category/:categoryId/course/:courseId/chapter/:chapterId',
  // intrebarile
  quiz : 'category/:categoryId/course/:courseId/chapter/:chapterId/quiz',
  quizId: 'category/:categoryId/course/:courseId/chapter/:chapterId/quiz/:quizId',
  // quizOption - raspunsurile
  quizOption : 'category/:categoryId/course/:courseId/chapter/:chapterId/quiz/:quizId/quizOption',
  quizOptionId : 'category/:categoryId/course/:courseId/chapter/:chapterId/quiz/:quizId/quizOption/:quizOptionId',
  // raspunsul dat de un user
  answer : 'category/:categoryId/course/:courseId/chapter/:chapterId/quiz/:quizId/quizOption/:quizOptionId/answer',
  // toate raspunsurile date de toti
  allAnswer : '/answers',
  answerId : '/answers/:answersId',
  // trebuie discutat iar cu back-end
  // userImage : '',
  // courseImage : ''
  login : '/login',
  logout : '/logout',
  // ?? reset
  resetPass : '/reset',
  // scor nu este inca stabil
  // score : '/category/:categoryId/course'
};

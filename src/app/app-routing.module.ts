import { LoginComponent } from './components/shared/login/login.component';
import { MyAccountComponent } from './components/shared/my-account/my-account.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserComponent } from './components/admin/user/user.component';
import { CategoryListComponent } from './components/shared/category-list/category-list.component';
import { ChapterQuestionsComponent } from './components/shared/chapter-questions/chapter-questions.component';
import { UserRegisterComponent } from './components/shared/user-register/user-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './components/shared/reset-password/reset-password.component';
import { ChapterListComponent } from './components/shared/chapter-list/chapter-list.component';
import { CourseListComponent } from './components/shared/course-list/course-list.component';
import { FinishedCourseComponent } from './components/shared/finished-course/finished-course.component';
import {ChapterContentComponent} from './components/shared/chapter-content/chapter-content.component';
import {CourseComponent} from './components/admin/course/course.component';
import { ForgotPasswordComponent } from './components/shared/forgot-password/forgot-password.component';

const routers: Routes = [
  { path: '', component: CategoryListComponent},
  { path: 'dashboard', component: CategoryListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'account', component: MyAccountComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'courses', component: CategoryListComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  {
    path: 'courses/:categoryId',
    component: CourseListComponent
  },
  {
    path: 'courses/:categoryId/notfound',
    component: CategoryListComponent
  },
  
  {
    path: 'courses/:categoryId/:courseId',
    component: ChapterListComponent
  },
  {
    path: 'courses/:categoryId/:courseId/notfound',
    component: CourseListComponent
  },
  {
    path: 'courses/:categoryId/:courseId/:chapterId',
    component: ChapterContentComponent
  },
  {
    path: 'courses/:categoryId/:courseId/:chapterId/quiz',
    component: ChapterQuestionsComponent
  },
  {
    path: 'finished',
    component: FinishedCourseComponent
  },
  { path: 'admin/course', component: CourseComponent },
  { path: 'register', component: UserRegisterComponent},
  { path: 'resetpassword', component: ResetPasswordComponent},
  { path: ':categoryId', redirectTo: 'courses/:categoryId'},
  { path: '**', redirectTo: 'courses' },

];

@NgModule(
  {
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
  }
)

export class  AppRoutingModule {

}


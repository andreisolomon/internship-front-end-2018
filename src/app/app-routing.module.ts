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
import { ChapterContentComponent } from './components/shared/chapter-content/chapter-content.component';
import { CourseComponent } from './components/admin/course/course.component';
import { ForgotPasswordComponent } from './components/shared/forgot-password/forgot-password.component';
import { AuthGuardService } from './auth-guard.service';
import { UserElementComponent } from './components/admin/user-list/user-element/user-element.component';
import { AdminGuardService } from './admin-guard.service';
import { ChapterComponent } from './components/admin/chapter/chapter.component';
import {CourseEditComponent} from './components/admin/course-edit/course-edit.component';

const routers: Routes = [
  {
    path: '',
    component: CategoryListComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'dashboard',
    component: CategoryListComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: MyAccountComponent },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: 'users/:id',
    component: UserComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  { path: 'forgot', component: ForgotPasswordComponent },
  {
    path: 'category',
    component: CategoryListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'category/:categoryId',
    component: CourseListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'category/:categoryId/notfound',
    component: CategoryListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'category/:categoryId/course/:courseId',
    component: ChapterListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'category/:categoryId/course/:courseId/:message',
    component: CourseListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'category/:categoryId/course/:courseId/chapter/:chapterId',
    component: ChapterContentComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'category/:categoryId/course/:courseId/chapter/:chapterId/:message',
    component: ChapterListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'category/:categoryId/course/:courseId/chapter/:chapterId/:message/quiz',
    component: ChapterQuestionsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'finished',
    component: FinishedCourseComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/add/course/:categoryId',
    component: CourseComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: 'admin/edit/course/:categoryId/:courseId',
    component: CourseEditComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: 'admin/add/chapter/:categoryId/:courseId',
    component: ChapterComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  {
    path: 'users/edit/:id',
    component: UserElementComponent,
    canActivate: [AuthGuardService, AdminGuardService]
  },
  { path: 'register', component: UserRegisterComponent},
  { path: 'resetpassword/:token', component: ResetPasswordComponent},
  {
    path: 'dashboard/:categoryId',
    redirectTo: 'category/:categoryId',
    canActivate: [AuthGuardService]
  },
  {
    path: ':categoryId',
    redirectTo: 'category/:categoryId',
    canActivate: [AuthGuardService]
  },
  {
    path: 'users/edit/:id',
    component: UserElementComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: 'category' }

];

@NgModule(
  {
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
  }
)

export class  AppRoutingModule {

}

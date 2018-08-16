import { LoginComponent } from './components/shared/login/login.component';
import { MyAccountComponent } from './components/shared/my-account/my-account.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserComponent } from './components/admin/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryListComponent } from './components/shared/category-list/category-list.component';
import { ChapterQuestionsComponent } from './components/shared/chapter-questions/chapter-questions.component';
import { UserRegisterComponent } from './components/shared/user-register/user-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './components/shared/reset-password/reset-password.component';
import { ChapterContentComponent } from './components/shared/chapter-content/chapter-content.component';
import { ChapterListComponent } from './components/shared/chapter-list/chapter-list.component';
import { CourseListComponent } from './components/shared/course-list/course-list.component';

const routers: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: MyAccountComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CategoryListComponent },
  {
    path: 'courses/:id',
    component: CourseListComponent
  },
  {
    path: 'courses/:id/notfound',
    component: CategoryListComponent
  },
  {
    path: 'courses/:id/:courseId',
    component: ChapterListComponent
  },
  {
    path: 'courses/:id/:courseId/:chapterId',
    component: ChapterContentComponent
  },
  {
    path: 'courses/:id/:courseId/:chapterId/quiz',
    component: ChapterQuestionsComponent
  },
  { path: 'register', component: UserRegisterComponent},
  { path: 'resetpassword', component: ResetPasswordComponent},
  { path: '**', redirectTo: 'dashboard' },

];

@NgModule(
  {
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
  }
)

export class  AppRoutingModule {

}


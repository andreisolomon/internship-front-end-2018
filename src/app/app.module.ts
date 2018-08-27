import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { CourseComponent } from './components/admin/course/course.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserComponent } from './components/admin/user/user.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HeroComponent } from './components/shared/hero/hero.component';
import { CategoryListComponent } from './components/shared/category-list/category-list.component';
import { CourseListComponent } from './components/shared/course-list/course-list.component';
import { MyAccountComponent } from './components/shared/my-account/my-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChapterQuestionsComponent } from './components/shared/chapter-questions/chapter-questions.component';
import { UserRegisterComponent } from './components/shared/user-register/user-register.component';
import { ResetPasswordComponent } from './components/shared/reset-password/reset-password.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryListService } from './components/shared/category-list/category-list.service';
import { PageSectionComponent } from './components/shared/page-section/page-section.component';
import { CourseListService } from './components/shared/course-list/course-list.service';
import { ChapterListComponent } from './components/shared/chapter-list/chapter-list.component';
import { PageSectionSmallComponent } from './components/shared/page-section-small/page-section-small.component';
import { ChapterService } from './components/shared/chapter-list/chapter.service';
import { UserListService } from './components/admin/user-list/user-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule,  MatCheckboxModule } from '@angular/material';
import { QuestionsService } from './components/shared/chapter-questions/questions.service';
import { AnswersService } from './components/shared/chapter-questions/answers.service';
import { FinishedCourseComponent } from './components/shared/finished-course/finished-course.component';
import { ChapterContentComponent } from './components/shared/chapter-content/chapter-content.component';
import { ShortenPipe } from './shorten.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgotPasswordComponent } from './components/shared/forgot-password/forgot-password.component';
import { TokenInterceptor } from './token-interceptor';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import {UserElementComponent} from './components/admin/user-list/user-element/user-element.component';
import { UserService } from './components/admin/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CourseComponent,
    UserListComponent,
    UserComponent,
    LoginComponent,
    HeroComponent,
    CategoryListComponent,
    CourseListComponent,
    MyAccountComponent,
    DashboardComponent,
    ChapterQuestionsComponent,
    UserRegisterComponent,
    ResetPasswordComponent,
    PageSectionComponent,
    ChapterListComponent,
    PageSectionSmallComponent,
    FinishedCourseComponent,
    ChapterContentComponent,
    ShortenPipe,
    ForgotPasswordComponent,
    UserElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseListService,
    ChapterService,
    QuestionsService,
    AnswersService,
    UserListService,
    CategoryListService,
    UserService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuardService
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }

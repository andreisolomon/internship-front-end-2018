import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import './polyfills';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
import { ChapterContentComponent } from './components/shared/chapter-content/chapter-content.component';
import { CategoryListService } from './components/shared/category-list/category-list.service';
import { PageSectionComponent } from './components/shared/page-section/page-section.component';
import { CourseListService } from './components/shared/course-list/course-list.service';
import { ChapterListComponent } from './components/shared/chapter-list/chapter-list.component';
import { PageSectionSmallComponent } from './components/shared/page-section-small/page-section-small.component';
import { ChapterService } from './components/shared/chapter-content/chapter.service';
import { UserListService } from './components/admin/user-list/user-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserlistTableComponent } from './userlist-table/userlist-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule,  MatCheckboxModule,
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

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
    ChapterContentComponent,
    PageSectionComponent,
    ChapterListComponent,
    PageSectionSmallComponent,
    UserlistTableComponent
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

  ],
  providers: [CategoryListService, CourseListService, ChapterService, UserListService],
  bootstrap: [AppComponent]
})

export class AppModule { }

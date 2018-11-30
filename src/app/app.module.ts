import { PostService } from './services/post.service';

import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupComponent } from './signup/signup.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostComponent } from './post/post.component';
import { AppErrorHandler } from './common/app-error-handler';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { NavbarComponent } from './navbar/navbar.component';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupComponent,
    NewCourseFormComponent,
    PostComponent,
    NavbarComponent,
    GitHubFollowersComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([

      { 
        path: 'followers/:username' ,
         component: GithubProfileComponent
      },
      {
         path: '' , 
         component: HomeComponent
      },
      { 
        path: 'followers' , 
        component: GitHubFollowersComponent
      },
      
      { 
        path: 'posts' ,
         component: PostComponent
      },
      { 
        path: '**' ,
         component: NotFoundComponent
      }
    ])
  ],
  providers: [
   CourseService,
   PostService,
   { provide : ErrorHandler , useClass: AppErrorHandler}
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

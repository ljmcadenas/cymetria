import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { LoginService } from './login.service';
import { DataService } from './data.service';
import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './course-resolver.service';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    PrivateComponent,
    HomeComponent,
    CourseComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, LoginService, DataService, CourseResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

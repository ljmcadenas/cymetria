import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './course-resolver.service';
import { AuthGuard } from './auth-guard.service';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
  	path: '',
    component: PublicComponent,
    children: [
    	{
    		path: 'login',
    		component: LoginComponent
    	}
    ]
  },
  {
  	path: '',
    component: PrivateComponent,
    canActivate: [AuthGuard],
    children: [
    	{
    		path: 'home',
    		component: HomeComponent
      },
      {
        path: 'curso/:name',
        component: CourseComponent,
        resolve: {
          course: CourseResolver
        }
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

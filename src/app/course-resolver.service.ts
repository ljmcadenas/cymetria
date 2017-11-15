import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Course } from './course.model';
import { DataService } from './data.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    let course: Course = new Course();
    course.name = route.paramMap.get('name');

    return this.dataService.getCourses().map( courses => {
      const currentCourse = courses.filter( _course => _course.name === course.name);

      return currentCourse.length ? currentCourse[0] : null;
    })
    }
}
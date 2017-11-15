import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Course } from './course.model';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get('assets/data/bd.json')
      .map( (data: any) => {
        return data.courses;
      });
  }
}

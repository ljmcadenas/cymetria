import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Course } from '../course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .card {
      max-width: 200px;
    }
    .card img {
      max-width: 100%;
    }
  `]
})
export class HomeComponent implements OnInit {
  courses: Course[];

  constructor(private dataService: DataService) {
    this.dataService.getCourses()
    .subscribe( courses => this.courses = courses);
  }

  ngOnInit() {}


}

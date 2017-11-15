import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Course } from "../course.model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [`
    .row.navigation {
      margin-bottom: 20px;
    }
  `]
})
export class CourseComponent implements OnInit {
  course: Course;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.data.subscribe( (data: { course: Course }) => {
      this.course = data.course;
    });
  }

  back(): void {
    this.location.back();
  }
}

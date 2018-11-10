import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { CourseService } from './courses.service';

@Component({
    selector : 'courses' ,
    template : `
                <h2>{{ title }}</h2>
                <ul>
                <li *ngFor="let course of courses">
                {{ course }}
                </li>
                </ul>
    `
})
//here *ngFor is the directives and let course of courses iterating the courses
export class CoursesComponent{
    title= "List of courses";
    courses;

    constructor(service: CourseService){     
        this.courses = service.getCourses();//calling the method
    }

    getTitle(){
        return this.title;
    }
}
//ng g c course
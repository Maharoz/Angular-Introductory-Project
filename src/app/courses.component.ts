import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { CourseService } from './courses.service';

@Component({
    selector : 'courses' ,
    template : `
                <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
//{{ Double qutaion is stands for interpolation }}
//here *ngFor is the directives and let course of courses iterating the courses
export class CoursesComponent{
    // title= "List of courses";
    // imageUrl= "http://lorempixel.com/400/200";
    isActive = true;
 
}
//ng g c course
import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { CourseService } from './courses.service';

@Component({
    selector : 'courses' ,
    template : `
    <div (click)="onDivClicked()">
                <button (click)="onSave($event)">Save</button>
    </div>
    `
})
//{{ Double qutaion is stands for interpolation }}
//here *ngFor is the directives and let course of courses iterating the courses
export class CoursesComponent{
    // title= "List of courses";
    // imageUrl= "http://lorempixel.com/400/200";
    // isActive = true;

    onDivClicked(){
        console.log("div was clicked");
    }

    onSave($event){
        $event.stopPropagation(); //onDivClicked will not fired
        console.log("button was clicked", $event);
    }
 
}
//ng g c course
import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { CourseService } from './courses.service';

@Component({
    selector : 'courses' ,
    template : `
  
   <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    `
})

export class CoursesComponent{
    email= "me@example.com";
    onKeyUp(){     
        console.log(this.email);
    }
}
//ng g c course
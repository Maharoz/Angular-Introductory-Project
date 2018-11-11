import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { CourseService } from './courses.service';

@Component({
    selector : 'courses' ,
    template : `
   <input #email (keyup.enter)="onKeyUp(email.value)"/>
    `
})

export class CoursesComponent{
    
    onKeyUp(email){     
        console.log(email);
    }
}
//ng g c course
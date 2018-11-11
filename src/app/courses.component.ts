import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { CourseService } from './courses.service';

@Component({
    selector : 'courses' ,
    template : `
   <input (keyup.enter)="onKeyUp()"/>
    `
})

export class CoursesComponent{
    
    onKeyUp(){     
        console.log("Enter was pressed");
    }
}
//ng g c course
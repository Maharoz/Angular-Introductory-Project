import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
import { CourseService } from './courses.service';

@Component({
    selector : 'courses' ,
    template : `
    {{ course.title | uppercase | lowercase }}<br/>
    {{ course.students | number }}<br/>
    {{ course.rating | number : '1.2-2' }}<br/>
    {{ course.price | currency:'AUD':true:'3.2-2' }}<br/>
    {{ course.releaseDate | date:'shortDate' }}
  
   
    `
})

export class CoursesComponent{
   course = {
       title: "the complete angular course",
       rating:4.9953656,
       students:309877,
       price:190.95,
       releaseDate:new Date(2016,3,1)
   }
}

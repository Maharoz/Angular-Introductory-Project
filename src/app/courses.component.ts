import { Component } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';

@Component({
    selector : 'courses' ,
    template : '<h2>{{ "Title: " + title }}</h2>'
})
export class CoursesComponent{
    title= "List of courses"

    getTitle(){
        return this.title;
    }
}
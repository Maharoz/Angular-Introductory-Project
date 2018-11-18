import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  form = new FormGroup({
    username : new FormControl('',
    Validators.required,
    UsernameValidators.shouldBeUnique),
    password : new FormControl('',Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }
  login(){
    this.form.setErrors({
      inValidLogin:true
    });
    // let isValid = authService.login(this.form.value);
    // if(!isValid){
    //   this.form.setErrors({
    //     inValidLogin:true
    //   })
    // }
  }
  get username(){
    return this.form.get('username');
   
  }

}

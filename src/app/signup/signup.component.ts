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
    account : new FormGroup({
      username : new FormControl(),
      password : new FormControl()
    }) 
  });

  constructor() { }

  ngOnInit() {
  }
  
  get username(){
    return this.form.get('account.username');
   
  }

}

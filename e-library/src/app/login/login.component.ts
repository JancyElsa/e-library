import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// type:any='password';
// isText:boolean=false;
// eyeIcon:any="fa-eye-slash";

  constructor() { }

  ngOnInit(): void {
    
  }
  
  
    loginForm:FormGroup=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
     })
  addLogin(){
    console.log(this.loginForm.value);
  }
  
// hideShowPassword(){
// this.isText=!this.isText;
// this.isText ? this.eyeIcon='fa-icon':this.eyeIcon='fa-icon-slash';
// this.isText? this.type='text': this.type='password';
// }
}

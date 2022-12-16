import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../Interfaces/ilogin';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// type:any='password';
// isText:boolean=false;
// eyeIcon:any="fa-eye-slash";
data:any;
  constructor(private authServ:AuthService) { }

  ngOnInit(): void {
    
  }
  
  
    loginForm:FormGroup=new FormGroup({
      Username:new FormControl('',[Validators.required]),
      Password:new FormControl('',[Validators.required])

     })
     private body:ILogin={
      Username:this.loginForm.controls.Username.value,
      Password:this.loginForm.controls.Password.value
     }
  addLogin(){
    this.loginForm.controls.value.markAsTouched();
    console.log(this.loginForm.value);
this.authServ.signIn(this.body).subscribe(data=>{
  console.log(data);
  if(this.data=='')
  {
    alert('incorrect username and password')
  }
  else{
localStorage.setItem('jwt',this.data)
  }
})
    
  }
  
// hideShowPassword(){
// this.isText=!this.isText;
// this.isText ? this.eyeIcon='fa-icon':this.eyeIcon='fa-icon-slash';
// this.isText? this.type='text': this.type='password';
// }
}

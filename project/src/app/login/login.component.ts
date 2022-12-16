import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginForm:FormGroup=new FormGroup({
    Username:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.required])

   })
   
addLogin(){
  
  console.log(this.loginForm.value);
  
//   if(this.loginForm.Username.value=='admin' && this.loginForm.Password.value =='admin'){
//     this.router.navigate(['Dashboard'])
//   }

  
// }
}
}
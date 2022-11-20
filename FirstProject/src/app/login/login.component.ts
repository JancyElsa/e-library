import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:ProductsService,private rout:Router) { }
  public Issingup=false;
  swap1():void
  {
    this.Issingup=false;
  }
  swap2():void
  {
    this.Issingup=true;
  }
  //Login Page validation
  pagel = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.email]),
    pws:new FormControl('',[Validators.required])
  })

  //Signup Page Validation
  pageL1= new FormGroup({
    firstname1:new FormControl('',[ Validators.required,Validators.pattern('[a-zA-Z]$')]),
    lastname:new FormControl('',[ Validators.required,Validators.pattern('[a-zA-Z]$')]),
    email:new FormControl('',[ Validators.required,Validators.email]),
    pwd:new FormControl('',[ Validators.required])
  })
  getpwd()
  {
    let username:string=String(this.pagel.controls.firstname.value);
    let password:string=String(this.pagel.controls.pws.value);
    if(this.service.verify(username,password)==true)
    {
      this.rout.navigateByUrl('/Home');
    }
  
  }

  ngOnInit(): void {
  }

}

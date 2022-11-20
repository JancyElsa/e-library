import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { IRegister } from '../Interfaces/iregister';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authServ:AuthService) { }

  ngOnInit(): void {
    
  }
  regForm:FormGroup=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]$")]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$")])

  })
  private regObj:IRegister={
    firstname:this.regForm.value.firstname,
    lastname:this.regForm.value.lastname,
    email:this.regForm.value.email,
    password:this.regForm.value.password
  }


  // }
  // private regObj:IRegister={
  //   Username:this.regForm.value.Username,
  //  Password:this.regForm.value.Password,
  //   Email:this.regForm.value.Email,
  //   Phone:this.regForm.value.Phone


  // }
  onSubmit()
  {
    console.log(this.regForm.value);
    this.authServ.signUp(this.regObj).subscribe(data=>{
      console.log(data);
      this.regForm.reset()
  })

}
}

import { Component, OnInit } from '@angular/core';
import { IRegister } from '../Interface/iregister';
import {FormGroup,FormControl,Validators} from '@angular/forms'
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
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    designation:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required])

  })
//   private regObj:IRegister={
//     empid:this.regForm.value.email,
//     firstname:this.regForm.value.firstname,
//     lastname:this.regForm.value.lastname,
//     email:this.regForm.value.email,
//     designation:this.regForm.value.designation,
//     salary:this.regForm.value.salary
    
//   }
//   onSubmit()
//   {
//     console.log(this.regForm.value);
//     this.authServ.signUp(this.regObj).subscribe(data=>{
//       console.log(data);
//       this.regForm.reset()
//   })

// }
}

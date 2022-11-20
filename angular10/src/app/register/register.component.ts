import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
regForm:FormGroup;
helo:any;
public defaultValues={
  firstname:'jancy',
  lastname:'mary',
  email:'jancyjuli1112@gmail.com',
  city:'chennai',
  state:'Tamilnadu',
  createpassword:'jancy',
  repeatpassword:'jancy',
  // address:'61,seetha nagar',
  // check:'checked'
}

  constructor() { }

  ngOnInit(): void {
    this.regForm=new FormGroup(
      {
    firstname:new FormControl(),
    lastname:new FormControl(),
    email:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    createpassword:new FormControl(),
    repeatpassword:new FormControl(),
    address:new FormControl(),
    check:new FormControl()
    
    })
    
  }
   
  
  onSubmit():any{
    
    console.log(this.regForm.get('firstname').value);
    // this.regForm.valueChanges.subscribe(data=>{
    //   console.log(data)
    // })
    // this.helo=this.regForm.value
    // this.helo=this.regForm.patchValue(this.defaultValues)
  }

}


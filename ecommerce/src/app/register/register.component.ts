import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { person } from '../model/person';
import {grt10} from '../customvalidations/personvalidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  personDetail:person[]=[];
regForm:FormGroup=new FormGroup(
  {
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl(),
    email:new FormControl('',[Validators.email]),
    city:new FormControl(),
    state:new FormControl(),
    createpwd:new FormControl(),
    repeatpwd:new FormControl(),
    address:new FormControl(),
    contact:new FormControl('',[grt10])


  }
  );
  constructor() { }

  ngOnInit(): void {
    // this.regForm=new FormGroup({
    //   firstname:new FormControl(),
    //   lastname:new FormControl(),
    //   email:new FormControl(),
    //   gender:new FormControl(),
    //   city:new FormControl(),
    //   state:new FormControl(),
    //   createpwd:new FormControl(),
    //   repeatpwd:new FormControl(),
    //   address:new FormControl(),

    // })
  }
  onSubmit(){
    console.log(this.regForm.value)
    this.personDetail=this.regForm.value;
  }

}

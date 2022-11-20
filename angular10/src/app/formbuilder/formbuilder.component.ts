import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
  regForm:FormGroup;
  helo:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm=this.fb.group(
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
  };
  
  onSubmit():any{
    
    console.log(this.regForm.value);
    this.helo=this.regForm.value
  }

}

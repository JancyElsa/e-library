import { Component, OnInit } from '@angular/core';
import { IRegister } from '../Interface/iregister';
import { AuthService } from '../services/auth.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees:any = [];
  constructor(private authServ:AuthService) { }

  ngOnInit(): void {
    this.onGet();
  }
  regForm: FormGroup = new FormGroup({
    empid: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required])

  })

  private newEmployee: IRegister =
    {
      empid: this.regForm.value.empid,
      firstname: this.regForm.value.firstname,
      lastname: this.regForm.value.lastname,
      email: this.regForm.value.email,
      designation: this.regForm.value.designation,
      salary: this.regForm.value.salary
    }
  

  onAdd() {
    console.log(this.regForm.value)
    this.authServ.postEmp(this.newEmployee).subscribe(data => {
      console.log(data);

      this.regForm.reset();
      this.onGet();



    })


  }
  onGet() {

    this.authServ.getEmp().subscribe(data => {
      console.log(data);
      this.employees = data;
    })


  }
  onEdit(emp: IRegister) {
    this.regForm.setValue({
      empid: emp.empid,
      firstname: emp.firstname,
      lastname: emp.lastname,
      email: emp.email,
      designation: emp.designation,
      salary:emp.salary
    });

  
  }

  
  onUpdate()
  {
    let emp:IRegister = this.regForm.value;

    this.authServ.updateEmp(emp).subscribe(data=>{
      console.log(data);
    })
  }
}

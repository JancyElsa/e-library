import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor() { }
  addlist=new FormGroup({
    bookid:new FormControl('',[Validators.required]),
    booktitle:new FormControl('',[Validators.required]),
    bookdesc:new FormControl('',[Validators.required]),
    authname:new FormControl('',[Validators.required]),
    nob:new FormControl('',[Validators.required])
  })
  previewdata:string[]=[];
  addbook()
  {
    if(this.addlist.valid)
    {
      var tem:any[]=
      [
        this.addlist.controls.bookid.value,
        this.addlist.controls.booktitle.value,
        this.addlist.controls.bookdesc.value,
        this.addlist.controls.authname.value,
        this.addlist.controls.nob.value,
        "null"
      ]
      this.previewdata=tem;
    }
  }
  ngOnInit(): void {
  }

}

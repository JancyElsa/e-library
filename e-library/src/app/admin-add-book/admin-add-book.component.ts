import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {Ibook} from '../ibook';
import {BooksService} from '../books.service'

@Component({
  selector: 'app-admin-add-book',
  templateUrl: './admin-add-book.component.html',
  styleUrls: ['./admin-add-book.component.css']
})
export class AdminAddBookComponent implements OnInit {
data:any;
  constructor(private booksService:BooksService) { }

  ngOnInit(): void {
  }
  addBookForm:FormGroup=new FormGroup({
  bookId:new FormControl('',[Validators.required]),
  bookTitle:new FormControl('',[Validators.required]),
  bookDescription:new FormControl('',[Validators.required]),
  authorName:new FormControl('',[Validators.required]),
  availBooks:new FormControl('',[Validators.required])
  
})

private newBook:Ibook=
{
  bookId:this.addBookForm.value.bookId,
  bookTitle:this.addBookForm.value.bookTitle,
  bookDescription:this.addBookForm.value.bookDescription,
  authorName:this.addBookForm.value.authorName,
  availBooks:this.addBookForm.value.availBooks
}
onAdd(addBookForm:FormGroup)
{
  console.log(addBookForm.value)
  this.booksService.postBook(this.newBook).subscribe(data=>{
    console.log(this.data)
    
    
  })

}


}

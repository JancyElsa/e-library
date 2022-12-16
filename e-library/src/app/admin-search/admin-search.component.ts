import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Ibook } from '../ibook';
import { BooksService } from '../books.service'
@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {
  books: Ibook[] = [];
  data: any;
  bookTitle: string = '';
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.onGet();
  }
  addBookForm: FormGroup = new FormGroup({
    bookId: new FormControl('', [Validators.required]),
    bookTitle: new FormControl('', [Validators.required]),
    bookDescription: new FormControl('', [Validators.required]),
    authorName: new FormControl('', [Validators.required]),
    availBooks: new FormControl('', [Validators.required])

  })

  private newBook: Ibook =
    {
      bookId: this.addBookForm.value.bookId,
      bookTitle: this.addBookForm.value.bookTitle,
      bookDescription: this.addBookForm.value.bookDescription,
      authorName: this.addBookForm.value.authorName,
      availBooks: this.addBookForm.value.availBooks
    }
  onGet() {

    this.bookService.getBook().subscribe(data => {
      console.log(data);
      this.books = data;
    })


  }

  onAdd() {
    console.log(this.addBookForm.value)
    this.bookService.postBook(this.newBook).subscribe(data => {
      console.log(data);

      this.addBookForm.reset();
      this.onGet();



    })


  }
  //     deleteBook(){
  // this.bookService.deleteBook(id).subscribe(data=>{
  //   console.log('book is succcessfully deleted')
  //   this.onGet();
  // })
  // search()
  // {
  //   if(this.bookTitle==''){
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.books=this.books.filter(data=>{
  //       return data.bookTitle.toLocaleLowerCase().match(this.bookTitle.toLocaleLowerCase());
  //     })
  //   }
  // }

  onEdit(book: Ibook) {
    this.addBookForm.setValue({
      bookId: book.bookId,
      bookTitle: book.bookTitle,
      bookDescription: book.bookDescription,
      authorName: book.authorName,
      availBooks: book.availBooks
    });

  
  }

  
  onUpdate()
  {
    let bk:Ibook = this.addBookForm.value;
    // bk = {
    //   authorName:this.addBookForm.controls.authorName.value,

    // }
    this.bookService.updateBook(bk).subscribe(data=>{
      console.log(data);
    })
  }
}








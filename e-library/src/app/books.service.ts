import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ibook} from './ibook'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  postBook(data:Ibook):Observable<Ibook>{
    // const booksurl:string='http://localhost:3000/books';
    return this.http.post<Ibook>('http://localhost:3000/categories',data)
  }
  getBook():Observable<Ibook[]>{
    // const booksurl:string='http://localhost:3000/books';
    return this.http.get<Ibook[]>('http://localhost:3000/categories')
  }
  // deleteBook(id:number){
  //   return this.http.delete<Ibook>('http://localhost:3000/categories',id)

  // }
updateBook(body:Ibook):Observable<Ibook>{
  return this.http.put<Ibook>('http://localhost:3000/categories',body)
}
 
}

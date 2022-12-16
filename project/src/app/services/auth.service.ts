import { Injectable } from '@angular/core';
import { IRegister } from '../Interface/iregister';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// private headers=new HttpHeaders({
//   payload:'json'
// })
  constructor(private http:HttpClient) { }
  postEmp(body:IRegister):Observable<IRegister>
  {
    return this.http.post<IRegister>('https://crudcrud.com/resource',body);

  }
  getEmp():Observable<IRegister>{
    return this.http.get<IRegister>('https://crudcrud.com/resource')
  }
  updateEmp(body:IRegister):Observable<IRegister>{
    return this.http.put<IRegister>('https://crudcrud.com/resource/id',body)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../Interfaces/ilogin';
import { IRegister } from '../Interfaces/iregister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signUp(body:IRegister):Observable<IRegister>
  {
    return this.http.post<IRegister>('http://localhost:3000/register',body);
    // return this.http.post<IRegister>('https://credo-shoppingcartv5.herokuapp.com/register'
    // ,body);
  }
  signIn(body:ILogin):Observable<ILogin>{
    return this.http.post<ILogin>('https://credo-shoppingcartv5.herokuapp.com/login',body)
  }
  
}

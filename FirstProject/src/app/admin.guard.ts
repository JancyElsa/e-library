import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private rou:Router,private serv:ProductsService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(this.serv.isadmin()==true)
      {
        return true;
      }
      window.alert("You don't have permission to view this page");
      this.rou.navigateByUrl('/Login');
      return false;
    }
  }
